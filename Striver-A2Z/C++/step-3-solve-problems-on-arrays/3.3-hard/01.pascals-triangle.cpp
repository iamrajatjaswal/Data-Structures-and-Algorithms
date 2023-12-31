#include <bits/stdc++.h>
using namespace std;
// // Function prototype for findFactorial
// int findFactorial(int num);

int findFactorial(int num) {
  long long result = 1;
  for (int i = num; i > 1; i--) {
    result *= i;
  }

  return result;
}

/*
Method: Brute
TC -> O(n)+O(r)+O(n-r).
SC -> O(1) as we are not using any extra space.
*/
int findElementInPascalTriangleWithGivenRowAndColumnBrute(int row, int column) {
  /*
    First approach is that we will use nCr formula
    The (r-1)C(c-1) is the formula for finding the element at the particular
    row and column.
    ncr = n! / (r! * (n - r)!)

    Naive Approach:
    We can separately calculate n!, r!, (n-r)! and using their values we can calculate nCr. This is an extremely naive way to calculate. The time complexity will be O(n)+O(r)+O(n-r).`
  */

  int n = row - 1;
  int r = column - 1;

  int nFactorial = findFactorial(n);
  int rFactorial = findFactorial(r);
  int nMinusRFactorial = findFactorial(n - r);

  int result = nFactorial / (rFactorial * nMinusRFactorial);

  return result;
}

int nCr(int n, int r) {
  long long result = 1;

  // calculating nCr
  for (int i = 0; i < r; i++) {
    result *= (n - i);
    result /= (i + 1);
  }

  return result;
}

/*
Method: Optimal
TC -> O(c), where c = given column number.
Reason: We are running a loop for r times, where r is c-1.
SC -> O(1) as we are not using any extra space.
*/
int findElementInPascalTriangleWithGivenRowAndColumnOptimal(int row, int column) {
  // calculating
  return nCr(row - 1, column - 1);
}

/*
  Variation 1:
  In this case, we are given the row number r and the column number c, and we need to find out the element at position (r,c).
*/
void variation1() {
  int r = 5; // row number
  int c = 3; // column number

  // int element = findElementInPascalTriangleWithGivenRowAndColumnBrute(r, c);
  int element = findElementInPascalTriangleWithGivenRowAndColumnOptimal(r, c);

  cout << "The element is: " << element << endl;
}

/*
Method: Brute
TC -> O(n*r), where n is the given row number, and r is the column index which can vary from 0 to n-1.
Reason: We are calculating the element for each column. Now, there are total n columns, and for each column, the calculation of the element takes O(r) time where r is the column index.
SC -> O(1) as we are not using any extra space.
*/
void findNthRowInPascalTriangleBrute(int n) {
  // printing the entire row n
  for (int c = 1; c <= n; c++) {
    cout << nCr(n - 1, c - 1) << " ";
  }
}

/*
Method: Optimal
TC -> O(N) where N = given row number. Here we are using only a single loop.
SC -> O(1) as we not using any extra space.
*/
void findNthRowInPascalTriangleOptimal(int n) {
  long long ans = 1;
  cout << ans << " "; // printing the 1st element

  // printing rest of the part
  for (int i = 1; i < n; i++) {
    ans *= (n - i);
    ans /= i;
    cout << ans << " ";
  }

  cout << endl;
}

/*
  Variation 2:
  Given the row number n. Print the n-th row of Pascal’s triangle.
*/
void variation2() {
  int n = 5;

  // findNthRowInPascalTriangleBrute(n);
  findNthRowInPascalTriangleOptimal(n);
}

vector<vector<int>> printPascalTriangleBrute(int n) {
  vector<vector<int>> result;

  // Store the entire pascal's triangle:
  for (int row = 1; row <= n; row++) {
    vector<int> tempList; // temporary list
    for (int col = 1; col <= row; col++) {
      tempList.push_back(nCr(row - 1, col - 1));
    }

    result.push_back(tempList);
  }

  return result;
}

vector<int> generateRow(int row) {
  long long ans = 1;
  vector<int> ansRow;
  ansRow.push_back(1); // inserting the 1st element

  for (int col = 1; col < row; col++) {
    ans *= (row - col);
    ans /= col;
    ansRow.push_back(ans);
  }

  return ansRow;
}

vector<vector<int>> printPascalTriangleOptimal(int n) {
  vector<vector<int>> result;

  // Store the entire pascal's triangle:
  for (int row = 1; row <= n; row++) {
    result.push_back(generateRow(row));
  }

  return result;
}

/*
  Variation3:
  Print the entire Pascal's triangle, given the number of rows
*/
void variation3() {
  int n = 5;

  // vector<vector<int>> output = printPascalTriangleBrute(n);
  vector<vector<int>> output = printPascalTriangleOptimal(n);

  for (auto it : output) {
    for (auto ele : it) {
      cout << ele << " ";
    }
    cout << endl;
  }
}

int main() {
  /*
  Variation 1:
  In this case, we are given the row number r and the column number c, and we need to find out the element at position (r,c).
  */
  // variation1();
  /*
  Variation 2:
  Given the row number n. Print the n-th row of Pascal’s triangle.
  */
  // variation2();
  /*
  Variation 3:
  Print the entire Pascal's triangle, given the number of rows
  */
  variation3();

  return 0;
}