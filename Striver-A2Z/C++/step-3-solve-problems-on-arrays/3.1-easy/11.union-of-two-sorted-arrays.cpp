#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(n1logn) + O(n2logn) + O(n1 + n2)
SC -> O(n1 + n2) + O(n1 + n2)

*/
vector<int> unionOfSortedArrayBrute(vector<int> a, vector<int> b) {
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

  vector<int> output = unionOfSortedArrayBrute(a, b);

  for (auto it : output) {
    cout << it << endl;
  }

  return 0;
}