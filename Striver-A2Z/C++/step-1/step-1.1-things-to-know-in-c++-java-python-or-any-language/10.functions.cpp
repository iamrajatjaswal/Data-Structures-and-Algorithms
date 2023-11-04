#include <bits/stdc++.h>
using namespace std;
/*
Functions are set of instructions which perform something for you
Functions are used to modularise the code
Functions are used to increase readability
Functions are used to use same code multiple times

There are a lot of functions but normally we use below 4 kinds of functions
  * void -> which does not return anything
  * return
  * parameterised
  * non parameterised
*/

/*
  1. void function
*/
// void printName() {
// cout << "Hey RJ!";
// }


// int main() {
//   printName();

//   return 0;
// }


/*
  2. parametrised void function
*/
// void printName(string name) {
//   cout << "Hey " << name << "!" << endl;
// }

// int main() {
//   string name;
//   cin >> name;
  
//   printName(name);

//   string name2;
//   cin >> name2;
//   printName(name2);

//   return 0;
// }

/*
  3. parametrised return function
*/
// // Take two numbers and print their sum
// int sum(int num1, int num2) {
//   int num3 = num1 + num2;
//   return num3;
// }

// int main() {
//   int num1, num2;
//   cin >> num1 >> num2;

//   int res = sum(num1, num2);
//   cout << res;

//   return 0;
// }

/*
  4. parametrised void function
*/
// // Take two numbers and print their sum
// int sum(int num1, int num2) {
//   int num3 = num1 + num2;
//   cout << num3;
// }

// int main() {
//   int num1, num2;
//   cin >> num1 >> num2;

//   sum(num1, num2);

//   return 0;
// }


/*
  Garbage value is returned if you specify a datatype in front of function name which is not void and then you don't return anything
*/
int maxx(int num1, int num2) {
  if (num1 >= num2) {
    return num1;
  }

  // looking for return 
  // if it doesn't find return then it returns garbage value
  // so it is necessary to provide return value always if you the function has a datatype other than void
}

int main() {
  int num1, num2;

  cin >> num1 >> num2;

  int maximum = maxx(num1, num2);
  cout << maximum;

  return 0;
}