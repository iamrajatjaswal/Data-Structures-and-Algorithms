#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(N^2) : Since there is nested loop so O(N^2)
SC -> O(N) : There is no extra space being used but O(N) space will be used by the result array
*/
vector<int> leadersInAnArrayBrute(vector<int> &nums) {
  int n = nums.size();
  vector<int> result;

  for (int i = 0; i < n; i++) {
    bool leader = true;
    for (int j = i + 1; j < n; j++) {

      // if any element found which is greater than the current leader then the current element is not the leader
      if (nums[i] < nums[j]) {
        leader = false;
        break;
      }
    }

    // checking if the current element is the leader then adding that into the result array
    if (leader == true)
      result.push_back(nums[i]);
  }

  return result;
}

/*
Method: Optimal
TC -> O(N) : Since the array is traversed single time from back to front.
SC -> O(N) : There is no extra space being used but O(N) space will be used by the result array
*/
vector<int> leadersInAnArrayOptimal(vector<int> &nums) {
  int n = nums.size();
  vector<int> result;

  // last element in the array will be a leader push that into the array
  int maximum = nums[n - 1];
  result.push_back(maximum);

  for (int i = n - 2; i >= 0; i--) {
    if (nums[i] > maximum) {
      result.push_back(nums[i]);
      maximum = nums[i];
    }
  }

  return result;
}

int main() {
  vector<int> arr = {10, 22, 12, 3, 0, 6};

  // vector<int> output = leadersInAnArrayBrute(arr);
  vector<int> output = leadersInAnArrayOptimal(arr);

  for (auto it : output) {
    cout << it << " ";
  }

  return 0;
}