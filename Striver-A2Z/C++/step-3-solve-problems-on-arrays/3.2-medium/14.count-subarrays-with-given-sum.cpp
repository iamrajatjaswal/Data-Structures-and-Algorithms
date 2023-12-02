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

int findCountOfSubarraysWithGivenSumOptimal(vector<int> &nums, int k) {
  int n = nums.size(); // size of the given array.
  map<int, int> mpp;
  int preSum = 0, count = 0;

  mpp[0] = 1; // Setting 0 in the map.

  cout << "mpp ==> " << endl;
  for (auto it : mpp) {
    cout << it.first << "," << it.second << endl;
  }
  cout << "==========================" << endl;

  for (int i = 0; i < n; i++) {
    // add current element to prefix Sum:
    preSum += nums[i]; // 1 + 2 + 3 -3 + 1 + 1 + 1 + 4 + 2 - 3 = 9

    cout << "nums[i] ==> " << nums[i] << endl;
    cout << "preSum ==> " << preSum << endl;

    // Calculate x-k:
    int remove = preSum - k; // 9 - 3 = 6

    cout << "remove ==> " << preSum << " - " << k << " ==> " << remove << endl;

    // Add the number of subarrays to be removed:
    count += mpp[remove]; // 7

    cout << "count ==> " << count << endl;

    // Update the count of prefix sum
    // in the map.
    mpp[preSum] += 1; // 6, 3

    cout << "mpp ==> " << endl;
    for (auto it : mpp) {
      cout << it.first << "," << it.second << endl;
    }
    cout << "==========================" << endl;
    /*
    Map Data Structure key value pairs
    -2,0
    0,1
    1,1
    2,0
    3,2
    4,1
    5,1
    6,2
    7,0
    9,1
    10,1
    12,1
    */
  }
  return count;
}

int main() {
  vector<int> arr = {1, 2, 3, -3, 1, 1, 1, 4, 2, -3};
  int k = 3;

  // int count = findCountOfSubarraysWithGivenSumBrute(arr, k);
  // int count = findCountOfSubarraysWithGivenSumBetter(arr, k);
  int count = findCountOfSubarraysWithGivenSumOptimal(arr, k);

  cout << "The number of subarrays is: " << count << endl;

  return 0;
}