/*

Title: 1582. Special Positions in a Binary Matrix   
URL: https://leetcode.com/problems/special-positions-in-a-binary-matrix/
Difficulty: Easy
Topics: Array, Matrix


**Problem**

Given an `m x n` binary matrix `mat`, return *the number of special positions in* `mat`*.*

A position `(i, j)` is called **special** if `mat[i][j] == 1` and all other elements in row `i` and column `j` are `0` (rows and columns are **0-indexed**).

**Example 1:**

!https://assets.leetcode.com/uploads/2021/12/23/special1.jpg

```
Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/12/24/special-grid.jpg

```
Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions.

```

**Constraints:**

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 100`
- `mat[i][j]` is either `0` or `1`.



**Solution**
*/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let specials = 0;

  for (let i = 0; i < mat.length; i++) {
    let index = checkRow(mat, i);
    if (index >= 0 && checkColumn(mat, i, index)) specials++;
  }

  return specials;

  function checkRow(mat, i) {
    let index = -1;
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        if (index >= 0) return -1;
        else index = j;
      }
    }
    return index;
  }

  function checkColumn(mat, i, index) {
    for (let j = 0; j < mat.length; j++) {
      if (mat[j][index] === 1 && j !== i) return false;
    }
    return true;
  }
};
