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

/**
 * @brief Inverted Right Pyramid
 * In Reverse Loop
 *
 * @param n
 */
// void print5(int n) {
//   for (int i = n; i >= 1; i--) {
//     for (int j = 1; j <= i; j++) {
//       cout << "* ";
//     }
//     cout << endl;
//   }
// }

/**
 * @brief Inverted Right Pyramid
 * In Reverse Loop
 *
 * @param n
 */
void print5(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i + 1; j++) {
      cout << "* ";
    }
    cout << endl;
  }
}

/**
 * @brief Inverted Numbered Right Pyramid
 *
 * @param n
 */
void print6(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i + 1; j++) {
      cout << j << " ";
    }
    cout << endl;
  }
}

/**
 * @brief Star Pyramid
 *
 * @param n
 */
void print7(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) {
      cout << "  ";
    }

    for (int j = 1; j <= 2 * i - 1; j++) {
      cout << "* ";
    }
    cout << endl;
  }
}

/**
 * @brief Inverted Star Pyramid
 *
 * @param n
 */
// Method 1:
// void print8(int n) {
//   for (int i = 1; i <= n; i++) {
//     for (int j = 1; j <= i - 1; j++) {
//       cout << "  ";
//     }

//     for (int j = 1; j <= 2 * (n - i + 1) - 1; j++) {
//       cout << "* ";
//     }
//     cout << endl;
//   }
// }

// Method 2:
void print8(int n) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < i; j++) {
      cout << "  ";
    }

    for (int j = 0; j < 2 * n - (2 * i + 1); j++) {
      cout << "* ";
    }
    cout << endl;
  }
}

/**
 * @brief Diamond Star Pattern
 *
 * @param n
 */
void print9(int n) {
  print7(n);
  print8(n);
}

/**
 * @brief Half Diamond Star Pattern
 *
 * @param n
 */
void print10(int n) {
  for (int i = 1; i <= 2 * n - 1; i++) {
    int stars = i <= n ? i : 2 * n - i;
    for (int j = 1; j <= stars; j++) {
      cout << "* ";
    }
    cout << endl;
  }
}

/**
 * @brief Binary Number Triangle Pattern
 *
 * @param n
 */
void print11(int n) {
  for (int i = 1; i <= n; i++) {
    int start = (i % 2 == 0) ? 0 : 1;
    for (int j = 1; j <= i; j++) {
      cout << start << " ";
      start = 1 - start;
    }
    cout << endl;
  }
}

/**
 * @brief Number Crown Pattern
 *
 * @param n
 */
void print12(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      cout << j << " ";
    }

    for (int j = 1; j <= 2 * (n - i); j++) {
      cout << "  ";
    }

    for (int j = i; j >= 1; j--) {
      cout << j << " ";
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
    // print4(n);
    // print5(n);
    // print6(n);
    // print7(n);
    // print8(n);
    // print9(n);
    // print10(n);
    // print11(n);
    print12(n);
    cout << endl;
  }

  return 0;
}