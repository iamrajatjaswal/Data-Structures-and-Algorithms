#include <bits/stdc++.h>
using namespace std;

int main() {
  int n;
  cin >> n;
  int arr[n];
  unordered_map<int, int> mpp;
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
    mpp[arr[i]]++;
  }

  // pre-compute
  // map<int, int> mpp;
  // for (int i = 0; i < n; i++) {
  //   mpp[arr[i]]++;
  // }

  // unordered_map stores all the keys in random order & we can prove it be looping the map below
  // the ordering of the keys is decided by the compiler and it is what we cannot decide and if there is a different compiler then it will have a different order of the keys
  for (auto it : mpp) {
    cout << it.first << "->" << it.second << endl;
  }

  int q;
  cin >> q;
  while (q--) {
    int number;
    cin >> number;
    // fetch
    cout << mpp[number] << endl;
  }

  return 0;
}

/*

Map -> Any of the datatype can be key in the map
i.e. it can be int, pair<int, int>, vector<int, int>

Unordered Map -> The keys are limited to only individual type of datatypes i.e. integer, double, character, strings.

*/



/*

Time Complexity:
for storing and fetch {
  average and best case is O(1)
  worst case O(N) -> worst case will happen in very minor cases
  // Worst case happens because of internal collisions
}


Hashing Method:
  * Division Method
  * Folding Method
  * Mid Square Method


  * Division Method: (Linear chaining happens if there are multiple values)
  Imagine you have an array:
  {2, 5, 16, 28, 139, 38, 48, 28, 18}

  then while hashing in the division method it will divide with arr[i] % 10 then the remainder will be fetched and and value will be stored into that hashing place and storage index will be smaller in this case

  Below are the indexes of the array hash in which above array values are stored in the unordered_map
  0
  1
  2 -> 2
  3
  4
  5 -> 5
  6 -> 16
  7
  8 -> 18 -> 28 -> 28 -> 38 -> 48
  9 -> 139

  Now imagine if there were all the numbers in the array ending with 8 then the hashing would have been in the same index 8 and the chainging would have been of the order of O(N) due to the number of collissions happening

  Well there are multiple algorithms are being used in the unordered_map and the methods like division method or other methods are being used depending upon the input size and other scenarios i.e. they will use some method which is a mixture of everything and these types of collissions with the time complexity of the order of  O(N) will happen once in the blue moon.

*/
