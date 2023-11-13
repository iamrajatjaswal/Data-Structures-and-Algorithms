#include <bits/stdc++.h>
using namespace std;

/*

Insertion Sort takes an element and places it in its correct order

*/

void merge(vector<int> &arr, int low, int mid, int high) {
  vector<int> temp;
  // [low ... mid]
  // [mid+1 ... high]
  int left = low;
  int right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push_back(arr[left]);
      left++;
    } else {
      temp.push_back(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push_back(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push_back(arr[right]);
    right++;
  }

  for (int i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

void mergeSort(vector<int> &arr, int low, int high) {
  if (low == high)
    return;
  int mid = (low + high) / 2;
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  merge(arr, low, mid, high);
}

int main() {
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  mergeSort(arr, 0, n - 1);

  for (auto it : arr) {
    cout << it << " ";
  }
  return 0;
}

/*

Time Complexity:
  Worst -> O(N * logN)
  Average -> O(N * logN)
  Best -> O(N * logN)

Space Complexity:
  Worst -> O(N)

*/