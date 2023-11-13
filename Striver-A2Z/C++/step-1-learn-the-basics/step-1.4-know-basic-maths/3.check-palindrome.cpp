#include <bits/stdc++.h>
using namespace std;

/*
Title: Palindrome number

Problem Statement:
Write a program to determine if a given number is a palindrome or not. Print true if it is a palindrome, false otherwise.

Palindrome are the numbers for which reverse is exactly same as the original one.
e.g. 121

*/

bool checkPalindrome(int n) {
  int reversedNumber = 0;
  int originalNumber = n;

  while (n > 0) {
    int lastDigit = n % 10;
    n = n / 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
  }

  return reversedNumber == originalNumber;
}

int main() {
  int n;
  cin >> n;
  int output = checkPalindrome(n);
  cout << output;

  return 0;
}

/*

**Time Complexity** :: O(log10(N)) -> logN to the base 10:
  The time complexity of the provided solution is still O(log(n)), where n is the input number. The while loop iterates through each digit of the input number, and the number of digits in n is proportional to log(n) in base 10.

**Space Complexity** :: O(1):
  The space complexity is O(1) since the algorithm uses a constant amount of extra space regardless of the input size. The space complexity is dominated by the variables reversedNumber, originalNumber, lastDigit, and n, and none of them scale with the input size.

*/