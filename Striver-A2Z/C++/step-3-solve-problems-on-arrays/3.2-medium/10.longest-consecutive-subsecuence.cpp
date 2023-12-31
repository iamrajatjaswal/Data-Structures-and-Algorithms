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

/*
Method: Better
TC -> O(NlogN) + O(N) : O(NlogN) for sorting the array. To find the longest sequence, we are using a loop that results in O(N).
SC -> O(1) : As we are not using any extra space to solve this problem
*/
int longestConsecutiveSubsecuenceBetter(vector<int> &nums) {
  int n = nums.size();
  if (n == 0)
    return 0;

  // sort the array
  sort(nums.begin(), nums.end());
  int longest = 1;
  int count = 1;
  int lastSmaller = INT_MIN;

  for (int i = 0; i < n; i++) {
    if (nums[i] - 1 == lastSmaller) {
      lastSmaller = nums[i];
      count++;
    } else if (nums[i] != lastSmaller) {
      count = 1;
      lastSmaller = nums[i];
    }

    longest = max(longest, count);
  }

  return longest;
}

/*
Method: Optimal
TC ->  O(N) + O(2*N) ~ O(3*N), where N = size of the array.
Reason: O(N) for putting all the elements into the set data structure. After that for every starting element, we are finding the consecutive elements. Though we are using nested loops, the set will be traversed at most twice in the worst case. So, the time complexity is O(2*N) instead of O(N2).
SC -> O(N) : as we are using the set data structure to solve this problem.
*/
int longestConsecutiveSubsecuenceOptimal(vector<int> &nums) {
  int n = nums.size();
  if (n == 0)
    return 0;

  int longest = 1;
  unordered_set<int> st;

  for (int i = 0; i < n; i++) {
    st.insert(nums[i]);
  }

  for (auto it : st) {
    if (st.find(it - 1) == st.end()) {
      int count = 1;
      int x = it;

      while (st.find(x + 1) != st.end()) {
        count++;
        x++;
      }

      longest = max(longest, count);
    }
  }

  return longest;
}

int main() {
  vector<int> arr = {102, 4, 100, 1, 101, 3, 2, 1, 1};
  // int output = longestConsecutiveSubsecuenceBrute(arr);
  // int output = longestConsecutiveSubsecuenceBetter(arr);
  int output = longestConsecutiveSubsecuenceOptimal(arr);

  cout << "The longest consecutive sequence is: " << output;

  return 0;
}