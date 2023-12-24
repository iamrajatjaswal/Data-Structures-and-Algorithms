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

int main() {
  vector<int> arr = {4, 2, 2, 6, 4};
  int k = 6;
  int output = numberOfSubarraysWithXorKBrute(arr, k);

  cout << "The number of subarrays with XOR as " << k << " is: " << output << endl;

  return 0;
}