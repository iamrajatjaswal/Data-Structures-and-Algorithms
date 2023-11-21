#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
Approach: Three loops nested
TC -> O(N^3)
SC -> O(1)
*/
int maximumSumSubarrayBrute(vector<int> &arr, int n) {
  int maximum = INT_MIN;

  for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
      int sum = 0;
      for (int k = i; k < j; k++) {
        sum += arr[k];
      }

      maximum = max(sum, maximum);
    }
  }

  return maximum;
}

/*
Method: Better
Approach: Two loops nested
TC -> O(N^2)
SC -> O(1)
*/
int maximumSumSubarrayBetter(vector<int> &arr, int n) {
  int maximum = INT_MIN;

  for (int i = 0; i < n; i++) {
    int sum = 0;
    for (int j = i; j < n; j++) {
      sum += arr[j];
      maximum = max(sum, maximum);
    }
  }

  return maximum;
}

/*
Method: Optimal
Approach: Kadane's Algorithm
TC -> O(N)
SC -> O(1)
*/
int maximumSumSubarrayOptimal(vector<int> &nums, int n) {
  int maximum = INT_MIN;
  int sum = 0;

  for (int i = 0; i < n; i++) {
    sum += nums[i];

    if (sum > maximum) {
      maximum = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  // To consider the sum of the empty subarray uncomment the following check
  if (maximum < 0) {
    maximum = 0;
  }

  return maximum;
}

int main() {
  /*
  Input:
  8
  -2 -3 4 -1 -2 1 5 -3
  */
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  // int output = maximumSumSubarrayBrute(arr, n);
  // int output = maximumSumSubarrayBetter(arr, n);
  int output = maximumSumSubarrayOptimal(arr, n);

  cout << output;

  return 0;
}