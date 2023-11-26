/*

Title: 1727. Largest Submatrix With Rearrangements
URL: https://leetcode.com/problems/largest-submatrix-with-rearrangements/
Difficulty: Medium
Topics: Array, Greedy, Sorting, Matrix


**Problem**

You are given a binary matrix `matrix` of size `m x n`, and you are allowed to rearrange the **columns** of the `matrix` in any order.

Return *the area of the largest submatrix within* `matrix` *where **every** element of the submatrix is* `1` *after reordering the columns optimally.*

**Example 1:**

!https://assets.leetcode.com/uploads/2020/12/29/screenshot-2020-12-30-at-40536-pm.png

```
Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
Output: 4
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 4.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/12/29/screenshot-2020-12-30-at-40852-pm.png

```
Input: matrix = [[1,0,1,0,1]]
Output: 3
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 3.

```

**Example 3:**

```
Input: matrix = [[1,1,0],[1,0,1]]
Output: 2
Explanation: Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2.

```

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m * n <= 105`
- `matrix[i][j]` is either `0` or `1`.



**Solution**
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 1; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
          if (matrix[i][j] === 1) {
              matrix[i][j] += matrix[i - 1][j];
          }
      }
  }
  
  let ans = 0;
  
  matrix.forEach(row => {
      row.sort((a, b) => b - a);
      for (let j = 0, k = 1; j < n && row[j] > 0; ++j, ++k) {
          const s = row[j] * k;
          ans = Math.max(ans, s);
      }
  });
  
  return ans;
};