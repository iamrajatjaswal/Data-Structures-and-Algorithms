/*

Title: 70. Climbing Stairs
URL: https://leetcode.com/problems/climbing-stairs/
Difficulty: Easy
Topics: Math, Dynamic Programming, Memoization


**Problem**

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1:**

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

```

**Example 2:**

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

```

**Constraints:**

- `1 <= n <= 45`


**Solution**
*/

/*
  Approach 1
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let a = 0;
  let b = 1;
  let c = 0;

  for (let i = 0; i < n; i++) {
      c = a + b;
      a = b;
      b = c;
  }

  return b;
}
