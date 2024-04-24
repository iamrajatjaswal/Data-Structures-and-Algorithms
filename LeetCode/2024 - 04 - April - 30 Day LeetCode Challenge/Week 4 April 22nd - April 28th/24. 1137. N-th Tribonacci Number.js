/*

Title: 1137. N-th Tribonacci Number
URL: https://leetcode.com/problems/n-th-tribonacci-number/
Difficulty: Easy
Topics: Math, Dynamic Programming, Memoization


**Problem**


The Tribonacci sequence Tn is defined as follows:

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given `n`, return the value of Tn.

**Example 1:**

```
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

```

**Example 2:**

```
Input: n = 25
Output: 1389537

```

**Constraints:**

- `0 <= n <= 37`
- The answer is guaranteed to fit within a 32-bit integer, ie. `answer <= 2^31 - 1`.


**Solution**

*/
/*
  Approach 1 :: "Dynamic Programming" approach :: T→O(n) : S→O(1)
  
  - Time complexity:
    - The loop iterates n times, each iteration taking constant time. 
      Therefore, the time complexity is `O(n)`.
  
  - Space complexity:
    - We use a constant amount of extra space for the `dp` array. 
      Therefore, the space complexity is `O(1)`.
*/
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 2) return n;

  let dp = [0, 1, 1];

  for (let i = 3; i <= n; ++i) {
    let next = dp[0] + dp[1] + dp[2];
    dp[0] = dp[1];
    dp[1] = dp[2];
    dp[2] = next;
  }

  return dp[2];
};
