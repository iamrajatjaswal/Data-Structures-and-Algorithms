#include <bits/stdc++.h>
using namespace std;

/*

Problem Statement:
You are given a sorted integer array 'arr' of size 'n'. You need to remove duplicates from the array such that each element appears only once. Return the length of this new array.

Note:
Do not allocate extra space for another array. You need to do this by modifying the given input array in-place with O(1) extra memory.

*/


/*

Optimal Solution
Method: Two Pointers
Time Complexity: O(N)
Space Complexity: O(1)

*/
int removeDuplicates(vector<int> &arr, int n) {
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

  int output = removeDuplicates(arr, n);
  cout << output << endl;
  return 0;
}