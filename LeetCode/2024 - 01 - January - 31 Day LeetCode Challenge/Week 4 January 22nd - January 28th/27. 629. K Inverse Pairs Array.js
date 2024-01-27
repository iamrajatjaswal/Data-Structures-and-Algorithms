/*

Title: 629. K Inverse Pairs Array
URL: https://leetcode.com/problems/k-inverse-pairs-array/
Difficulty: Hard
Topics: Dynamic Programming


**Problem**

For an integer array `nums`, an **inverse pair** is a pair of integers `[i, j]` where `0 <= i < j < nums.length` and `nums[i] > nums[j]`.

Given two integers n and k, return the number of different arrays consist of numbers from `1` to `n` such that there are exactly `k` **inverse pairs**. Since the answer can be huge, return it **modulo** `109 + 7`.

**Example 1:**

```
Input: n = 3, k = 0 ̰
Output: 1
Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.

```

**Example 2:**

```
Input: n = 3, k = 1
Output: 2
Explanation: The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.

```

**Constraints:**

- `1 <= n <= 1000`
- `0 <= k <= 1000`



**Solution**
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  const M = 1000000007;
  let dp = new Array(1001).fill(0).map(() => new Array(1001).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      for (let x = 0; x <= Math.min(j, i - 1); x++) {
        if (j - x >= 0) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % M;
        }
      }
    }
  }

  return dp[n][k];
};
