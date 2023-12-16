/*

Title: 242. Valid Anagram
URL: https://leetcode.com/problems/valid-anagram/
Difficulty: Medium
Topics: Hash Table, String, Sorting


**Problem**

Given two strings `s` and `t`, return `true` *if* `t` *is an anagram of* `s`*, and* `false` *otherwise*.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true

```

**Example 2:**

```
Input: s = "rat", t = "car"
Output: false

```

**Constraints:**

- `1 <= s.length, t.length <= 5 * 104`
- `s` and `t` consist of lowercase English letters.

**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?



**Solution**
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

      const charMap = Array(26).fill(0);

      for (let i = 0; i < s.length; i++) {
          charMap[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
          charMap[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
      }

      return charMap.every(count => count === 0);
};