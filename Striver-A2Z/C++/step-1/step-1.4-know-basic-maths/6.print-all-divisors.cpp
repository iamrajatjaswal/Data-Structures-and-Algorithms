#include <bits/stdc++.h>
using namespace std;

/*

Title: Check Armstrong

Problem Statement:
Write a function to print all divisors of a number.

Note:
Divisors are the numbers that divide the number entirely and leaves no remainder.


*/

/*
// TC -> O(N)
void printDivisors(int n) {
  for (int i = 1; i <= n; i++) {
    if (n % i == 0) {
      cout << i << " ";
    }
  }
}
*/

// TC -> O(sqrt(N))
void printDivisors(int n) {
  vector<int> list;

  // for (int i = 1; i <= sqrt(n); i++) { // As sqrt() is a  function and everytime the sqrt function will be called from STL, which will take time itself due to which we can use the below line to improve the time complexity 
  for (int i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      list.push_back(i);
      if ((n / i) != i) {
        list.push_back(n / i);
      }
    }
  }

  sort(list.begin(), list.end());

  for (auto it : list)
    cout << it << " ";
}

int main() {
  int testCases;
  cin >> testCases;

  for (int i = 0; i < testCases; i++) {
    int n;
    cin >> n;

    printDivisors(n);
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