/*

Title: 647. Palindromic Substrings
URL: https://leetcode.com/problems/palindromic-substrings/
Difficulty: Medium
Topics: Array, Math, Dynamic Programming, Sorting


**Problem**


Given a string `s`, return *the number of **palindromic substrings** in it*.

A string is a **palindrome** when it reads the same backward as forward.

A **substring** is a contiguous sequence of characters within the string.

**Example 1:**

```
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

```

**Example 2:**

```
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

```

**Constraints:**

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters.


**Solution**

*/

/*
  Approach 1

  - Time complexity:
    
    O(n^2)
    
  - Space complexity:
    
    O(n^2)
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let n = s.length;
  let ans = 0;

  if (n <= 0) return 0;

  let dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

  for (let i = 0; i < n; ++i, ++ans) dp[i][i] = true;

  for (let i = 0; i < n - 1; ++i) {
    dp[i][i + 1] = s[i] === s[i + 1];
    ans += dp[i][i + 1] ? 1 : 0;
  }

  for (let length = 3; length <= n; ++length)
    for (let i = 0, j = i + length - 1; j < n; ++i, ++j) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      ans += dp[i][j] ? 1 : 0;
    }

  return ans;
};
