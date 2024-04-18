/*

Title: 463. Island Perimeter
URL: https://leetcode.com/problems/island-perimeter/
Difficulty: Medium
Topics: Array, Depth-First Search, Breadth-First Search, Matrix


**Problem**


You are given `row x col` `grid` representing a map where `grid[i][j] = 1` represents land and `grid[i][j] = 0` represents water.

Grid cells are connected **horizontally/vertically** (not diagonally). The `grid` is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't 
connected to the water around the island. One cell is a square with side
 length 1. The grid is rectangular, width and height don't exceed 100. 
Determine the perimeter of the island.

**Example 1:**

!https://assets.leetcode.com/uploads/2018/10/12/island.png

```
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.

```

**Example 2:**

```
Input: grid = [[1]]
Output: 4

```

**Example 3:**

```
Input: grid = [[1,0]]
Output: 4

```

**Constraints:**

- `row == grid.length`
- `col == grid[i].length`
- `1 <= row, col <= 100`
- `grid[i][j]` is `0` or `1`.
- There is exactly one island in `grid`.


**Solution**

*/
/*
  Approach 1 :: Depth-first Traversal”
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        if ((j > 0 && grid[i][j - 1] === 0) || j === 0) cnt++;

        if ((i > 0 && grid[i - 1][j] === 0) || i === 0) cnt++;

        if ((j < m - 1 && grid[i][j + 1] === 0) || j === m - 1) cnt++;

        if ((i < n - 1 && grid[i + 1][j] === 0) || i === n - 1) cnt++;
      }
    }
  }
  return cnt;
};
