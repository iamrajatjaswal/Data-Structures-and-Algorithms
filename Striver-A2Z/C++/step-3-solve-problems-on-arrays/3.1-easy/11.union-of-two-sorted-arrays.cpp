#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(n1logn) + O(n2logn) + O(n1 + n2)
SC -> O(n1 + n2) + O(n1 + n2)

*/
vector<int> unionOfTwoSortedArraysBrute(vector<int> a, vector<int> b) {
  int n1 = a.size();
  int n2 = b.size();
  set<int> st;
  vector<int> unionArr;

  for (int i = 0; i < n1; i++) {
    st.insert(a[i]);
  }

  for (int i = 0; i < n2; i++) {
    st.insert(b[i]);
  }

  for (auto it : st) {
    unionArr.push_back(it);
  }

  return unionArr;
}

/*
Method: Optimal
TC -> O(n1 + n2) : Because we are visiting every element once
SC -> O(n1 + n2) : If all the elements are same and that if for returning the answer

*/
vector<int> unionOfTwoSortedArraysOptimal(vector<int> a, vector<int> b) {
  int n1 = a.size();
  int n2 = b.size();
  int i = 0;
  int j = 0;
  vector<int> unionArr;

  while (i < n1 && j < n2) {
    if (a[i] <= b[j]) {
      if (unionArr.size() == 0 || unionArr.back() != a[i]) {
        unionArr.push_back(a[i]);
      }
      i++;
    } else {
      if (unionArr.size() == 0 || unionArr.back() != b[j]) {
        unionArr.push_back(b[j]);
      }
      j++;
    }
  }

  while (i < n1) {
    if (unionArr.size() == 0 || unionArr.back() != a[i]) {
      unionArr.push_back(a[i]);
    }
    i++;
  }

  while (j < n2) {
    if (unionArr.size() == 0 || unionArr.back() != b[j]) {
      unionArr.push_back(b[j]);
    }
    j++;
  }

  return unionArr;
}

int main() {
  int n1, n2;
  cin >> n1 >> n2;
  vector<int> a(n1);
  vector<int> b(n2);

  for (int i = 0; i < n1; i++) {
    cin >> a[i];
  }

  for (int i = 0; i < n2; i++) {
    cin >> b[i];
  }

  // vector<int> output = unionOfTwoSortedArraysBrute(a, b);
  vector<int> output = unionOfTwoSortedArraysOptimal(a, b);

  for (auto it : output) {
    cout << it << endl;
  }

  return 0;
}