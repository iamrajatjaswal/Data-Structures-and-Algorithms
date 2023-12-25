#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute

TC -> O(N2), where N = size of the given array.
Reason: We are using nested loops here and those two loops roughly run for N times.

SC -> O(1) as we are not using any extra space to solve this problem.

*/
int numberOfInversionsBrute(vector<int> &nums) {
  int n = nums.size();
  // Count the number of pairs:
  int cnt = 0;
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        cnt++;
      }
    }
  }

  return cnt;
}

int main() {
  vector<int> arr = {5, 4, 3, 2, 1};
  int cnt = numberOfInversionsBrute(arr);

  cout << "The number of inversions is: " << cnt << endl;
  return 0;
}