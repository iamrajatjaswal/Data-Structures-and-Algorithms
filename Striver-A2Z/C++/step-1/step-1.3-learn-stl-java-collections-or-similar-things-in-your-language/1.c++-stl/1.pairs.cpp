#include <bits/stdc++.h>
using namespace std;

/**
 * @brief Pairs
 * If you have a couple of values, you can 
 * then you can store them in pairs
 * 
 * If you have more than two values then you
 * can store in the nested pairs
 * 
 * Also Pairs can also be the datatype of the 
 * array exactly like other datatypes like int
 * etc
 * 
 */
void explainPairs() {
  pair<int, int> p = {1, 3};
  cout << p.first << " " << p.second << endl;

  pair<int, pair<int, int>> p2 = {1, {3, 4}};
  cout << p.first << " " << p2.second.first << " " << p2.second.second << endl;

  pair<int, int> arr[] = {{1, 2}, {2, 5}, {5, 1}};
  cout << arr[1].second;
}

int main() {
  explainPairs();
  return 0;
}