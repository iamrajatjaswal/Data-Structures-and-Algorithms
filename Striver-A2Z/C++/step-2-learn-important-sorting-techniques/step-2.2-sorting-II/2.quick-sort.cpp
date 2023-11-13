#include <bits/stdc++.h>
using namespace std;

/*

We can take any element as the pivot (in this case we are taking the first element as the pivot) and move it to the correct place in the array by moving the elements which are less than the pivot to the left and those elements which are greater than the pivot, we move them to the right of the pivot.

*/

int partition(vector<int> &arr, int low, int high) {
  int pivot = arr[low];
  int i = low;
  int j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high + 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      swap(arr[i], arr[j]);
    }
  }

  swap(arr[low], arr[j]);
  return j;
}

void quickSort(vector<int> &arr, int low, int high) {
  if (low >= high)
    return;

  int pIndex = partition(arr, low, high);
  quickSort(arr, low, pIndex - 1);
  quickSort(arr, pIndex + 1, high);
}

int main() {
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  quickSort(arr, 0, n - 1);

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

Space Complexity: O(1) (Not taking recursive stack space into account)

*/