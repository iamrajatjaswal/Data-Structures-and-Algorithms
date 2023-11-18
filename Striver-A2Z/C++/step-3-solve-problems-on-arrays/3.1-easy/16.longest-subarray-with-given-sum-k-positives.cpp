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

/*
Method: Brute with two loops
TC -> O(N^2)
SC -> O(1)
*/
int getLongestSubarrayBruteUsingTwoLoops(vector<int> &arr, long long k) {
  int n = arr.size();
  int len = 0;

  for (int i = 0; i < n; i++) {
    long long sum = 0;
    for (int j = i; j < n; j++) {
      sum += j;

      if (sum == k) {
        len = max(len, j - i + 1);
      }
    }
  }

  return len;
}

/*
Method: Better Approach using Hashmap
TC -> O(N)
SC -> O(N)
*/
int getLongestSubarrayBetterUsingHashMap(vector<int> &arr, long long k) {
  map<long long, int> prefixSumMap;
  long long sum = 0;
  int maxLength = 0;

  for (int i = 0; i < arr.size(); i++) {
    sum += arr[i];
    if (sum == k) {
      maxLength = max(maxLength, i + 1);
    }

    long long rem = sum - k;
    if (prefixSumMap.find(rem) != prefixSumMap.end()) {
      int length = i - prefixSumMap[rem];
      maxLength = max(maxLength, length);
    }

    // finally update the map after checking the condition that this sum previously didn't exist in the map because if it would have existed previously and we updated the map then we wouldn't get the length longest Subarray because the farthest possible index would have been lost as we would have updated it
    if (prefixSumMap.find(sum) == prefixSumMap.end()) {
      prefixSumMap[sum] = i;
    }
  }

  return maxLength;
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

  // int output = getLongestSubarrayBrute(arr, k);
  // int output = getLongestSubarrayBruteUsingTwoLoops(arr, k);
  int output = getLongestSubarrayBetterUsingHashMap(arr, k);
  cout << output;

  return 0;
}