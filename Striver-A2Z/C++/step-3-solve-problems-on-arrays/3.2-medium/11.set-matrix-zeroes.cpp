#include <bits/stdc++.h>
using namespace std;

void markRow(vector<vector<int>> &matrix, int m, int i) {
  // set all non zero elements as -1 in the row i
  for (int j = 0; j < m; j++) {
    matrix[i][j] = -1;
  }
}

void markColumn(vector<vector<int>> &matrix, int n, int j) {
  for (int i = 0; i < n; i++) {
    matrix[i][j] = -1;
  }
}

/*
Method: Brute
TC -> O((N*M)*(N + M)) + O(N*M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
Reason: Firstly, we are traversing the matrix to find the cells with the value 0. It takes O(N*M). Now, whenever we find any such cell we mark that row and column with -1. This process takes O(N+M). So, combining this the whole process, finding and marking, takes O((N*M)*(N + M)).
Another O(N*M) is taken to mark all the cells with -1 as 0 finally.

SC -> O(1) : as we are not using any extra space

*/
vector<vector<int>> setMatrixZeroesBrute(vector<vector<int>> &matrix) {
  /*
  Approach: I will loop over the matrix and whereever I will encounter the 0 then I will mark the rows and columns of for that particular element to -1 because if I mark them 0 now it will make solution incorrect as next time I will not know where are the originally present zeroes in that particular row & column.

  After that looping over the matrix again and set all the -1 elements to 0 which will be the ans output matrix.
  */

  int n = matrix.size();
  int m = matrix[0].size();

  // Mark -1 for rows and columns that contain 0. Don't mark any 0 as -1.

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        markRow(matrix, m, i);
        markColumn(matrix, n, j);
      }
    }
  }

  // Finally mark all -1 as 0
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

int main() {
  vector<vector<int>> matrix = {{1, 1, 1, 1}, {1, 0, 1, 1}, {1, 1, 0, 1}, {1, 0, 0, 1}};

  vector<vector<int>> output = setMatrixZeroesBrute(matrix);

  cout << "The final matrix is: " << endl;
  for (auto it : output) {
    for (auto el : it) {
      cout << el << " ";
    }
    cout << endl;
  }

  return 0;
}