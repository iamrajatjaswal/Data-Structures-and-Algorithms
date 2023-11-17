#include <bits/stdc++.h>
using namespace std;

/*
  TC -> O(N)
  SC -> O(1)
*/
int findMaximumConsecutiveOnes(vector<int> &nums) {
  int maximum = 0;
  int count = 0;

  for (int i = 0; i < nums.size(); i++) {
    if (nums[i] == 1) {
      count++;

      if (count > maximum) {
        maximum = count;
      }
    } else {
      count = 0;
    }
  }

  return maximum;
}

int main() {
  /*
    Inputs:
    9
    1 1 0 1 1 1 0 1 1
  */
  int n = 9;
  cin >> n;
  vector<int> nums(n);

  for (int i = 0; i < n; i++) {
    cin >> nums[i];
  }

  int output = findMaximumConsecutiveOnes(nums);
  cout << output;

  return 0;
}