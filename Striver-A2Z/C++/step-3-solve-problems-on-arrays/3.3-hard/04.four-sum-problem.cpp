#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute

TC ->  O(N^4), where N = size of the array.
Reason: Here, we are mainly using 4 nested loops. But we not considering the time complexity of sorting as we are just sorting 4 elements every time.

SC -> O(2 * no. of the quadruplets) as we are using a set data structure and a list to store the quads.
*/
vector<vector<int>> fourSumBrute(vector<int> &nums, int target) {
  int n = nums.size(); // size of the array
  set<vector<int>> st;

  // checking all possible quadruplets:
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      for (int k = j + 1; k < n; k++) {
        for (int l = k + 1; l < n; l++) {
          // taking bigger datatype to avoid integer outflow
          long long sum = nums[i] + nums[j];
          sum += nums[k];
          sum += nums[l];

          if (sum == target) {
            vector<int> temp = {nums[i], nums[j], nums[k], nums[l]};
            sort(temp.begin(), temp.end());
            st.insert(temp);
          }
        }
      }
    }
  }

  vector<vector<int>> result(st.begin(), st.end());
  return result;
}

int main() {
  vector<int> nums = {4, 3, 3, 4, 4, 2, 1, 2, 1, 1};
  int target = 9;

  vector<vector<int>> output = fourSumBrute(nums, target);
  cout << "The quadruplets are: " << endl;

  for (auto it : output) {
    cout << "[ ";
    for (auto el : it) {
      cout << el << " ";
    }
    cout << " ]";
  }
  cout << endl;

  return 0;
}