#include <bits/stdc++.h>
using namespace std;

/**
 * @brief Pass by value with int datatype example
 *
 */
// void doSomething(int num) {
//   cout << num << endl;
//   num += 5;
//   cout << num << endl;
//   num += 5;
//   cout << num << endl;
// }

// int main() {

//   int num = 10;
//   /*
//     When you are calling the function and you pass num then the copy goes and the original num did not go.

//     This original num must be somewhere in the memory, that original memory did not go.

//     And the function took the copy and did everything with the copy

//     Since the doSomething function modified the copy, the original num still stayed the same

//     This is what we call as pass by value
//   */
//   doSomething(num);

//   cout << num << endl;

//   return 0;
// }

/**
 * @brief Pass by value with string datatype example
 *
 */
// void doSomething(string s) {
//   s[0] = 't';
//   cout << s << endl;
// }

// int main() {
//   string s = "Rajat";
//   doSomething(s);
//   cout << s << endl;

//   return 0;
// }

/**
 * @brief Pass by reference example of string datatype
 * If you are passing with the & sign then it goes with the
 * reference of the memory location and it changes the original
 * string
 */
// void doSomething(string &s) {
//   s[0] = 't';
//   cout << s << endl;
// }

// int main() {
//   string s = "Rajat";
//   doSomething(s);
//   cout << s << endl;

//   return 0;
// }

/**
 * @brief Pass by reference example of int datatype
 *
 */
// void doSomething(int &num) {
//   cout << num << endl;
//   num += 5;
//   cout << num << endl;
//   num += 5;
//   cout << num << endl;
// }

// int main() {

//   int num = 10;
//   doSomething(num);
//   cout << num << endl;

//   return 0;
// }

/**
 * @brief Pass by reference example of array datatype
 * We do not add & symbol with arrays because arrays are
 * always passed by reference
 *
 * Array always goes with the reference
 *
 */

/*
  input.txt:
  5
  10
  7
  12
  13
  O
  output.txt:
  Value inside function: 105
  Value inside int main: : 105
*/
void doSomething(int arr[], int n) {
  arr[0] += 100;
  cout << "Value inside function: " << arr[0] << endl;
}

int main() {
  int n = 5;
  int arr[n];
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  doSomething(arr, n);

  cout << "Value inside int main: : " << arr[0] << endl;

  return 0;
}
