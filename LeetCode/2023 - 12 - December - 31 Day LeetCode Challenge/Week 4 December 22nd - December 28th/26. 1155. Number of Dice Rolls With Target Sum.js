/*

Title: 1155. Number of Dice Rolls With Target Sum
URL: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
Difficulty: Medium
Topics: Dynamic Programming


**Problem**

You have `n` dice, and each die has `k` faces numbered from `1` to `k`.

Given three integers `n`, `k`, and `target`, return *the number of possible ways (out of the* `kn` *total ways) to roll the dice, so the sum of the face-up numbers equals* `target`. Since the answer may be too large, return it **modulo** `109 + 7`.

**Example 1:**

```
Input: n = 1, k = 6, target = 3
Output: 1
Explanation: You throw one die with 6 faces.
There is only one way to get a sum of 3.

```

**Example 2:**

```
Input: n = 2, k = 6, target = 7
Output: 6
Explanation: You throw two dice, each with 6 faces.
There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.

```

**Example 3:**

```
Input: n = 30, k = 30, target = 500
Output: 222616187
Explanation: The answer must be returned modulo 109 + 7.

```

**Constraints:**

- `1 <= n, k <= 30`
- `1 <= target <= 1000`


**Solution**
*/

const mod = Math.pow(10, 9) + 7;

const recursion = function(dp, n, k, target) {
    if (target === 0 && n === 0) return 1;
    if (n === 0 || target <= 0) return 0;

    if (dp[n][target] !== -1) return dp[n][target] % mod;

    let ways = 0;
    for (let i = 1; i <= k; i++) {
        ways = (ways + recursion(dp, n - 1, k, target - i)) % mod;
    }
    dp[n][target] = ways % mod;
    return dp[n][target];
}

/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(-1));
    return recursion(dp, n, k, target);
};
