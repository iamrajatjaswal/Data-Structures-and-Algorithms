#include <bits/stdc++.h>
using namespace std;

int main() {
  string s = "Striver";
  int len = s.size();
  cout << "Length: " << len << endl;

  // s[len - 1] = "z"; // you can't do this as string stores characters at every index and not the strings
  s[len - 1] = 'z';
  // So, stirng is storing characters within itself

  cout << "Last element of the array: " << s[len - 1];

  return 0;
}

// Array elements can be stored in the consecutive memory locations but I am not sure where the first one is at and it can be at any randomize location.