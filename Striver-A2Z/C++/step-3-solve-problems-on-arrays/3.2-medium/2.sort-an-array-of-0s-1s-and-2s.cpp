#include <bits/stdc++.h>
using namespace std;

void merge(vector<int> &arr, int low, int mid, int high) {
  vector<int> temp;
  // [low ... mid]
  // [mid + 1 ... high]

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

/*
Method: Brute
TC -> O(N * logN)
SC -> O(N)
*/
void mergeSort(vector<int> &arr, int low, int high) {
  if (low == high) {
    return;
  }

  int mid = (low + high) / 2;

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  merge(arr, low, mid, high);
}

void sortArrayBruteWithMergeSort(vector<int> &arr, int n) {
  // applying merge sort to sort the array
  mergeSort(arr, 0, n - 1);
}

/*
Method: Better
TC -> O(2N)
SC -> O(1)
*/
void sortArrayBetter(vector<int> &arr, int n) {
  int count0 = 0;
  int count1 = 0;
  int count2 = 0;

  for (int i = 0; i < n; i++) {
    if (arr[i] == 0) {
      count0++;
    } else if (arr[i] == 1) {
      count1++;
    } else {
      count2++;
    }
  }

  for (int i = 0; i < count0; i++) {
    arr[i] = 0;
  }

  for (int i = count0; i < count0 + count1; i++) {
    arr[i] = 1;
  }

  for (int i = count0 + count1; i < n; i++) {
    arr[i] = 2;
  }
}

/*
Method: Optimal
TC -> O(N)
SC -> O(1)
*/
void sortArrayOptimal(vector<int> &arr, int n) {
  int low = 0, mid = 0, high = n - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(arr[low], arr[mid]);
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      swap(arr[mid], arr[high]);
      high--;
    }
  }
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

  // sortArrayBruteWithMergeSort(arr, n);
  // sortArrayBetter(arr, n);
  sortArrayOptimal(arr, n);

  for (auto it : arr) {
    cout << it << " ";
  }

  return 0;
}