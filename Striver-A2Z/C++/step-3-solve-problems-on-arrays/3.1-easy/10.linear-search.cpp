#include <bits/stdc++.h>
using namespace std;

int linearSearch(vector<int> &arr, int n, int num) {
  for (int i = 0; i < n; i++) {
    if (arr[i] == num) {
      return i;
    }
  }

  return -1;
}

int main() {
  int n, num;
  cin >> n >> num;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int output = linearSearch(arr, n, num);

  cout << output << endl;

  return 0;
}