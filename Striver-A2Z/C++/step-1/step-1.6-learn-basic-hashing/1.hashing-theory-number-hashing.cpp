#include <bits/stdc++.h>
using namespace std;

int hashh[10000000] = {0};
int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  // precompute
  // int hash[13] = {0};
  for (int i = 0; i < n; i++) {
    hashh[arr[i]] += 1;
  }

  int q;
  cin >> q;
  while (q--) {
    int number;
    cin >> number;
    // fetch
    cout << hashh[number] << endl;
  }

  return 0;
}