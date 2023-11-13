#include <bits/stdc++.h>
using namespace std;

/*

Insertion Sort takes an element and places it in its correct order

*/

void insertionSort(int arr[], int n) {
  for (int i = 0; i <= n - 1; i++) {
    int j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      int temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;

      j--;
    }
  }
}

int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  insertionSort(arr, n);

  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }

  return 0;
}

/*

Time Complexity :
Worst -> O(N^2)
Average -> O(N^2)
Best -> O(N)

*/