#include <bits/stdc++.h>
using namespace std;

/*
Method: Optimal
Approach: Kadane's Algorithm
TC -> O(N)
SC -> O(1)
*/
int maximumSumSubarrayOptimal(vector<int> &nums, int n) {
  int maximum = INT_MIN;
  int sum = 0;

  int start = 0;
  int ansStart = -1;
  int ansEnd = -1;

  for (int i = 0; i < n; i++) {
    if (sum == 0)
      start = i;

    sum += nums[i];

    if (sum > maximum) {
      maximum = sum;

      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  // printing the subarray:
  cout << "The subarray is: [";
  for (int i = ansStart; i <= ansEnd; i++) {
    cout << nums[i] << " ";
  }
  cout << "]" << endl;

  // To consider the sum of the empty subarray
  // uncomment the following check:

  // if (maxi < 0) maxi = 0;

  // To consider the sum of the empty subarray uncomment the following check
  // if (maximum < 0) {
  //   maximum = 0;
  // }

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

  int output = maximumSumSubarrayOptimal(arr, n);

  cout << output;

  return 0;
}