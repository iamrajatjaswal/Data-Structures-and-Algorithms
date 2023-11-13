#include <bits/stdc++.h>
using namespace std;


void f(int i, int factorial) {
  if (i < 1) {
    cout << factorial;
    return;
  }

  f(i - 1, factorial * i);
}

int main() {
  int n;
  cin >> n;
  f(n, 1);

  return 0;
}