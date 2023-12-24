#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
Approach: Using one loop
TC -> O(N^3)
SC -> O(1)
*/
int numberOfSubarraysWithXorKBrute(vector<int> &nums, int k) {
  int n = nums.size(); // Size of the array
  int cnt = 0;

  // step 1: Generating subarrays:
  for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
      // step 2: calculate XOR of all elements
      int xorr = 0;
      for (int k = i; k <= j; k++) {
        xorr = xorr ^ nums[k];
      }

      // step 3: check XOR and count
      if (xorr == k) {
        cnt++;
      }
    }
  }

  return cnt;
}

/*
Method: Better
TC -> O(N^2)
SC -> O(1)
*/
int numberOfSubarraysWithXorKBetter(vector<int> &nums, int k) {
  int n = nums.size(); // size of the given array
  int cnt = 0;

  // step 1: generating subarrays
  for (int i = 0; i < n; i++) {
    int xorr = 0;
    for (int j = i; j < n; j++) {
      // step 2: calculate XOR of all elements
      xorr = xorr ^ nums[j];
      // step 3: check XOR and count
      if (xorr == k) {
        cnt++;
      }
    }
  }

  return cnt;
}

/*
Method: Optimal
TC -> O(N)
SC -> O(N)
*/
int numberOfSubarraysWithXorKOptimal(vector<int> &nums, int k) {
  int n = nums.size();
  int xr = 0;
  map<int, int> mpp;
  mpp[xr]++; // {0, 1}
  int cnt = 0;

  for (int i = 0; i < n; i++) {
    xr = xr ^ nums[i];

    int x = xr ^ k;
    cnt += mpp[x];
    mpp[xr]++;
  }

  return cnt;
}

int main() {
  vector<int> arr = {4, 2, 2, 6, 4};
  int k = 6;
  // int output = numberOfSubarraysWithXorKBrute(arr, k);
  // int output = numberOfSubarraysWithXorKBetter(arr, k);
  int output = numberOfSubarraysWithXorKOptimal(arr, k);

  cout << "The number of subarrays with XOR as " << k << " is: " << output << endl;

  return 0;
}