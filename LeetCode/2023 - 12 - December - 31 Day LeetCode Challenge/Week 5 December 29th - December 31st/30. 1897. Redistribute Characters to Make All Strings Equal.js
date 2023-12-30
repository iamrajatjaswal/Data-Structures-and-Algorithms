/*

Title: 1897. Redistribute Characters to Make All Strings Equal
URL: https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
Difficulty: Hard
Topics: Hash Table, String, Counting


**Problem**

You are given an array of strings `words` (**0-indexed**).

In one operation, pick two **distinct** indices `i` and `j`, where `words[i]` is a non-empty string, and move **any** character from `words[i]` to **any** position in `words[j]`.

Return `true` *if you can make **every** string in* `words` ***equal** using **any** number of operations*, *and* `false` *otherwise*.

**Example 1:**

```
Input: words = ["abc","aabc","bc"]
Output: true
Explanation: Move the first 'a' inwords[1] to the front of words[2],
to makewords[1] = "abc" and words[2] = "abc".
All the strings are now equal to "abc", so returntrue.

```

**Example 2:**

```
Input: words = ["ab","a"]
Output: false
Explanation: It is impossible to make all the strings equal using the operation.

```

**Constraints:**

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists of lowercase English letters.


**Solution**
*/

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  if (words.length === 1) {
    return true;
  }

  let totalCharCount = 0;
  for (const s of words) {
    totalCharCount += s.length;
  }

  if (totalCharCount % words.length !== 0) {
    return false;
  }

  let myMap = new Array(26).fill(0);
  for (const s of words) {
    for (const c of s) {
      myMap[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }

  for (const i of myMap) {
    if (i % words.length !== 0) {
      return false;
    }
  }

  return true;
};
