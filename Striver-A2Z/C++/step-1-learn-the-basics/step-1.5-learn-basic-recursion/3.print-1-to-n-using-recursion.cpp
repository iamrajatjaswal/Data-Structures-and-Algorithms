#include <bits/stdc++.h>
using namespace std;

void f(int i, int n) {
  if (i > n)
    return;

  cout << i << endl;

  f(i + 1, n);
}

int main() {
  int n;
  cin >> n;

  f(1, n);

  return 0;
}