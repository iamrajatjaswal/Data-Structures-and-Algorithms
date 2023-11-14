#include <bits/stdc++.h>
using namespace std;

/*
Brute Solution:
Method: Brute
TC: O(N)
SC: O(1) for extra space being used
*/
vector<int> rightRotateArrayByOnePlaceBrute(vector<int> &arr, int n) {
  int temp = arr[n - 1];
  for (int i = n  - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = temp;

  return arr;
}

int main() {
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  vector<int> output = rightRotateArrayByOnePlaceBrute(arr, n);

  for (auto it : output) {
    cout << it << endl;
  }
  return 0;
}