/*

Title: 576. Out of Boundary Paths
URL: https://leetcode.com/problems/out-of-boundary-paths/
Difficulty: Medium
Topics: Dynamic Programming


**Problem**


There is an `m x n` grid with a ball. The ball is initially at the position `[startRow, startColumn]`.
 You are allowed to move the ball to one of the four adjacent cells in 
the grid (possibly out of the grid crossing the grid boundary). You can 
apply **at most** `maxMove` moves to the ball.

Given the five integers `m`, `n`, `maxMove`, `startRow`, `startColumn`, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it **modulo** `109 + 7`.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/04/28/out_of_boundary_paths_1.png

```
Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/04/28/out_of_boundary_paths_2.png

```
Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12

```

**Constraints:**

- `1 <= m, n <= 50`
- `0 <= maxMove <= 50`
- `0 <= startRow < m`
- `0 <= startColumn < n`


**Solution**
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, N, x, y) {
  const M = 1000000000 + 7;

  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  dp[x][y] = 1;

  let count = 0;

  for (let moves = 1; moves <= N; moves++) {
    let temp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === m - 1) count = (count + dp[i][j]) % M;

        if (j === n - 1) count = (count + dp[i][j]) % M;

        if (i === 0) count = (count + dp[i][j]) % M;

        if (j === 0) count = (count + dp[i][j]) % M;

        temp[i][j] =
          ((((i > 0 ? dp[i - 1][j] : 0) + (i < m - 1 ? dp[i + 1][j] : 0)) % M) +
            (((j > 0 ? dp[i][j - 1] : 0) + (j < n - 1 ? dp[i][j + 1] : 0)) %
              M)) %
          M;
      }
    }

    dp = temp;
  }

  return count;
};
