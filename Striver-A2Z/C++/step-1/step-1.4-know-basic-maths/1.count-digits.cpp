#include <bits/stdc++.h>
using namespace std;

/*
Problem Statement:
Given the number 'n'. find out and return the number of digits present in a number.

*/

int countDigits(int n) {
  int count = 0;
  while (n > 0) {
    n = n / 10;
    count++;
  }
  return count;
}

int main() {
  int n;
  cin >> n;
  int numberOfDigits = countDigits(n);
  cout << numberOfDigits;

  return 0;
}