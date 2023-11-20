#include <bits/stdc++.h>
using namespace std;

void merge(vector<int> &arr, int low, int mid, int high) {
  vector<int> temp;
  // [low ... mid]
  // [mid + 1 ... high]
  int left = low;
  int right = mid + 1;
}

void mergeSort(vector<int> &arr, int low, int high) {
  if (low == high)
    return;

  int mid = (low + high) / 2;
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  merge(arr, low, mid, high);
}

void sortArrayBruteWithMergeSort(vector<int> &arr, int n) {
  // applying merge sort to sort the array
  mergeSort(arr, 0, n - 1);
}

int main() {
  /*
  Inputs:
  12
  0 1 2 0 1 2 1 2 0 0 0 1
  */
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  sortArrayBruteWithMergeSort(arr, n);

  for (auto it : arr) {
    cout << it << " ";
  }

  return 0;
}