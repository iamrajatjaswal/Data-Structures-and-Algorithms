#include <bits/stdc++.h>
using namespace std;

/*
Method: Optimal Approach using Hashmap
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

  int output = getLongestSubarrayBetterUsingHashMap(arr, k);
  cout << output;

  return 0;
}