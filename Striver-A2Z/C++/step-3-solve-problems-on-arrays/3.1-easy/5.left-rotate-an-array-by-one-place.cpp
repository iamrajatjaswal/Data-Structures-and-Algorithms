#include <bits/stdc++.h>
using namespace std;

/*
Brute Solution:
Method: Brute
TC: O(N)
SC: O(1) for extra space being used
*/
vector<int> leftRotateArrayByOnePlaceBrute(vector<int> &arr, int n) {
  int temp = arr[0];
  for (int i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }

  arr[n - 1] = temp;

  return arr;
}

int main() {
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  vector<int> output = leftRotateArrayByOnePlaceBrute(arr, n);

  for (auto it : output) {
    cout << it << endl;
  }
  return 0;
}