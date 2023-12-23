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

/*
Method: Better

TC -> O(N2 * log(no. of unique triplets)), where N = size of the array.
Reason: Here, we are mainly using 3 nested loops. And inserting triplets into the set takes O(log(no. of unique triplets)) time complexity. But we are not considering the time complexity of sorting as we are just sorting 3 elements every time.

SC -> O(2 * no. of the unique triplets) + O(N) as we are using a set data structure and a list to store the triplets and extra O(N) for storing the array elements in another set.
*/
vector<vector<int>> threeSumBetter(vector<int> &nums) {
  int n = nums.size();
  set<vector<int>> st;

  for (int i = 0; i < n; i++) {
    set<int> hashset;
    for (int j = i + 1; j < n; j++) {
      // Calculate the 3rd element:
      int third = -(nums[i] + nums[j]);

      // Find the element in the set:
      if (hashset.find(third) != hashset.end()) {
        vector<int> temp = {nums[i], nums[j], third};
        sort(temp.begin(), temp.end());
        st.insert(temp);
      }
      hashset.insert(nums[j]);
    }
  }

  // store the set in the answer:
  vector<vector<int>> ans(st.begin(), st.end());
  return ans;
}

/*
Method: Optimal

TC -> O(NlogN)+O(N2), where N = size of the array.
Reason: The pointer i, is running for approximately N times. And both the pointers j and k combined can run for approximately N times including the operation of skipping duplicates. So the total time complexity will be O(N2).

SC -> O(no. of quadruplets), This space is only used to store the answer. We are not using any extra space to solve this problem. So, from that perspective, space complexity can be written as O(1).
*/
vector<vector<int>> threeSumOptimal(vector<int> &nums) {
  int n = nums.size();
  vector<vector<int>> ans;
  sort(nums.begin(), nums.end());

  for (int i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1])
      continue;

    int j = i + 1;
    int k = n - 1;

    while (j < k) {
      int sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else { // when sum == 0
        vector<int> temp = {nums[i], nums[j], nums[k]};
        ans.push_back(temp);
        j++;
        k--;

        while (j < k && nums[j] == nums[j - 1])
          j++;
        while (j < k && nums[k] == nums[k + 1])
          k--;
      }
    }
  }

  return ans;
}

int main() {

  vector<int> arr = {-1, 0, 1, 2, -1, -4};

  // vector<vector<int>> output = threeSumBrute(arr);
  // vector<vector<int>> output = threeSumBetter(arr);
  vector<vector<int>> output = threeSumOptimal(arr);

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