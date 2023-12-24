#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute

TC -> O(N*logN) + O(2*N), where N = the size of the given array.
Reason: Sorting the given array takes  O(N*logN) time complexity. Now, after that, we are using 2 loops i and j. But while using loop i, we skip all the intervals that are merged with loop j. So, we can conclude that every interval is roughly visited twice(roughly, once for checking or skipping and once for merging). So, the time complexity will be 2*N instead of N2.

SC -> O(N), as we are using an answer list to store the merged intervals. Except for the answer array, we are not using any extra space.
*/
vector<vector<int>> mergeOverlappingIntervalsBrute(vector<vector<int>> &intervals) {
  int n = intervals.size();
  sort(intervals.begin(), intervals.end());
  vector<vector<int>> ans;

  for (int i = 0; i < n; i++) {
    int start = intervals[i][0];
    int end = intervals[i][1];

    // skip all the merged intervals
    if (!ans.empty() && end <= ans.back()[1]) {
      continue;
    }

    for (int j = i + 1; j < n; j++) {
      if (intervals[j][0] < end) {
        end = max(end, intervals[j][1]);
      } else {
        break;
      }
    }

    ans.push_back({start, end});
  }

  return ans;
}

/*
Method: Optimal

TC -> O(N*logN) + O(N), where N = the size of the given array.
Reason: Sorting the given array takes  O(N*logN) time complexity. Now, after that, we are just using a single loop that runs for N times. So, the time complexity will be O(N).

SC -> O(N), as we are using an answer list to store the merged intervals. Except for the answer array, we are not using any extra space.
*/
vector<vector<int>> mergeOverlappingIntervalsOptimal(vector<vector<int>> &intervals) {
  int n = intervals.size(); // size of the arary

  // sort the given intervals
  sort(intervals.begin(), intervals.end());

  vector<vector<int>> ans;

  for (int i = 0; i < n; i++) {
    // if the current interval does not lie in the last interval
    if (ans.empty() || intervals[i][0] > ans.back()[1]) {
      ans.push_back(intervals[i]);
    } else {
      // if the current interval lies in the last interval
      ans.back()[1] = max(ans.back()[1], intervals[i][1]);
    }
  }

  return ans;
}

int main() {
  vector<vector<int>> arr = {{1, 3}, {2, 6}, {8, 9}, {9, 11}, {8, 10}, {2, 4}, {15, 18}, {16, 17}, {15, 18}};
  // expected output: [[1,6], [8, 11], [15, 18]]

  // vector<vector<int>> output = mergeOverlappingIntervalsBrute(arr);
  /*

  */
  vector<vector<int>> output = mergeOverlappingIntervalsOptimal(arr);

  cout << "The merged intervals are: " << endl;
  for (auto it : output) {
    cout << "[ " << it[0] << ", " << it[1] << "] ";
  }
  cout << endl;

  return 0;
}