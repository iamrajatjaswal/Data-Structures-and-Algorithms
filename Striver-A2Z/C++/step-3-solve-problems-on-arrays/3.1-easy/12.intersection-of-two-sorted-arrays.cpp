#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(n1 * n2)
SC -> O(n2)
*/
vector<int> intersectionOfTwoSortedArraysBrute(vector<int> a, vector<int> b, int n1, int n2) {
  vector<int> ans;
  vector<int> visited(n2, 0);

  for (int i = 0; i < n1; i++) {
    for (int j = 0; j < n2; j++) {
      if (a[i] == b[j] && visited[j] == 0) {
        visited[j] = 1;
        ans.push_back(b[j]);
        break;
      }

      if (a[i] < b[j]) {
        break;
      }
    }
  }

  return ans;
}

/*
Method: Optimal
TC -> O(n1 + n2) : Because in the worst case if we go 1 by 1 in first and second array then it will be O(n1 + n2)
SC -> O(n1 + n2) : in worst case to store and return ans
otherwise space complexity for extra space is O(1)

*/
vector<int> intersectionOfTwoSortedArraysOptimal(vector<int> a, vector<int> b, int n1, int n2) {
  int i = 0;
  int j = 0;
  vector<int> ans;

  while (i < n1 && j < n2) {
    if (a[i] < b[j]) {
      i++;
    } else if (a[i] > b[j]) {
      j++;
    } else {
      ans.push_back(a[i]);
      i++;
      j++;
    }
  }

  return ans;
}

int main() {
  int n1, n2;
  cin >> n1 >> n2;
  vector<int> a(n1);
  vector<int> b(n2);

  for (int i = 0; i < n1; i++) {
    cin >> a[i];
  }

  for (int i = 0; i < n2; i++) {
    cin >> b[i];
  }

  // vector<int> output = intersectionOfTwoSortedArraysBrute(a, b, n1, n2);
  vector<int> output = intersectionOfTwoSortedArraysOptimal(a, b, n1, n2);

  for (auto it : output) {
    cout << it << endl;
  }

  return 0;
}