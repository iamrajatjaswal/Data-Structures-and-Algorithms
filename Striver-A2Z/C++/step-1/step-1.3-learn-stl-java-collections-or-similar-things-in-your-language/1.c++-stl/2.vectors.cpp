#include <bits/stdc++.h>
using namespace std;

void explainVector() {
  vector<int> v(2, 3);

  v.push_back(1);

  // cout << v[0] << " " << v.at(0) << endl;
  // basically the above statement is for accessing the element at the 0th index of the array

  // cout << v.back() << endl;
  // v.back() will give the element at the last index of the array

  // vector<int>::iterator it = v.begin();
  /*
    In an array {10, 20, 30, 40}
    v.begin() will point to the memory location of the element at the 0th index and to access the next element we need to do it++
  */

  // it++;
  // cout << *(it) << " ";

  /*
    vectore<int>::iterator it = v.end();
    In an array {10, 20, 30, 40} the v.end will not point to the 40's memory location but it will point to the memory location after 40 and to access 40 we need to do it--
  */

  /*
    vector<int>::iterator it = v.rend();
    it is called as -> reverseEnd
    so it will be pointing to at the memory location
    before 10 in vector {10, 20, 30, 40}

    In simple words it is the reverse of the v.end() i.e. in that case it will be reversing the array and pointing to the memory location of the end which is before 10
  */

  /*
    for an array {10, 20, 30, 40}
    vector<int>::iterator it = v.rbegin() will be pointing at the last element of the vector which is basically the reverse of the begin and that is why it is called as reverseBegin
    after reverseBegin it++ will move at the memory location of element 30

    so Basically it++ will be a reverse iterator and you will have to think in the reverse way
  */

  // for printing the array we can go with two ways and one way is simple if we know the length of the array then we can do the simple for loop

  // The other way is the iterator way
  for (vector<int>::iterator it = v.begin(); it != v.end(); it++) {
    cout << *(it) << endl;
  }
  cout << endl;

  /*
    With STL we can use "auto" in place of vector<int>::iterator
    which is very convenient i.e. with auto it automatically assigns it to the vector iterator & you do not need to define the datatype i.e. it automatically defines the datatype

    So, the datatype is automatically assigned according to the data as the arrays in c++ are of similar datatype
  */
  for (auto it = v.begin(); it != v.end(); it++) {
    cout << *(it) << endl;
  }
  cout << endl;

  for (auto it : v) {
    cout << it << " ";
  }

  cout << endl;
  /*
    Above for loop is basically the for each loop and it will loop over each of the elements in c++ array
  */

  // {10, 20, 12, 23}
  v.erase(v.begin() + 1); // it will result in {10, 12, 23}

  // {10, 20, 12, 23, 35}
  v.erase(v.begin() + 2, v.begin() + 4); // {10, 20, 35} 
  // basically it is v.erase(start, end)



  
  
}

int main() {
  explainVector();

  return 0;
}