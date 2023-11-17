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

/*
Method: Better
TC -> O(N) + O(N) = O(2N) : because we are looping twice
SC -> O(N) : because we are using the hash array
*/
int missingNumberBetter(vector<int> arr, int N, int n) {
  vector<int> hash(N + 1, 0);

  for (int i = 0; i < n; i++) {
    hash[arr[i]] = 1;
  }

  for (int i = 1; i <= N; i++) {
    if (hash[i] == 0) {
      return i;
    }
  }

  return 0;
}

/*
Method: Optimal
Approach: Calculating expected sum with the formula of sum of first N natural numbers and then calculating the current sum and subtracting that from the expected sum.
TC: O(N) : Because we are looping only once.
SC: O(1)
*/
int missingNumberOptimalWithSumApproach(vector<int> arr, int N, int n) {
  int expectedSum = (N * (N + 1)) / 2;

  int currentSum = 0;

  for (int i = 0; i < n; i++) {
    currentSum += arr[i];
  }

  int missingNumber = expectedSum - currentSum;

  return missingNumber;
}

/*
Method: Optimal
Approach: XOR Approach

*/
int missingNumberOptimalWithXORApproach(vector<int> arr, int N, int n) {
  int xor1 = 0;
  int xor2 = 0;
  // for (int i = 0; i < n; i++) {
  for (int i = 0; i < N - 1; i++) { // or we can write the above line as this
    xor1 ^= (i + 1);
    xor2 ^= arr[i];
  }

  xor1 ^= N;

  return xor1 ^ xor2;
}

int main() {
  int n, N;
  cin >> n >> N;
  vector<int> arr(n);
  /*
    Inputs:
    8 9
    1 2 3 4 6 7 8 9
  */

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  // int output = missingNumberBrute(arr, N, n);
  // int output = missingNumberBetter(arr, N, n);
  // int output = missingNumberOptimalWithSumApproach(arr, N, n);
  int output = missingNumberOptimalWithXORApproach(arr, N, n);

  cout << output;

  return 0;
}