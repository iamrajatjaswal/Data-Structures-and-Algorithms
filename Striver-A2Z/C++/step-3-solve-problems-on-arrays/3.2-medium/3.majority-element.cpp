#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(N^2)
SC -> O(1)
*/
int majorityElementBrute(vector<int> &nums) {
  int n = nums.size();

  for (int i = 0; i < n; i++) {
    int count = 0;

    for (int j = 0; j < n; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }

    if (count > n / 2)
      return nums[i];
  }

  return -1;
}

/*
Method: Better
TC -> O(N * logN) + O(N)
SC -> O(N) : in the worst case this will only happen if the array contains all the unique elements
*/
int majorityElementBetter(vector<int> &nums) {
  int n = nums.size();
  map<int, int> mpp;

  for (int i = 0; i < n; i++) {
    mpp[nums[i]]++;
  }

  for (auto it : mpp) {
    if (it.second > n / 2) {
      return it.first;
    }
  }

  return -1;
}

int main() {
  /*
  Inputs:
  7
  2 2 3 3 1 2 2
  */

  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  // int output = majorityElementBrute(arr);
  int output = majorityElementBetter(arr);

  cout << output;

  return 0;
}