#include <bits/stdc++.h>
using namespace std;

/*

Title: Check Prime

Problem Statement:
Given an integer, check if it is prime or not. Print true if number is prime, print false otherwise.

*/

// TC -> O(sqrt(N))
void checkPrime(int n) {
  int count = 0;

  for (int i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      count++;
      if (n / i != i) {
        count++;
      }
    }
  }

  if (count == 2)
    cout << "true";
  else
    cout << "false";
}

int main() {
  int testCases;
  cin >> testCases;

  for (int i = 0; i < testCases; i++) {
    int n;
    cin >> n;

    checkPrime(n);
    cout << endl;
  }

  return 0;
}

/*

Time Complexity :: O(sqrt(N)
  The time complexity is O(sqrt(n)) for each test case, where n is the input number. The loop runs from i = 1 to sqrt(n), and in each iteration, it performs constant-time operations.

Space Complexity :: O(sqrt(N)):
  The space complexity is O(1) because there is a constant amount of extra space used, regardless of the input size. The variable count is the only additional space used, and it doesn't scale with the input size.

*/