#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute

TC -> O(N3), where N = size of the array.
Reason: We are using three nested loops here. Though all are not running for exactly N times, the time complexity will be approximately O(N3).

SC -> O(1) as we are not using any extra space.
*/
int findCountOfSubarraysWithGivenSumBrute(vector<int> &nums, int k) {
  int n = nums.size(); // size of the given array
  int count = 0;       // number of subarrays

  for (int i = 0; i < n; i++) {   // starting index
    for (int j = i; j < n; j++) { // ending index
      int sum = 0;
      // calculate the sum of the subarray [i...j]
      for (int k = i; k <= j; k++) {
        sum += nums[k];
      }
      // increase the count if sum == k
      if (sum == k) {
        count++;
      }
    }
  }

  return count;
}

/*
Method: Better

TC -> O(N2), where N = size of the array.
Reason: We are using two nested loops here. As each of them is running for exactly N times, the time complexity will be approximately O(N2).

SC -> O(1) as we are not using any extra space.
*/
int findCountOfSubarraysWithGivenSumBetter(vector<int> &nums, int k) {
  int n = nums.size();
  int count = 0;

  for (int i = 0; i < n; i++) {
    int sum = 0;

    for (int j = i; j < n; j++) {
      sum += nums[j];

      if (sum == k) {
        count++;
      }
    }
  }

  return count;
}

int main() {
  vector<int> arr = {1, 2, 3, -3, 1, 1, 1, 4, 2, -3};
  int k = 3;

  // int count = findCountOfSubarraysWithGivenSumBrute(arr, k);
  int count = findCountOfSubarraysWithGivenSumBetter(arr, k);

  cout << "The number of subarrays is: " << count << endl;

  return 0;
}