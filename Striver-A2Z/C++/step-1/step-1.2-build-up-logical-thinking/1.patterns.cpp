#include <bits/stdc++.h>
using namespace std;

/**
 * @brief Rectangular Star Pattern
 *
 * @param n
 */
void print1(int n) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      cout << "* ";
    }
    cout << endl;
  }
}

/**
 * @brief Right Angled Triangle Pattern
 *
 * @param n
 */
void print2(int n) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j <= i; j++) {
      cout << "* ";
    }
    cout << endl;
  }
}

/**
 * @brief Right Angled Numbered Pyramid I
 * 
 * @param n
 */
void print3(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      cout << j << " ";
    }
    cout << endl;
  }
}

/**
 * @brief Right Angled Numbered Pyramid II
 * 
 * @param n 
 */
void print4(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      cout << i << " ";
    }
    cout << endl;
  }
  
}

int main() {
  int t;
  cin >> t;

  for (int i = 0; i < t; i++) {
    int n;
    cin >> n;
    // print1(n);
    // print2(n);
    // print3(n);
    print4(n);
  }

  return 0;
}