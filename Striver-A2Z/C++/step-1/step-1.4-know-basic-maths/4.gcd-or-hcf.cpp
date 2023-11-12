#include <bits/stdc++.h>
using namespace std;

/*

Title: GCD or HCF

Problem Statement:
You are given two integers 'n' and 'm'.

Calculate 'gcd(n,m)'  without using library functions.


Note:
The greatest common divisor (gcd) of two numbers 'n' and 'm' is the largest positive number that divides both 'n' and 'm' without leaving a remainder.

*/

// Method 1:

// void gcdOrHcf(int n1, int n2) {
//   for (int i = min(n1, n2); i >= 1; i--) {
//     if (n1 % i == 0 && n2 % i == 0) {
//       cout << i;
//       break;
//     }
//   }
// }

// int main() {
//   int testCases;
//   cin >> testCases;

//   for (int i = 0; i < testCases; i++) {
//     int n1, n2;
//     cin >> n1;
//     cin >> n2;

//     gcdOrHcf(n1, n2);
//     cout << endl;
//   }

//   return 0;
// }

/*

Time Complexity :: O(min(n1, n2))
  The time complexity of the provided solution is O(min(n1, n2)) for each test case, where n1 and n2 are the input numbers. The for loop runs from i = min(n1, n2) to 1, and in each iteration, it performs constant-time operations.

Space Complexity :: O(1):
  The space complexity is O(1) because there is a constant amount of extra space used, regardless of the input size. The variables testCases, i, n1, n2, and count are all individual variables that don't scale with the input size.


*/

// Method 2:
// int gcdOrHcf(int a, int b) {
//   while (a > 0 && b > 0) {
//     if (a > b)
//       a = a % b;
//     else
//       b = b % a;
//   }
//   if (a == 0)
//     return b;
//   return a;
// }

// int main() {
//   int testCases;
//   cin >> testCases;

//   for (int i = 0; i < testCases; i++) {
//     int n1, n2;
//     cin >> n1;
//     cin >> n2;

//     int output = gcdOrHcf(n1, n2);
//     cout << output << endl;
//   }

//   return 0;
// }

// Method 3:
int gcdOrHcf(int a, int b) {
  if (b == 0) {
    return a;
  }

  return gcdOrHcf(b, a % b);
}

int main() {
  int testCases;
  cin >> testCases;

  for (int i = 0; i < testCases; i++) {
    int n1, n2;
    cin >> n1;
    cin >> n2;

    int output = gcdOrHcf(n1, n2);
    cout << output << endl;
  }

  return 0;
}
