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

/*
Method: Variety 2
TC -> O(N) + O(min(pos, neg)) + O(leftovers)
SC -> O(N)
*/
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
/*
Time Complexity: O(2*N) { The worst case complexity is O(2*N) which is a combination of O(N) of traversing the array to segregate into neg and pos array and O(N) for adding the elements alternatively to the main array}.

Explanation: The second O(N) is a combination of O(min(pos, neg)) + O(leftover elements). There can be two cases: when only positive or only negative elements are present, O(min(pos, neg)) + O(leftover) = O(0) + O(N), and when equal no. of positive and negative elements are present, O(min(pos, neg)) + O(leftover) = O(N/2) + O(0). So, from these two cases, we can say the worst-case time complexity is O(N) for the second part, and by adding the first part we get the total complexity of O(2*N).

Space Complexity:  O(N/2 + N/2) = O(N) { N/2 space required for each of the positive and negative element arrays, where N = size of the array A}.
*/

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