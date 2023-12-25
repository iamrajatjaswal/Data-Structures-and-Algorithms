#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
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