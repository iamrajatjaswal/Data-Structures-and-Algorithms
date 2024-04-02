/*

Title: 205. Isomorphic Strings
URL: https://leetcode.com/problems/isomorphic-strings/
Difficulty: Easy
Topics: Hash Table, String


**Problem**


Given two strings `s` and `t`, *determine if they are isomorphic*.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

```
Input: s = "egg", t = "add"
Output: true

```

**Example 2:**

```
Input: s = "foo", t = "bar"
Output: false

```

**Example 3:**

```
Input: s = "paper", t = "title"
Output: true

```

**Constraints:**

- `1 <= s.length <= 5 * 10^4`
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.



**Solution**

*/
/*
  Appraoch 1

  - *Time complexity:*    
    O(n)
    
  - *Space complexity:*    
    O(1)  
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // Base case: for different length of two strings...
  if (s.length != t.length) return false;
  // Create two maps for s & t strings...
  const map1 = [256];
  const map2 = [256];
  // Traverse all elements through the loop...
  for (let idx = 0; idx < s.length; idx++) {
    // Compare the maps, if not equal, return false...
    if (map1[s.charAt(idx)] != map2[t.charAt(idx)]) return false;
    // Insert each character if string s and t into seperate map...
    map1[s.charAt(idx)] = idx + 1;
    map2[t.charAt(idx)] = idx + 1;
  }
  return true; // Otherwise return true...
};
