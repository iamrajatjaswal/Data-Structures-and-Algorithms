#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(N + N/2)
SC -> O(N)
*/
vector<int> rearrangeArrayBrute(vector<int> &nums) {
  int n = nums.size();
  vector<int> positiveElements;
  vector<int> negativeElements;

  for (int i = 0; i < n; i++) {
    int element = nums[i];
    if (element >= 0) {
      positiveElements.push_back(element);
    } else {
      negativeElements.push_back(element);
    }
  }

  for (int i = 0; i < n / 2; i++) {
    nums[2 * i] = positiveElements[i];
    nums[2 * i + 1] = negativeElements[i];
  }

  return nums;
}

/*
Method: Optimal
TC -> O(N)
SC -> O(N)
*/
vector<int> rearrangeArrayOptimal(vector<int> &nums) {
  int n = nums.size();
  vector<int> result(n);

  int positiveIndex = 0, negativeIndex = 1;

  for (int i = 0; i < n; i++) {
    if (nums[i] < 0) {
      result[negativeIndex] = nums[i];
      negativeIndex += 2;
    } else {
      result[positiveIndex] = nums[i];
      positiveIndex += 2;
    }
  }

  return result;
}

vector<int> rearrangeArrayVariety2(vector<int> &nums) {
  int n = nums.size();
  vector<int> positiveElements;
  vector<int> negativeElements;

  for (int i = 0; i < n; i++) {
    if (nums[i] < 0) {
      negativeElements.push_back(nums[i]);
    } else {
      positiveElements.push_back(nums[i]);
    }
  }

  if (positiveElements.size() > negativeElements.size()) {
    for (int i = 0; i < negativeElements.size(); i++) {
      nums[2 * i] = positiveElements[i];
      nums[2 * i + 1] = negativeElements[i];
    }

    int startingIndex = 2 * negativeElements.size();
    for (int i = negativeElements.size(); i < positiveElements.size(); i++) {
      nums[startingIndex] = positiveElements[i];
      startingIndex++;
    }
  } else {
    for (int i = 0; i < positiveElements.size(); i++) {
      nums[2 * i] = positiveElements[i];
      nums[2 * i + 1] = negativeElements[i];
    }

    int startingIndex = 2 * positiveElements.size();
    for (int i = positiveElements.size(); i < negativeElements.size(); i++) {
      nums[startingIndex] = negativeElements[i];
      startingIndex++;
    };
  }

  return nums;
}

int main() {
  // Variety I : If postive & negative elements are equal
  vector<int> arr = {3, 1, -2, -5, 2, -4};

  // vector<int> output = rearrangeArrayBrute(arr);
  vector<int> output = rearrangeArrayOptimal(arr);

  for (auto it : output) {
    cout << it << " ";
  }
  cout << endl;

  // Variety II : If postive & negative elements are not equal
  vector<int> arr2 = {-1, 2, 3, 4, -3, 1, -7, -8, -11, -4, 9};

  vector<int> output2 = rearrangeArrayVariety2(arr2);

  for (auto it : output2) {
    cout << it << " ";
  }

  return 0;
}