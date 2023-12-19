/*

Title: 2482. Difference Between Ones and Zeros in Row and Column
URL: https://leetcode.com/problems/destination-city/
Difficulty: Medium
Topics: Hash Table, String


**Problem**

You are given the array `paths`, where `paths[i] = [cityAi, cityBi]` means there exists a direct path going from `cityAi` to `cityBi`. *Return the destination city, that is, the city without any path outgoing to another city.*

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

**Example 1:**

```
Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo"
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

```

**Example 2:**

```
Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are:
"D" -> "B" -> "C" -> "A".
"B" -> "C" -> "A".
"C" -> "A".
"A".
Clearly the destination city is "A".

```

**Example 3:**

```
Input: paths = [["A","Z"]]
Output: "Z"

```

**Constraints:**

- `1 <= paths.length <= 100`
- `paths[i].length == 2`
- `1 <= cityAi.length, cityBi.length <= 10`
- `cityAi != cityBi`
- All strings consist of lowercase and uppercase English letters and the space character.



**Solution**
*/

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const cities = new Set();

  // Collect outgoing cities
  for (const path of paths) {
    cities.add(path[0]);
  }

  // Find destination city with no outgoing path
  for (const path of paths) {
    const dest = path[1];
    if (!cities.has(dest)) {
      return dest;
    }
  }

  return "";
};
