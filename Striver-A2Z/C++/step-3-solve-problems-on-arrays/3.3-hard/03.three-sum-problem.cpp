#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute

TC -> O(N^3 * log(no. of unique triplets)), where N = size of the array.
Reason: Here, we are mainly using 3 nested loops. And inserting triplets into the set takes O(log(no. of unique triplets)) time complexity. But we are not considering the time complexity of sorting as we are just sorting 3 elements every time.

SC -> O(2 * no. of the unique triplets) as we are using a set data structure and a list to store the triplets.
*/
vector<vector<int>> threeSumBrute(vector<int> &nums) {
  int n = nums.size();
  set<vector<int>> st;

  // check all possible triplets
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      for (int k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          vector<int> temp = {nums[i], nums[j], nums[k]};
          sort(temp.begin(), temp.end());
          st.insert(temp);
        }
      }
    }
  }

  // store the set elements in the answer:
  vector<vector<int>> ans(st.begin(), st.end());
  return ans;
}

int main() {

  vector<int> arr = {-1, 0, 1, 2, -1, -4};

  vector<vector<int>> output = threeSumBrute(arr);

  for (auto it : output) {
    cout << "[ ";
    for (auto i : it) {
      cout << i << " ";
    }
    cout << "] ";
  }
  cout << endl;

  return 0;
}