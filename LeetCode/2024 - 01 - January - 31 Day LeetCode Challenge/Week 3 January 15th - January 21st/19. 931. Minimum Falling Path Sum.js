/*

Title: 931. Minimum Falling Path Sum
URL: https://leetcode.com/problems/minimum-falling-path-sum/
Difficulty: Medium
Topics: Array, Dynamic Programming, Matrix


**Problem**

Given an `n x n` array of integers `matrix`, return *the **minimum sum** of any **falling path** through* `matrix`.

A **falling path** starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position `(row, col)` will be `(row + 1, col - 1)`, `(row + 1, col)`, or `(row + 1, col + 1)`.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/11/03/failing1-grid.jpg

```
Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/11/03/failing2-grid.jpg

```
Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is shown.

```

**Constraints:**

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 100`
- `100 <= matrix[i][j] <= 100`




**Solution**
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

  for (let j = 0; j < m; j++) {
    dp[0][j] = matrix[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let ld = Infinity,
        rd = Infinity;
      const up = matrix[i][j] + dp[i - 1][j];

      if (j - 1 >= 0) {
        ld = matrix[i][j] + dp[i - 1][j - 1];
      }
      if (j + 1 < m) {
        rd = matrix[i][j] + dp[i - 1][j + 1];
      }

      dp[i][j] = Math.min(up, Math.min(ld, rd));
    }
  }

  let mini = dp[n - 1][0];
  for (let j = 1; j < m; j++) {
    mini = Math.min(mini, dp[n - 1][j]);
  }
  return mini;
};
