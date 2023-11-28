#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
Approach: Nested Loops
TC -> O(N^2)
SC -> O(1)
*/
int maxProfitBrute(vector<int> &arr) {
  int n = arr.size();
  int maxProfit = 0;

  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        maxProfit = max(maxProfit, arr[j] - arr[i]);
      }
    }
  }

  return maxProfit;
}

/*
Method: Optimal
TC -> O(N)
SC -> O(1)
*/
int maxProfitOptimal(vector<int> &arr) {
  int n = arr.size();
  int maxProfit = 0;
  int costPrice = arr[0];

  for (int i = 1; i < n; i++) {
    int sellingPrice = arr[i];
    costPrice = min(costPrice, sellingPrice);
    
    int currentProfit = sellingPrice - costPrice;
    maxProfit = max(maxProfit, currentProfit);
  }

  return maxProfit;
}

int main() {
  vector<int> arr = {7, 1, 5, 6, 3, 4};

  // int output = maxProfitBrute(arr);
  int output = maxProfitOptimal(arr);

  cout << output;

  return 0;
}