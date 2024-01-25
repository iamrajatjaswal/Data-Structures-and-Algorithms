/*

Title: 1143. Longest Common Subsequence
URL: https://leetcode.com/problems/longest-common-subsequence/
Difficulty: Medium
Topics: String, Dynamic Programming


**Problem**

Given two strings `text1` and `text2`, return *the length of their longest **common subsequence**.* If there is no **common subsequence**, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

- For example, `"ace"` is a subsequence of `"abcde"`.

A **common subsequence** of two strings is a subsequence that is common to both strings.

**Example 1:**

```
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

```

**Example 2:**

```
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

```

**Example 3:**

```
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

```

**Constraints:**

- `1 <= text1.length, text2.length <= 1000`
- `text1` and `text2` consist of only lowercase English characters.



**Solution**
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // Lengths of the input strings
  const length1 = text1.length;
  const length2 = text2.length;

  // Create a 2D array to store the lengths of longest common subsequences
  // for all subproblems, initialized with zero
  const dp = new Array(length1 + 1)
    .fill(0)
    .map(() => new Array(length2 + 1).fill(0));

  // Build the dp array from the bottom up
  for (let i = 1; i <= length1; ++i) {
    for (let j = 1; j <= length2; ++j) {
      // If characters match, take diagonal value and add 1
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      // If characters do not match, take the maximum value from
      // the left (dp[i][j-1]) or above (dp[i-1][j])
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  // The bottom-right cell contains the length of the longest
  // common subsequence of text1 and text2
  return dp[length1][length2];
};
