#include <bits/stdc++.h>
using namespace std;

void moveZeroesBrute(vector<int> &arr, int n) {
  // step - 1
  vector<int> temp;
  for (int i = 0; i < n; i++) {
    if (arr[i] != 0) {
      temp.push_back(arr[i]);
    }
  }

  // step - 2
  for (int i = 0; i < temp.size(); i++) {
    arr[i] = temp[i];
  }

  // step - 3
  for (int i = temp.size(); i < n; i++) {
    arr[i] = 0;
  }
}

void moveZeroesOptimal(vector<int> &arr, int n) {
  int j = -1;
  for (int i = 0; i < n; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }

  if (j == -1)
    return;

  for (int i = j + 1; i < n; i++) {
    if (arr[i] != 0) {
      int temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
    }
  }
}

int main() {
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  // moveZeroesBrute(arr, n);
  moveZeroesOptimal(arr, n);

  for (auto it : arr) {
    cout << it << endl;
  }

  return 0;
}