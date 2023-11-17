#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(N^3) : this is near about N^3 because the loops are diminshing in size as we nest them
SC -> O(1)
*/
int getLongestSubarrayBrute(vector<int> &arr, long long k) {
  int n = arr.size();
  int len = 0; // length of the subarray

  for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
      long long sum = 0;
      for (int K = i; K <= j; K++) {
        sum += arr[K];
      }

      if (sum == k) {
        len = max(len, j - i + 1);
      }
    }
  }

  return len;
}

int main() {
  /*
  Inputs:
  10 3
  1 2 3 1 1 1 1 4 2 3
  */
  int n, k;
  cin >> n >> k;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int output = getLongestSubarrayBrute(arr, k);
  cout << output;

  return 0;
}