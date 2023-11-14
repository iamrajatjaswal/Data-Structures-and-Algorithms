#include <bits/stdc++.h>
using namespace std;

/*
Problem Statement:
You are given a sorted integer array 'arr' of size 'n'. You need to remove duplicates from the array such that each element appears only once. Return the length of this new array.

Note:
Do not allocate extra space for another array. You need to do this by modifying the given input array in-place with O(1) extra memory.
*/

/*
Brute Solution:
Method: Using set datatype
TC: O(N * logN) + O(N)
SC: O(N)
*/
int removeDuplicatesBrute(vector<int> &arr, int n) {
  set<int> uniqueSet;
  // For above operation TC is O(N * logN);
  for (int i = 0; i < n; i++) {
    uniqueSet.insert(arr[i]);
  }

  // TC is O(N) for below loop
  int index = 0;
  for (auto it : uniqueSet) {
    arr[index] = it;
    index++;
  }

  // returning the number of the elements
  return index;
}

/*
Optimal Solution
Method: Two Pointers
Time Complexity: O(N)
Space Complexity: O(1)
*/
int removeDuplicatesOptimal(vector<int> &arr, int n) {
  int i = 0;
  for (int j = 1; j < n; j++) {
    if (arr[j] != arr[i]) {
      arr[++i] = arr[j];
    }
  }

  // we need to increment the returned i because the i was at the last index of the unique element but the number of elements is always index of the array + 1.
  return i + 1;
}

int main() {
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int output = removeDuplicatesBrute(arr, n);
  // int output = removeDuplicatesOptimal(arr, n);
  cout << output << endl;
  return 0;
}