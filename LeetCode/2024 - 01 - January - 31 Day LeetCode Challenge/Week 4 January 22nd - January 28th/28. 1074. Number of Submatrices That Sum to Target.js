/*

Title: 1074. Number of Submatrices That Sum to Target
URL: https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/
Difficulty: Hard
Topics: Array, Hash Table, Matrix, Prefix Sum


**Problem**

Given a `matrix` and a `target`, return the number of non-empty submatrices that sum to target.

A submatrix `x1, y1, x2, y2` is the set of all cells `matrix[x][y]` with `x1 <= x <= x2` and `y1 <= y <= y2`.

Two submatrices `(x1, y1, x2, y2)` and `(x1', y1', x2', y2')` are different if they have some coordinate that is different: for example, if `x1 != x1'`.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/09/02/mate1.jpg

```
Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
Output: 4
Explanation: The four 1x1 submatrices that only contain 0.

```

**Example 2:**

```
Input: matrix = [[1,-1],[-1,1]], target = 0
Output: 5
Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.

```

**Example 3:**

```
Input: matrix = [[904]], target = 0
Output: 0

```

**Constraints:**

- `1 <= matrix.length <= 100`
- `1 <= matrix[0].length <= 100`
- `1000 <= matrix[i] <= 1000`
- `10^8 <= target <= 10^8`


**Solution**
*/

/*
  Approach 1
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 1; col < n; col++) {
      matrix[row][col] += matrix[row][col - 1];
    }
  }

  let count = 0;

  for (let c1 = 0; c1 < n; c1++) {
    for (let c2 = c1; c2 < n; c2++) {
      const map = new Map();
      map.set(0, 1);
      let sum = 0;

      for (let row = 0; row < m; row++) {
        sum += matrix[row][c2] - (c1 > 0 ? matrix[row][c1 - 1] : 0);
        count += map.get(sum - target) || 0;
        map.set(sum, (map.get(sum) || 0) + 1);
      }
    }
  }

  return count;
};

/*
  Approach 2
*/

const subarraySum = (nums, k) => {
  let count = 0;
  let sum = 0;
  const mp = new Map();

  for (const num of nums) {
    sum += num;

    if (sum === k) {
      count++;
    }

    if (mp.has(sum - k)) {
      count += mp.get(sum - k);
    }

    mp.set(sum, (mp.get(sum) || 0) + 1);
  }

  return count;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
const numSubmatrixSumTarget = (matrix, target) => {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    const sum = Array(matrix[0].length).fill(0);

    for (let j = i; j < matrix.length; j++) {
      for (let k = 0; k < matrix[0].length; k++) {
        sum[k] += matrix[j][k];
      }

      count += subarraySum(sum, target);
    }
  }

  return count;
};
