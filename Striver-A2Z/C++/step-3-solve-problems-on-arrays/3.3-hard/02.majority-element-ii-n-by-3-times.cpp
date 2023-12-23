#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute

TC -> O(N^2), where N = size of the given array.
Reason: For every element of the array the inner loop runs for N times. And there are N elements in the array. So, the total time complexity is O(N2).

SC -> O(1) as we are using a list that stores a maximum of 2 elements. The space used is so small that it can be considered constant.
*/
vector<int> majorityElementBrute(vector<int> v) {
  int n = v.size(); // size of the array
  vector<int> ls;   // list of answers

  for (int i = 0; i < n; i++) {
    /*
      selected element is v[i];
      Checking if v[i] is not already a
      part of the answer
    */
    if (ls.size() == 0 || ls[0] != v[i]) {
      int cnt = 0;
      for (int j = 0; j < n; j++) {
        // counting the frequency of v[i]
        if (v[j] == v[i]) {
          cnt++;
        }
      }

      // check if frequency is greater than n/3:
      if (cnt > (n / 3)) {
        ls.push_back(v[i]);
      }
    }

    if (ls.size() == 2)
      break;
  }

  return ls;
}

/*
Method: Better

TC -> O(N*logN), where N = size of the given array.
Reason: We are using a map data structure. Insertion in the map takes logN time. And we are doing it for N elements. So, it results in the first term O(N*logN).
If we use unordered_map instead, the first term will be O(N) for the best and average case and for the worst case, it will be O(N2).

SC -> O(N) as we are using a map data structure. We are also using a list that stores a maximum of 2 elements. That space used is so small that it can be considered constant.
*/
vector<int> majorityElementBetter(vector<int> v) {
  int n = v.size(); // size of the array
  vector<int> ls;   // list of answers

  // declaring a map:
  map<int, int> mpp;

  // least occurrance of the majority element:
  int mini = int(n / 3) + 1;

  // storing the elements with its occurrance
  for (int i = 0; i < n; i++) {
    mpp[v[i]]++;

    // checking if v[i] is
    // the majority element:
    if (mpp[v[i]] == mini) {
      ls.push_back(v[i]);
    }

    if (ls.size() == 2)
      break;
  }

  return ls;
}

/*
Method: Optimal

TC -> O(N) + O(N), where N = size of the given array.
Reason: The first O(N) is to calculate the counts and find the expected majority elements. The second one is to check if the calculated elements are the majority ones or not.

SC -> O(1) as we are only using a list that stores a maximum of 2 elements. The space used is so small that it can be considered constant.

*/
vector<int> majorityElementOptimal(vector<int> v) {
  int n = v.size(); // size of the array

  int cnt1 = 0, cnt2 = 0; // counts
  int el1 = INT_MIN;      // element 1
  int el2 = INT_MIN;      // element 2

  // applying the extended Boyer Moore's Voting Algorithm
  for (int i = 0; i < n; i++) {
    if (cnt1 == 0 && el2 != v[i]) {
      cnt1 = 1;
      el1 = v[i];
    } else if (cnt2 == 0 && el1 != v[i]) {
      cnt2 = 1;
      el2 = v[i];
    } else if (v[i] == el1) {
      cnt1++;
    } else if (v[i] == el2) {
      cnt2++;
    } else {
      cnt1--;
      cnt2--;
    }
  }

  vector<int> ls; // list of answers

  // Manually check if the stored elements in
  // el1 and el2 are the majority elements:
  cnt1 = 0, cnt2 = 0;
  for (int i = 0; i < n; i++) {
    if (v[i] == el1)
      cnt1++;
    if (v[i] == el2)
      cnt2++;
  }

  int mini = int(n / 3) + 1;
  if (cnt1 >= mini)
    ls.push_back(el1);
  if (cnt2 >= mini)
    ls.push_back(el2);

  // Uncomment the following line
  // if it is told to sort the answer array:
  // sort(ls.begin(), ls.end()); // TC --> O(2*log2) ~ O(1);

  return ls;
}

int main() {

  vector<int> arr = {11, 33, 33, 33, 33, 11, 22, 22, 22, 22};

  // vector<int> output = majorityElementBrute(arr);
  // vector<int> output = majorityElementBetter(arr);
  vector<int> output = majorityElementOptimal(arr);

  cout << "The majority elements are: ";

  for (auto it : output) {
    cout << it << " ";
  }
  cout << endl;

  return 0;
}