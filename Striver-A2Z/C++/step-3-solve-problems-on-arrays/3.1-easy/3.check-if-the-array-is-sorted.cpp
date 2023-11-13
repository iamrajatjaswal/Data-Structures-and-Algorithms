#include <bits/stdc++.h>
using namespace std;

/*
Optimal Solution
TC -> O(N)
SC -> O(1)
*/
bool isSorted(vector<int> &arr, int n) {
  for (int i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }

  return true;
}

int main() {
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int output = isSorted(arr, n);
  cout << output << endl;

  return 0;
}
