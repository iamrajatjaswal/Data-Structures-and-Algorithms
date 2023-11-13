#include <bits/stdc++.h>
using namespace std;

/*

In Bubble sort we move the highest element to the last index of the selected range in each iteration by repeatedly swapping the adjacent elemeents

*/

void bubbleSort(int arr[], int n) {
  for (int i = n - 1; i >= 1; i--) {
    int didSwap = 0;
    for (int j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap = 1;
      }
    }
    if (didSwap == 0) {
      break;
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

  bubbleSort(arr, n);

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