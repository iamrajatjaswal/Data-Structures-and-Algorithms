/*

Title: 678. Valid Parenthesis String
URL: https://leetcode.com/problems/valid-parenthesis-string/
Difficulty: Medium
Topics: String, Dynamic Programming, Stack, Greedy


**Problem**


Given a string `s` containing only three types of characters: `'('`, `')'` and `'*'`, return `true` *if* `s` *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
- Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
- Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
- `'*'` could be treated as a single right parenthesis `')'` or a single left parenthesis `'('` or an empty string `""`.

**Example 1:**

```
Input: s = "()"
Output: true

```

**Example 2:**

```
Input: s = "(*)"
Output: true

```

**Example 3:**

```
Input: s = "(*))"
Output: true

```

**Constraints:**

- `1 <= s.length <= 100`
- `s[i]` is `'('`, `')'` or `'*'`.



**Solution**

*/
/*
  Approach 1 :: "Iterating the string from beginning" :: T->O(N) : S->O(1)

  ## **Time Complexity:**
  One pass `O(N)` time

  ## **Space Complexity:**
  `O(1)`
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let cmin = 0, cmax = 0;
  for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === '(') {
          cmax++;
          cmin++;
      }
      if (c === ')') {
          cmax--;
          cmin = Math.max(cmin - 1, 0);
      }
      if (c === '*') {
          cmax++;
          cmin = Math.max(cmin - 1, 0);
      }
      if (cmax < 0) return false;
  }
  return cmin === 0;
};