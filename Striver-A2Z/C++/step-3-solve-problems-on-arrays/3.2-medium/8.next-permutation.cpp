#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
Approach Recursion
TC -> O(N! * N)
SC -> O(N)
*/
void recursivePermutations(vector<int> &nums, vector<int> &ds, int freq[], vector<vector<int>> &ans) {
  if (nums.size() == ds.size()) {
    ans.push_back(ds);
    return;
  }

  for (int i = 0; i < nums.size(); i++) {
    if (!freq[i]) {
      freq[i] = 1;
      ds.push_back(nums[i]);

      recursivePermutations(nums, ds, freq, ans);

      freq[i] = 0;
      ds.pop_back();
    }
  }
}

vector<vector<int>> getAllPermutations(vector<int> &nums) {
  vector<vector<int>> ans;
  vector<int> ds;
  int freq[nums.size()];
  for (int i = 0; i < nums.size(); i++)
    freq[i] = 0;

  recursivePermutations(nums, ds, freq, ans);

  return ans;
}

vector<int> nextGreaterPermutationBrute(vector<int> &nums) {
  // sorting the array to get the correct order of permutations
  vector<int> sortedNums = nums;
  sort(sortedNums.begin(), sortedNums.end());
  vector<vector<int>> permutations = getAllPermutations(sortedNums);

  // vector<vector<int>> permutations = getAllPermutations(nums);

  // To print out all the permutations
  for (auto &permutation : permutations) {
    for (auto &num : permutation) {
      cout << num << " ";
    }
    cout << endl;
  }
  cout << endl;

  // Linear search for the index of nums in permutations
  int index = -1;
  for (int i = 0; i < permutations.size(); i++) {
    if (permutations[i] == nums) {
      index = i;
      break;
    }
  }

  // If the given permutation is found, return the next one
  if (index != -1 && index + 1 < permutations.size()) {
    return permutations[index + 1];
  }

  // If the given permutation is the last one, return the first one
  return permutations[0];
}

void recurPermute(int index, vector<int> &nums, vector<vector<int>> &permutations) {
  if (index == nums.size()) {
    permutations.push_back(nums);
    return;
  }

  for (int i = index; i < nums.size(); i++) {
    swap(nums[index], nums[i]);

    recurPermute(index + 1, nums, permutations);

    swap(nums[index], nums[i]);
  }
}

/*
Method: Better
Approach Recursion
TC -> O(N! * N)
SC -> O(1)
*/
vector<int> nextGreaterPermutationBetter(vector<int> &nums) {
  vector<int> sortedNums = nums;
  sort(sortedNums.begin(), sortedNums.end());

  vector<vector<int>> permutations;
  recurPermute(0, sortedNums, permutations);
  // recurPermute(0, nums, permutations);

  // To print out all the permutations
  for (auto &permutation : permutations) {
    for (auto &num : permutation) {
      cout << num << " ";
    }
    cout << endl;
  }
  cout << endl;

  // linear search for index in permute
  int index = -1;
  for (int i = 0; i < permutations.size(); i++) {
    if (permutations[i] == nums) {
      index = i;
      break;
    }
  }

  if (index != -1 && index < permutations.size()) {
    return permutations[index + 1];
  }

  return permutations[0];
}

/*
Method: Optimal
TC -> O(3 * N) at the worst case
SC -> O(1)
*/
vector<int> nextGreaterPermutationOptimal(vector<int> &nums) {
  int n = nums.size();
  int index = -1;

  for (int i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    for (int i = 0; i < n / 2; i++) {
      swap(nums[i], nums[n - i - 1]);
    }

    return nums;
  }

  for (int i = n - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      swap(nums[i], nums[index]);
      break;
    }
  }

  int left = index + 1;
  int right = n - 1;
  while (left < right) {
    swap(nums[left], nums[right]);
    left++;
    right--;
  }

  return nums;
}

int main() {
  // vector<int> arr = {3, 2, 1}; // 1 2 3 
  // vector<int> arr = {2, 1, 3};
  // vector<int> arr = {2, 3, 1};
  // vector<int> arr = {1, 2, 3};
  vector<int> arr = {2, 1, 5, 4, 3, 0, 0}; // 2 3 0 0 1 4 5 

  // vector<int> output = nextGreaterPermutationBrute(arr);
  // vector<int> output = nextGreaterPermutationBetter(arr);
  vector<int> output = nextGreaterPermutationOptimal(arr);

  for (auto &it : output) {
    cout << it << " ";
  }

  return 0;
}