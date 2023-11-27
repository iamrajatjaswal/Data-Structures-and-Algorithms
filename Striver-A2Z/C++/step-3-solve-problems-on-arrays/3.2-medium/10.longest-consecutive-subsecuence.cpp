#include <bits/stdc++.h>
using namespace std;

bool linearSearch(vector<int> &nums, int num) {
  int n = nums.size();

  for (int i = 0; i < n; i++) {
    if (nums[i] == num) {
      return true;
    }
  }
  return false;
}

/*
Method: Brute
TC -> O(N^2) : We are using nested loops each running for approximately N times.
SC -> O(1) : as we are not using any extra space to solve this problem
*/
int longestConsecutiveSubsecuenceBrute(vector<int> &nums) {
  int n = nums.size(); // size of the array
  int longest = 1;

  // pick for element and search for it

  for (int i = 0; i < n; i++) {
    int x = nums[i];
    int count = 1;

    // search for consecutive numbers using linear search
    while (linearSearch(nums, x + 1) == true) {
      x += 1;
      count += 1;
    }

    longest = max(longest, count);
  }

  return longest;
}

int main() {
  vector<int> arr = {102, 4, 100, 1, 101, 3, 2, 1, 1};
  int output = longestConsecutiveSubsecuenceBrute(arr);

  cout << "The longest consecutive sequence is: " << output;

  return 0;
}