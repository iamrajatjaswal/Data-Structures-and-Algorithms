#include <bits/stdc++.h>
using namespace std;

int main()
{
  /*
    Datatype: int
    Size: 4 bytes
    Range of Values: -2,147,483,648 to 2,147,483,647

    Rounding Range: -10^9 to 10^9
  */
  int x = 10;

  /*
    Datatype: long
    Size: 4 bytes
    Range of Values: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

    Rounding Range: -10^12 to 10^12
  */
  long y = 15;

  /*
    Datatype: long long
    Size: 8 bytes
    Range of Values: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

    Rounding Range: -10^18 to 10^18
  */
  long long z = 1500000;

  // float, double, long double
  float a = 5.6;
  float b = 5;
  // cout << "Value of y: " << y << endl;

  // string, getline
  /*
    string datatype
  */
  // string s1;
  // string s2;
  // cin >> s1 >> s2;
  // cout << "String 1: " << s1 << " and String 2: " << s2;

  /*
    getline
  */
  string str;
  // getline(cin, str);
  // getline will only pickup till the line breaks i.e. it will only pickup single line and not multiple lines
  // cout << str;

  //  char
  // there are 256 characters in english dictionary and char can store all of them
  char ch;
  char ch2 = 'g'; // single quotes is used to declare a character

  cin >> ch;
  cout << ch;

  return 0;
}