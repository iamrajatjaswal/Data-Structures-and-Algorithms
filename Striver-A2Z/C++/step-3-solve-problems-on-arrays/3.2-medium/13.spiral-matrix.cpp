#include <bits/stdc++.h>
using namespace std;

/*
Method: Optimal (This problem has only one solution which is optimal)
*/
vector<int> printSpiral(vector<vector<int>> &matrix) {
  int n = matrix.size();    // no. of rows
  int m = matrix[0].size(); // no. of columns

  // define the array to store the result
  vector<int> ans;

  // Initialize the required pointers for traversal
  int left = 0;
  int right = m - 1;
  int top = 0;
  int bottom = n - 1;

  while (left <= right && top <= bottom) {
    // for moving left to right
    for (int i = left; i <= right; i++) {
      ans.push_back(matrix[top][i]);
    }
    top++;

    // for moving top to bottom
    for (int i = top; i <= bottom; i++) {
      ans.push_back(matrix[i][right]);
    }
    right--;

    // for moving right to left
    if (top <= bottom) {
      for (int i = right; i >= left; i--) {
        ans.push_back(matrix[bottom][i]);
      }
      bottom--;
    }

    // for moving bottom to top
    if (left <= right) {
      for (int i = bottom; i >= top; i--) {
        ans.push_back(matrix[i][left]);
      }
      left++;
    }
  }

  return ans;
} 

int main() {
  vector<vector<int>> mat = {{1, 2, 3, 4, 5, 6}, {20, 21, 22, 23, 24, 7}, {19, 32, 33, 34, 25, 8}, {18, 31, 36, 35, 26, 9}, {17, 30, 29, 28, 27, 10}, {16, 15, 14, 13, 12, 11}};

  vector<int> ans = printSpiral(mat);

  for (int i = 0; i < ans.size(); i++) {

    cout << ans[i] << " ";
  }

  cout << endl;

  return 0;
}