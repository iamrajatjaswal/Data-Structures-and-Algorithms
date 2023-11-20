#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(N^2), Where N = size of the array :: There are two loops (i.e. nested) each running for N times
SC -> O(1) as we ar not using any extra space :: we are returning an array that is part of our answer so we are not considering it for the space complexity
*/
vector<int> twoSumBrute(vector<int> &nums, int target) {
  int n = nums.size();

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      if (i == j)
        continue;

      if (nums[i] + nums[j] == target) {
        return {i, j};
      }
    }
  }

  return {-1, -1};
}

/*
Method: Brute (Slighly better than the previous brute)
TC -> O(N^2), Where N = size of the array :: There are two loops (i.e. nested) each running for approximately N times
SC -> O(1) as we ar not using any extra space :: we are returning an array that is part of our answer so we are not considering it for the space complexity
*/
vector<int> twoSumBrute2(vector<int> &nums, int target) {
  int n = nums.size();

  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      if (i == j)
        continue;

      if (nums[i] + nums[j] == target) {
        return {i, j};
      }
    }
  }

  return {-1, -1};
}

/*
Method: Better
TC -> O(N) if we use unordered map & O(N * logN) if we use map

NOTE: In the worst case(which rarely happens), the unordered_map takes O(N) to find an element. In that case, the time complexity will be O(N2). If we use map instead of unordered_map, the time complexity will be O(N* logN) as the map data structure takes logN time to find an element.

SC -> O(N)
*/
vector<int> twoSumBetter(vector<int> &nums, int target) {
  int n = nums.size();
  map<int, int> mpp;

  for (int i = 0; i < n; i++) {
    int num = nums[i];
    int moreNeeded = target - num;
    if (mpp.find(moreNeeded) != mpp.end()) {
      return {mpp[moreNeeded], i};
    }

    mpp[num] = i;
  }

  return {-1, -1};
}

int main() {
  /*
  Inputs:
  5 14
  2 6 5 8 11
  */
  int n, target;
  cin >> n >> target;
  vector<int> nums(n);

  for (int i = 0; i < n; i++) {
    cin >> nums[i];
  }

  // vector<int> output = twoSumBrute(nums, target);
  // vector<int> output = twoSumBrute2(nums, target);
  vector<int> output = twoSumBetter(nums, target);

  for (auto it : output) {
    cout << it << " ";
  }

  return 0;
}