#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
Approach Recursion
TC -> O(N + N/2)
SC -> O(N)
*/

vector<int> recursivePermutations() {

}

vector<vector<int>> getAllPermutations(vector<int> &nums) {
  vector<vector<int>> ans;
  vector<int> ds;
  int freq[nums.size()];
  for (int i = 0; i < nums.size(); i++)
    freq[i] = 0;


    return recursivePermutations(nums, ds, freq, ans);

}

vector<int> nextGreaterPermutationBrute(vector<int> &nums) {
  vector<vector<int>> permutations = getAllPermutations(nums);
  // abc
}

int main() {
  vector<int> arr = {2, 1, 5, 4, 3, 0, 0};

  vector<int> output = nextGreaterPermutationBrute(arr);

  for (auto it : output) {
    cout << it << " ";
  }

  return 0;
}