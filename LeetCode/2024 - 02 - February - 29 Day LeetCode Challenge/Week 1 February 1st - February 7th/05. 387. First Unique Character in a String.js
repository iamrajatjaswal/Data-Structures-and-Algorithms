/*

Title: 387. First Unique Character in a String
URL: https://leetcode.com/problems/first-unique-character-in-a-string/
Difficulty: Easy
Topics: Hash Table, String, Queue, Counting


**Problem**


Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not exist, return `-1`.

**Example 1:**

```
Input: s = "leetcode"
Output: 0

```

**Example 2:**

```
Input: s = "loveleetcode"
Output: 2

```

**Example 3:**

```
Input: s = "aabb"
Output: -1

```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` consists of only lowercase English letters.



**Solution**
*/

/*
  Approach
  TC -> O(n)
  SC -> O(U)
  (U is the number of unique characters in the string.)*
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let mp = {};

  for (let a of s) {
      mp[a] = (mp[a] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
      if (mp[s[i]] === 1) {
          return i;
      }
  }

  return -1;
};