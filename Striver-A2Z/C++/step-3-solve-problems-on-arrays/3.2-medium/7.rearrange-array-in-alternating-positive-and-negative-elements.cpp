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

int main() {
  vector<int> arr = {3, 1, -2, -5, 2, -4};

  // vector<int> output = rearrangeArrayBrute(arr);
  vector<int> output = rearrangeArrayOptimal(arr);

  for (auto it : output) {
    cout << it << " ";
  }

  return 0;
}