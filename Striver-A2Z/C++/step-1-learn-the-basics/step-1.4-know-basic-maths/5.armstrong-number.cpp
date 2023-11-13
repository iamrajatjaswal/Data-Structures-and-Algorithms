#include <bits/stdc++.h>
using namespace std;

/*

Title: Check Armstrong

Problem Statement:
You are given an integer 'n'. Return 'true' if 'n' is an Armstrong number , and 'false' otherwise.

Note:
An Armstrong number is a number (with 'k' digits) such that the sum of its digits raised to the 'kth' power is equal to the number itself. For example, 371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371


*/

int getDigits(int n) {
  int digits = 0;

  while (n > 0) {
    n = n / 10;
    digits++;
  }

  return digits;
}

string checkArmstrong(int n) {
  int originalNumber = n;
  int sum = 0;
  int numberOfDigits = getDigits(n);

  while (n > 0) {
    int lastDigit = n % 10;
    n = n / 10;
    sum = sum + pow(lastDigit, numberOfDigits);
  };

  return originalNumber == sum ? "true" : "false";
}

int main() {
  int testCases;
  cin >> testCases;

  for (int i = 0; i < testCases; i++) {
    int n;
    cin >> n;

    string output = checkArmstrong(n);
    cout << output << endl;
  }

  return 0;
}