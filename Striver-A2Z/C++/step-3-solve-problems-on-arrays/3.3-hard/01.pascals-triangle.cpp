#include <bits/stdc++.h>
using namespace std;
// // Function prototype for findFactorial
// int findFactorial(int num);

/*
Method: Brute
TC -> O(n)+O(r)+O(n-r).
SC -> O(1) as we are not using any extra space.

*/

int findFactorial(int num) {
  int result = 1;
  for (int i = num; i > 1; i--) {
    result *= i;
  }

  return result;
}

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

void variation1() {
  int r = 5; // row number
  int c = 3; // column number

  int element = findElementInPascalTriangleWithGivenRowAndColumnBrute(r, c);

  cout << "The element is: " << element << endl;
}

int main() {
  /*
  Variation 1:
  In this case, we are given the row number r and the column number c, and we need to find out the element at position (r,c).
  */
  variation1();

  return 0;
}