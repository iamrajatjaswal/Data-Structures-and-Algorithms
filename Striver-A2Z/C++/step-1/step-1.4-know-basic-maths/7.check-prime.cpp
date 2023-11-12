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

  for (int i = 0; i * i <= n; i++) {
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

Time Complexity :: O(sqrt(n) * log(sqrt(n))):
  The time complexity of the provided solution is O(sqrt(n) * log(sqrt(n))) for each test case, where n is the input number.

  Breaking it down:

  The for loop runs from i = 1 to sqrt(n). In each iteration, the loop performs constant-time operations (pushing elements into the vector), and the loop runs O(sqrt(n)) times.
  Sorting the vector of divisors takes O(sqrt(n) * log(sqrt(n))) time.
  Since the sorting step dominates the time complexity, the overall time complexity is O(sqrt(n) * log(sqrt(n))).


Space Complexity :: O(sqrt(n)):
  The space complexity is O(sqrt(n)) because the vector 'list' stores all the divisors, and in the worst case, there can be O(sqrt(n)) divisors.
*/