#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(N*N) to linearly iterate and put it into some other matrix.
SC -> O(N*N) to copy it into some other matrix.
*/
vector<vector<int>> rotateBrute(vector<vector<int>> &matrix) {
  int n = matrix.size();
  vector<vector<int>> rotated(n, vector<int>(n, 0));

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      rotated[j][n - i - 1] = matrix[i][j];
    }
  }

  return rotated;
}

/*
Method: Optimal
TC -> O(N*N) + O(N*N).One O(N*N) is for transposing the matrix and the other is for reversing the matrix.
SC -> O(1)
*/
vector<vector<int>> rotateOptimal(vector<vector<int>> &matrix) {
  int n = matrix.size();
  // transpose the given matrix
  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      swap(matrix[i][j], matrix[j][i]);
    }
  }

  // reverse each row of the matrix
  for (int i = 0; i < n; i++) {
    int left = 0;
    int right = n - 1;
    while (left < right) {
      swap(matrix[i][left], matrix[i][right]);
      left++;
      right--;
    }
  }

  return matrix;
}

int main() {
  vector<vector<int>> arr;
  arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

  // vector<vector<int>> rotated = rotateBrute(arr);
  vector<vector<int>> rotated = rotateOptimal(arr);

  cout << "Rotated Image:" << endl;
  for (int i = 0; i < rotated.size(); i++) {
    for (int j = 0; j < rotated[0].size(); j++) {
      cout << rotated[i][j] << " ";
    }
    cout << "\n";
  }

  return 0;
}