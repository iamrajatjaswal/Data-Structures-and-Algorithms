#include <bits/stdc++.h>
using namespace std;

/*
Brute Solution:
Method: Brute
TC: O(d) + O(n - d) + O(d) => O(n + d)
SC: O(d) for extra space being used
*/
void leftRotateArrayByDPlacesBrute(vector<int> &arr, int n, int d) {
  d = d % n;
  int temp[d];

  // TC -> O(d)
  for (int i = 0; i < d; i++) {
    temp[i] = arr[i];
  }

  // TC -> O(n - d)
  for (int i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }

  /*
  This is one way if you want to avoid doing mathematical calculation to find out j then initialize j = 0 and increment
  int j = 0;
  for (int i = n - d; i < n; i++) {
    arr[i] = temp[j];
    j++;
  }
  */

  // TC -> O(d)
  for (int i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }
}

/*
Optimal Solution:
Approach: Using "Reversal Algorithm"
TC: O(d) + O(n - d) + O(n) => O(2n)
SC: O(1) no extra space being used
*/
// Function to reverse the array
void Reverse(vector<int> &arr, int start, int end) {
  while (start <= end) {
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Function to rotate d elements to the left
void leftRotateArrayByDPlacesOptimal(vector<int> &arr, int n, int d) {
  // Reverse first d elements
  Reverse(arr, 0, d - 1); // O(d)
  // Reverse last n - d elements
  Reverse(arr, d, n - 1); // O(n - d)
  // Reverse whole array
  Reverse(arr, 0, n - 1); // O(n)
}

int main() {
  int n, d;
  cin >> n >> d;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  // leftRotateArrayByDPlacesBrute(arr, n, d);
  leftRotateArrayByDPlacesOptimal(arr, n, d);

  for (auto it : arr) {
    cout << it << endl;
  }

  return 0;
}