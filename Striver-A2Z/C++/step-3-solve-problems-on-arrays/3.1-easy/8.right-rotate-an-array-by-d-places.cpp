#include <bits/stdc++.h>
using namespace std;

/*
Brute Solution:
Method: Brute
TC: O(d) + O(n - d) + O(d) => O(n + d)
SC: O(d) for extra space being used
*/
void rightRotateArrayByDPlacesBrute(vector<int> &arr, int n, int d) {
  d = d % n;
  int temp[d];

  // TC -> O(d)
  for (int i = n - d; i < n; i++) {
    temp[i - (n - d)] = arr[i];
  }

  // TC -> O(n - d)
  for (int i = n - 1; i >= d; i--) {
    arr[i] = arr[i - d];
  }

  // TC -> O(d)
  for (int i = 0; i < d; i++) {
    arr[i] = temp[i];
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
  while (start < end) {
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Function to rotate d elements to the left
void rightRotateArrayByDPlacesOptimal(vector<int> &arr, int n, int d) {
  // Reverse last d elements
  Reverse(arr, n - d, n - 1); // O(d)
  // Reverse first n - d elements
  Reverse(arr, 0, n - d - 1); // O(n - d)
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

  // rightRotateArrayByDPlacesBrute(arr, n, d);
  rightRotateArrayByDPlacesOptimal(arr, n, d);

  for (auto it : arr) {
    cout << it << endl;
  }

  return 0;
}