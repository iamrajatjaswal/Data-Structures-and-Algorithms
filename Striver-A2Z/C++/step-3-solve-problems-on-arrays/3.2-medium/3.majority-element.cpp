#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
Approach: Nested Loop
TC -> O(N^2)
SC -> O(1)
*/
int majorityElementBrute(vector<int> &nums) {
  int n = nums.size();

  for (int i = 0; i < n; i++) {
    int count = 0;

    for (int j = 0; j < n; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }

    if (count > n / 2)
      return nums[i];
  }

  return -1;
}

/*
Method: Better
Approach: Using map datastructure and storing the count of the element
TC -> O(N * logN) + O(N)
SC -> O(N) : in the worst case this will only happen if the array contains all the unique elements
*/
int majorityElementBetter(vector<int> &nums) {
  int n = nums.size();
  map<int, int> mpp;

  for (int i = 0; i < n; i++) {
    mpp[nums[i]]++;
  }

  for (auto it : mpp) {
    if (it.second > n / 2) {
      return it.first;
    }
  }

  return -1;
}

/*
Method: Optimal
Approach: Moore's Voting Algorithm
TC -> O(N) + O(N) : the second O(N) will not be done if it is stated in the problem that there always exist a majority element or if there is probability that there might not exist the majority element then we will have to vefiry with second O(N) and the time complexity become O(2N)
SC -> O(1)
*/
int majorityElementOptimal(vector<int> &nums) {
  int n = nums.size();
  int count = 0;
  int el;

  for (int i = 0; i < n; i++) {
    if (count == 0) {
      count = 1;
      el = nums[i];
    } else if (el == nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  int verifyCount = 0;
  for (int i = 0; i < n; i++) {
    if (nums[i] == el)
      verifyCount++;
  }

  if (verifyCount > n / 2) {
    return el;
  }

  return -1;
}

int main() {
  /*
  Inputs:
  7
  2 2 3 3 1 2 2
  */

  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  // int output = majorityElementBrute(arr);
  // int output = majorityElementBetter(arr);
  int output = majorityElementOptimal(arr);

  cout << output;

  return 0;
}