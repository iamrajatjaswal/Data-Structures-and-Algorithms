#include <bits/stdc++.h>
using namespace std;

/*
Brute will be sorting an array with Quick Sort and then finding the last element
TC -> O(N * logN);
SC -> O(1) (ignoring the auxiliary stack)
*/

/*
Optimal Approach
TC -> O(N)
SC -> O(1)
*/
int largestElement(vector<int> &arr, int n) {
  int largest = arr[0];

  for (int i = 0; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

int main() {
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int output = largestElement(arr, n);
  cout << output << endl;

  return 0;
}
