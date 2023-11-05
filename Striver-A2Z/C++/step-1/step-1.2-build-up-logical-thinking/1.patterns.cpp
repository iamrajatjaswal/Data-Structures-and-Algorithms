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

/**
 * @brief Increasing Number Triangle pattern
 *
 * @param n
 */
void print13(int n) {
  int num = 1;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      cout << num++ << " ";
    }
    cout << endl;
  }
}

/**
 * @brief Increasing Letter Triangle Pattern
 *
 * @param n
 */
void print14(int n) {
  for (int i = 1; i <= n; i++) {
    for (char ch = 'A'; ch <= 'A' + i - 1; ch++) {
      cout << ch << " ";
    }
    cout << endl;
  }
}

/**
 * @brief Reverse Letter Triangle Pattern
 *
 * @param n
 */
void print15(int n) {
  for (int i = 1; i <= n; i++) {
    for (char ch = 'A'; ch <= 'A' + (n - i); ch++) {
      cout << ch << " ";
    }
    cout << endl;
  }
}

/**
 * @brief Alpha-Ramp Pattern
 *
 * @param n
 */
void print16(int n) {
  char ch = 'A';
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      cout << ch << " ";
    }
    ch++;
    cout << endl;
  }
}

/**
 * @brief Alpha-Hill Pattern
 *
 * @param n
 */
void print17(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) {
      cout << "  ";
    }

    char ch = 'A';
    int breakpoint = (2 * i + 1) / 2;
    for (int j = 1; j <= 2 * i - 1; j++) {
      if (j < breakpoint) {
        cout << ch++ << " ";
      } else {
        cout << ch-- << " ";
      }
    }
    cout << endl;
  }
}

/**
 * @brief Alpha-Triangle Pattern
 *
 * @param n
 */
void print18(int n) {
  for (int i = 1; i <= n; i++) {
    char ch = 'A' + n - i;
    for (int j = 1; j <= i; j++) {
      cout << ch++ << " ";
    }
    cout << endl;
  }
}

/**
 * @brief Symmetric-Void Pattern
 *
 * @param n
 */
void print19(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i + 1; j++) {
      cout << "* ";
    }

    for (int j = 1; j <= 2 * (i - 1); j++) {
      cout << "  ";
    }

    for (int j = 1; j <= n - i + 1; j++) {
      cout << "* ";
    }

    cout << endl;
  }

  for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= n - i + 1; j++) {
      cout << "* ";
    }

    for (int j = 1; j <= 2 * (i - 1); j++) {
      cout << "  ";
    }

    for (int j = 1; j <= n - i + 1; j++) {
      cout << "* ";
    }

    cout << endl;
  }
}

/**
 * @brief Symmetric-Butterflly Pattern
 *
 * @param n
 */
void print20(int n) {
  for (int i = 1; i <= 2 * n - 1; i++) {
    int breakpoint = i <= n ? i : 2 * n - i;

    for (int j = 1; j <= breakpoint; j++) {
      cout << "* ";
    }

    for (int j = 1; j <= 2 * (n - breakpoint); j++) {
      cout << "  ";
    }

    for (int j = 1; j <= breakpoint; j++) {
      cout << "* ";
    }

    cout << endl;
  }
}

/**
 * @brief Hollow Rectangle Pattern
 *
 * @param n
 */
void print21(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
      if (i == 1 || i == n || j == 1 || j == n) {
        cout << "* ";
      } else {
        cout << "  ";
      }
    }
    cout << endl;
  }
}

/**
 * @brief The Number Pattern
 *
 * @param n
 */
void print22(int n) {
  for (int i = 0; i < 2 * n - 1; i++) {
    for (int j = 0; j < 2 * n - 1; j++) {
      int top = i;
      int left = j;
      int right = 2 * n - 2 - left;
      int bottom = 2 * n - 2- top;

      cout << n - min(min(top, bottom), min(left, right)) << " ";
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
    // print12(n);
    // print13(n);
    // print14(n);
    // print15(n);
    // print16(n);
    // print17(n);
    // print18(n);
    // print19(n);
    // print20(n);
    // print21(n);
    print22(n);
    cout << endl;
  }

  return 0;
}