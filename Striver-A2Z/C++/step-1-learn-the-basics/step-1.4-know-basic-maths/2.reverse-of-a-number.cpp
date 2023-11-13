#include <bits/stdc++.h>
using namespace std;

/*
Title: Reverse of a number

Problem Statement:
Write a program to generate the reverse of a given number N. Print the corresponding reverse number.

Note: If a number has trailing zeroes then the reverse will not include them.

e.g. Reverse of 10400 will be 401 instead of 00401.

*/

int reverseNumber(int n) {
  int reversedNumber = 0;

  while (n > 0) {
    int lastDigit = n % 10;
    n = n / 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
  }

  return reversedNumber;
}

int main() {
  int n;
  cin >> n;
  int output = reverseNumber(n);
  cout << output;

  return 0;
}

/*

**Time Complexity** :: O(log10(N)) -> logN to the base 10:   
  The time complexity of the provided solution is O(log(n)), where n is the input number. This is because the while loop iterates through each digit of the input number, and the number of digits in n is proportional to log(n) in base 10.

**Space Complexity** :: O(1):
  The space complexity is O(1) since the algorithm uses a constant amount of extra space regardless of the input size. The space complexity is dominated by the variables reversedNumber, lastDigit, and n, and none of them scale with the input size.

*/