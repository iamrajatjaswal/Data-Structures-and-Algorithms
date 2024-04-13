/*

Title: 85. Maximal Rectangle
URL: https://leetcode.com/problems/maximal-rectangle/
Difficulty: Hard
Topics: Array, Dynamic Programming, Stack, Matrix, Monotonic Stack


**Problem**


Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return *its area*.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg

```
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

```

**Example 2:**

```
Input: matrix = [["0"]]
Output: 0

```

**Example 3:**

```
Input: matrix = [["1"]]
Output: 1

```

**Constraints:**

- `rows == matrix.length`
- `cols == matrix[i].length`
- `1 <= row, cols <= 200`
- `matrix[i][j]` is `'0'` or `'1'`.



**Solution**

*/
/*
  Approach 1 :: "Histogram Approach"
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  let left = new Array(n).fill(0);
  let right = new Array(n).fill(n);
  let height = new Array(n).fill(0);
  let maxA = 0;
  for (let i = 0; i < m; i++) {
    let cur_left = 0,
      cur_right = n;
    for (let j = 0; j < n; j++) {
      // compute height (can do this from either side)
      if (matrix[i][j] === "1") height[j]++;
      else height[j] = 0;
    }
    for (let j = 0; j < n; j++) {
      // compute left (from left to right)
      if (matrix[i][j] === "1") left[j] = Math.max(left[j], cur_left);
      else {
        left[j] = 0;
        cur_left = j + 1;
      }
    }
    // compute right (from right to left)
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] === "1") right[j] = Math.min(right[j], cur_right);
      else {
        right[j] = n;
        cur_right = j;
      }
    }
    // compute the area of rectangle (can do this from either side)
    for (let j = 0; j < n; j++)
      maxA = Math.max(maxA, (right[j] - left[j]) * height[j]);
  }
  return maxA;
};
