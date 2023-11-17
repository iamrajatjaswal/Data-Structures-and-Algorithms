#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute
TC -> O(N^2)
SC -> O(1)
*/
int getSingleElementBrute(vector<int> &arr) {
  for (int i = 0; i < arr.size(); i++) {
    int num = arr[i];
    int count = 0;

    for (int j = 0; j < arr.size(); j++) {
      if (arr[j] == num) {
        count++;
      }
    }

    if (count == 1) {
      return num;
    }
  }

  return 0;
}

/*
Method: Better with array datastructure
TC -> O(3N)
SC -> O(max element)
*/
int getSingleElementBetterWithArray(vector<int> &arr) {
  int maximum = arr[0];

  for (int i = 0; i < arr.size(); i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }

  vector<int> hash(maximum + 1, 0);

  for (int i = 0; i < arr.size(); i++) {
    hash[arr[i]]++;
  }

  for (int i = 0; i < arr.size(); i++) {
    if (hash[arr[i]] == 1) {
      return i;
    }
  }

  return 0;
}

/*
Method: Better with Map datastructure
TC -> O(N * log(N/2 + 1)) + O(N/2 + 1) where (N/2 + 1) is the size of the map
SC -> O(N/2 + 1)
*/
int getSingleElementBetterWithMap(vector<int> &arr) {
  map<long long, int> mpp;

  for (int i = 0; i < arr.size(); i++) {
    mpp[arr[i]]++;
  }

  for (auto it : mpp) {
    if (it.second == 1)
      return it.first;
  }

  return 0;
}

/*
Method: Optimal
TC -> O(N)
SC -> O(1)
*/
int getSingleElementOptimal(vector<int> &arr) {
  int xorr = 0;

  for (int i = 0; i < arr.size(); i++) {
    xorr ^= arr[i];
  }

  return xorr;
}

int main() {
  /*
    Inputs:
    7
    1 1 2 3 3 4 4
  */
  int n;
  cin >> n;
  vector<int> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  // int output = getSingleElementBrute(arr);
  // int output = getSingleElementBetterWithArray(arr);
  // int output = getSingleElementBetterWithMap(arr);
  int output = getSingleElementOptimal(arr);
  cout << output;

  return 0;
}