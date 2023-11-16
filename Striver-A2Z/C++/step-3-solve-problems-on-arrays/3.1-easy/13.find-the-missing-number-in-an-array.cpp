#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(N^2) : Because in a hypothetical scenario it can be possible that the loop runs till the end and the last number is the missing number
SC -> O(1)
*/
int missingNumberBrute(vector<int> arr, int N, int n) {
  // Looping till total numbers to find the missing numbers
  for (int i = 1; i <= N; i++) {
    int flag = 0;
    // Now looping till the length of the array
    for (int j = 0; j < n; j++) {
      if (arr[j] == i) {
        flag = 1;
        break;
      }
    }

    if (flag == 0) {
      return i;
    }
  }

  return 0;
}

int main() {
  int n, N;
  cin >> n >> N;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int output = missingNumberBrute(arr, N, n);

  cout << output;

  return 0;
}