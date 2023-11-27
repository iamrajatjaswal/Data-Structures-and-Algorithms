#include <bits/stdc++.h>
using namespace std;

void markRow(vector<vector<int>> &matrix, int m, int i) {
  // set all non zero elements as -1 in the row i
  for (int j = 0; j < m; j++) {
    if (matrix[i][j] != 0) {
      matrix[i][j] = -1;
    }
  }
}

void markColumn(vector<vector<int>> &matrix, int n, int j) {
  for (int i = 0; i < n; i++) {
    if (matrix[i][j] != 0) {
      matrix[i][j] = -1;
    }
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

/*
Method: Better
TC -> O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix.
Reason: We are traversing the entire matrix 2 times and each traversal is taking O(N*M) time complexity.

SC -> O(N) + O(M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
Reason: O(N) is for using the row array and O(M) is for using the col array.
*/
vector<vector<int>> setMatrixZeroesBetter(vector<vector<int>> &matrix) {
  int n = matrix.size();
  int m = matrix[0].size();

  int row[n];
  int col[m];
  // marking all the elements in the row array as 0
  for (int i = 0; i < n; i++) {
    row[i] = 0;
  }
  // marking all the elements in the col array as 0
  for (int j = 0; j < m; j++) {
    col[j] = 0;
  }

  // iterating over the matrix
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        // mark ith index in the row with 1
        row[i] = 1;
        // mark jth index in the col with 1
        col[j] = 1;
      }
    }
  }

  for (int i = 0; i < n; i++) {
    cout << row[i] << " ";
  }
  cout << endl;

  for (int i = 0; i < m; i++) {
    cout << col[i] << " ";
  }
  cout << endl;

  // Finally, mark all (i, j) in the matrix with 1
  // if row[i] or col[j] is marked with 1
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

/*
Method: Optimal
TC -> O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix.
Reason: In this approach, we are also traversing the entire matrix 2 times and each traversal is taking O(N*M) time complexity.

SC -> O(1) as we are not using any extra space.
*/
vector<vector<int>> setMatrixZeroesOptimal(vector<vector<int>> &matrix) {
  int n = matrix.size();
  int m = matrix[0].size();

  // row array :: matrix[0][i]
  // col array :: matrix[i][0]
  int col0 = 1;

  // Original Matrix
  // 1 1 1 1
  // 1 0 1 1
  // 1 1 0 1
  // 0 1 1 1

  // Step 1: Traverse through the array and mark the first row and col accordingly
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        // mark the i-th row with 0
        matrix[i][0] = 0;

        // mark the j-th col with 0
        if (j != 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  // Step 2: Mark with 0 from (1, 1) to (n - 1, n - 1)
  for (int i = 1; i < n; i++) {
    for (int j = 1; j < m; j++) {
      if (matrix[i][j] != 0) {
        // check for col and row
        if (matrix[i][0] == 0 || matrix[0][j] == 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  // Step 3: Finally mark the first col and the first row
  if (matrix[0][0] == 0) {
    for (int j = 1; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  if (col0 == 0) {
    for (int i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

int main() {
  vector<vector<int>> matrix = {{1, 1, 1, 1}, {1, 0, 1, 1}, {1, 1, 0, 1}, {0, 1, 1, 1}};

  // vector<vector<int>> output = setMatrixZeroesBrute(matrix);
  // vector<vector<int>> output = setMatrixZeroesBetter(matrix);
  vector<vector<int>> output = setMatrixZeroesOptimal(matrix);

  cout << "The final matrix is: " << endl;
  for (auto it : output) {
    for (auto el : it) {
      cout << el << " ";
    }
    cout << endl;
  }

  return 0;
}