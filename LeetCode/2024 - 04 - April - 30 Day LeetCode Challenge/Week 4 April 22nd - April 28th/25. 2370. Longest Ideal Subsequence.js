/*

Title: 2370. Longest Ideal Subsequence
URL: https://leetcode.com/problems/longest-ideal-subsequence/
Difficulty: Medium
Topics: 


**Problem**


You are given a string `s` consisting of lowercase letters and an integer `k`. We call a string `t` **ideal** if the following conditions are satisfied:

- `t` is a **subsequence** of the string `s`.
- The absolute difference in the alphabet order of every two **adjacent** letters in `t` is less than or equal to `k`.

Return *the length of the **longest** ideal string*.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

**Note** that the alphabet order is not cyclic. For example, the absolute difference in the alphabet order of `'a'` and `'z'` is `25`, not `1`.

**Example 1:**

```
Input: s = "acfgbd", k = 2
Output: 4
Explanation: The longest ideal string is "acbd". The length of this string is 4, so 4 is returned.
Note that "acfgbd" is not ideal because 'c' and 'f' have a difference of 3 in alphabet order.
```

**Example 2:**

```
Input: s = "abcd", k = 3
Output: 4
Explanation: The longest ideal string is "abcd". The length of this string is 4, so 4 is returned.

```

**Constraints:**

- `1 <= s.length <= 10^5`
- `0 <= k <= 25`
- `s` consists of lowercase English letters.


**Solution**

*/
/*
  Approach 1 :: "Dynamic Programming" approach :: T→O(26 * n) : S→O(1)
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  const rangePerOrd = Array.from({ length: 26 }, (_, x) => ({
    start: Math.max(0, x - k),
    end: Math.min(26, x + k + 1),
  }));

  const bestPrev = new Array(26).fill(0);
  const ordA = "a".charCodeAt(0);

  for (const ch of s) {
    const idx = ch.charCodeAt(0) - ordA;
    const { start, end } = rangePerOrd[idx];
    let bestCurrent = 0;

    for (let j = start; j < end; j++) {
      bestCurrent = Math.max(bestCurrent, bestPrev[j]);
    }

    bestPrev[idx] = bestCurrent + 1;
  }

  return Math.max(...bestPrev);
};
