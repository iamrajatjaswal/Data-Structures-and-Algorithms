#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
Approach: Using one loop
TC -> O(N^3)
SC -> O(1)
*/
int largestSubarrayWith0SumBrute(vector<int> &nums) {
  int n = nums.size();
  int maxLen = 0;

  for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
      int sum = 0;
      for (int k = i; k <= j; k++) {
        sum += nums[k];
      }

      if (sum == 0) {
        maxLen = max(maxLen, j - i + 1);
      }
    }
  }

  return maxLen;
}

/*
Method: Better
Approach: Using two loops
TC -> O(N^2)
SC -> O(1)
*/
int largestSubarrayWith0SumBetter(vector<int> &nums) {
  int n = nums.size();
  int maxLen = 0;

  for (int i = 0; i < n; i++) {
    int sum = 0;
    for (int j = i; j < n; j++) {
      sum += nums[j];

      if (sum == 0) {
        maxLen = max(maxLen, j - i + 1);
      }
    }
  }

  return maxLen;
}

int main() {
  vector<int> arr = {9, -3, 3, -1, 6, -5};

  // int output = largestSubarrayWith0SumBrute(arr);
  int output = largestSubarrayWith0SumBetter(arr);
  cout << "The length of the longest subarray with sum 0 is: " << output << endl;

  return 0;
}