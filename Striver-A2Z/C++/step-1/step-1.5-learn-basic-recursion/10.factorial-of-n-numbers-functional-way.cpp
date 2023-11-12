#include <bits/stdc++.h>
using namespace std;

int factorial(int n) {
  if (n <= 0)
    return 1;

  return n * factorial(n - 1);
}

int main() {
  int n;
  cin >> n;

  int output = factorial(n);
  cout << output;

  return 0;
}

/*

Time Complexity : O(N);
Space Complexity : O(N);

*/