/*

Title: 1347. Minimum Number of Steps to Make Two Strings Anagram
URL: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
Difficulty: Easy
Topics: String, Counting


**Problem**

You are given two strings of the same length `s` and `t`. In one step you can choose **any character** of `t` and replace it with **another character**.

Return *the minimum number of steps* to make `t` an anagram of `s`.

An **Anagram** of a string is a string that contains the same characters with a different (or the same) ordering.

**Example 1:**

```
Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

```

**Example 2:**

```
Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

```

**Example 3:**

```
Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams.

```

**Constraints:**

- `1 <= s.length <= 5 * 10^4`
- `s.length == t.length`
- `s` and `t` consist of lowercase English letters only.

**Solution**
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let smp = new Map();
  let tmp = new Map();
  let cnt = 0;

  for (let a of s) {
    smp.set(a, (smp.get(a) || 0) + 1);
  }

  for (let a of t) {
    tmp.set(a, (tmp.get(a) || 0) + 1);
  }

  for (let [key, value] of smp) {
    if (tmp.has(key)) {
      if (value === tmp.get(key)) {
        cnt += value;
      } else {
        cnt += Math.min(value, tmp.get(key));
      }
    }
  }

  return s.length - cnt;
};
