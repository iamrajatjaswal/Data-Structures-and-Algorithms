#include <bits/stdc++.h>
using namespace std;

void f(int i, int n) {
  if (i > n)
    return;

  cout << "Rajat" << endl;

  f(i + 1, n);
}

int main() {
  int n;
  cin >> n;

  f(1, n);

  return 0;
}

/*

Time Complexity -> O(N)
Space Complexity -> O(N)

*/