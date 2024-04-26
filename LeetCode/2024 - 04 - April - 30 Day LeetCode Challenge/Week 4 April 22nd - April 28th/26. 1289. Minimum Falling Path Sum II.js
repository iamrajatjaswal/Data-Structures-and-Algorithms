/*

Title: 1289. Minimum Falling Path Sum II
URL: https://leetcode.com/problems/minimum-falling-path-sum-ii/
Difficulty: Hard
Topics: Array, Dynamic Programming, Matrix


**Problem**


Given an `n x n` integer matrix `grid`, return *the minimum sum of a **falling path with non-zero shifts***.

A **falling path with non-zero shifts** is a choice of exactly one element from each row of `grid` such that no two elements chosen in adjacent rows are in the same column.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/08/10/falling-grid.jpg

```
Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
Output: 13
Explanation:
The possible falling paths are:
[1,5,9], [1,5,7], [1,6,7], [1,6,8],
[2,4,8], [2,4,9], [2,6,7], [2,6,8],
[3,4,8], [3,4,9], [3,5,7], [3,5,9]
The falling path with the smallest sum is [1,5,7], so the answer is 13.

```

**Example 2:**

```
Input: grid = [[7]]
Output: 7

```

**Constraints:**

- `n == grid.length == grid[i].length`
- `1 <= n <= 200`
- `99 <= grid[i][j] <= 99`


**Solution**

*/
/*
  Approach 1 :: "Dynamic Programming with Memoization" approach :: T→O(n^2 * m) : S→O(n)

  - Time complexity:
    - The time complexity of the recursive function `minFallingPathSum` is `O(n * m)`, where n is the number of rows and m is the number of columns in the grid.
    - Since we call this function for each row of the grid, the overall time complexity is `O(n^2 * m)`.
  
  - Space complexity:
    - The space complexity is O(n) for the recursion stack and `O(1)` for the other variables used, resulting in a total space complexity of `O(n)`.

*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const minFallingPathSumHelper = function (row, grid) {
    if (row === grid.length) {
      return new Triplet(0, 0, 0);
    }

    const nextRowTriplet = minFallingPathSumHelper(row + 1, grid);
    let currentTriplet = new Triplet(
      Number.MAX_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
      -1
    );

    for (let col = 0; col < grid[0].length; col++) {
      const value =
        grid[row][col] +
        (col !== nextRowTriplet.minSumIndex
          ? nextRowTriplet.minSum
          : nextRowTriplet.secondMinSum);
      if (value <= currentTriplet.minSum) {
        currentTriplet.secondMinSum = currentTriplet.minSum;
        currentTriplet.minSum = value;
        currentTriplet.minSumIndex = col;
      } else if (value < currentTriplet.secondMinSum) {
        currentTriplet.secondMinSum = value;
      }
    }

    return currentTriplet;
  };

  const n = grid.length;
  return minFallingPathSumHelper(0, grid).minSum;
};

class Triplet {
  constructor(minSum, secondMinSum, minSumIndex) {
    this.minSum = minSum;
    this.secondMinSum = secondMinSum;
    this.minSumIndex = minSumIndex;
  }
}
