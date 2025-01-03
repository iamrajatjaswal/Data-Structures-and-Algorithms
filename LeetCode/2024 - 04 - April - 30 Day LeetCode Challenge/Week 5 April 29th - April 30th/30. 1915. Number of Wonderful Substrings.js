/*

Title: 1915. Number of Wonderful Substrings
URL: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/
Difficulty: Medium
Topics: Hash Table, String, Bit Manipulation, Prefix Sum


**Problem**


A **wonderful** string is a string where **at most one** letter appears an **odd** number of times.

- For example, `"ccjjc"` and `"abab"` are wonderful, but `"ab"` is not.

Given a string `word` that consists of the first ten lowercase English letters (`'a'` through `'j'`), return *the **number of wonderful non-empty substrings** in* `word`*. If the same substring appears multiple times in* `word`*, then count **each occurrence** separately.*

A **substring** is a contiguous sequence of characters in a string.

**Example 1:**

```
Input: word = "aba"
Output: 4
Explanation: The four wonderful substrings are underlined below:
- "aba" -> "a"
- "aba" -> "b"
- "aba" -> "a"
- "aba" -> "aba"

```

**Example 2:**

```
Input: word = "aabb"
Output: 9
Explanation: The nine wonderful substrings are underlined below:
- "aabb" -> "a"
- "aabb" -> "aa"
- "aabb" -> "aab"
- "aabb" -> "aabb"
- "aabb" -> "a"
- "aabb" -> "abb"
- "aabb" -> "b"
- "aabb" -> "bb"
- "aabb" -> "b"

```

**Example 3:**

```
Input: word = "he"
Output: 2
Explanation: The two wonderful substrings are underlined below:
- "he" -> "h"
- "he" -> "e"

```

**Constraints:**

- `1 <= word.length <= 10^5`
- `word` consists of lowercase English letters from `'a'` to `'j'`.



**Solution**

*/
/*

  Approach 1 :: "Bit Manipulation" :: T→O(N) : S→O(1)

  - Time Complexity:
    
    `O(N)` where `N` is the length of the input string word. This is because the solution iterates through each character of the string only once.
    
  - Space Complexity:
    
    `O(1)` since the space usage is independent of the input size `N`. However, the array mp has a fixed size of `1024`.
  
    
*/
/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
  let res = 0;
  let x = 0;
  const mp = Array(1024).fill(0);
  mp[x] = 1;
  for (let ch of word) {
    x ^= 1 << (ch.charCodeAt(0) - "a".charCodeAt(0));
    res += mp[x];
    for (let i = 0; i <= 9; i++) res += mp[x ^ (1 << i)];
    mp[x]++;
  }
  return res;
};
