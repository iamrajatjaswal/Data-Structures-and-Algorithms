/*

Title: 1657. Determine if Two Strings Are Close
URL: https://leetcode.com/problems/determine-if-two-strings-are-close/
Difficulty: Medium
Topics: Hash Table, String, Sorting, Counting


**Problem**

Two strings are considered **close** if you can attain one from the other using the following operations:

- Operation 1: Swap any two **existing** characters.
    - For example, `abcde -> aecdb`
- Operation 2: Transform **every** occurrence of one **existing** character into another **existing** character, and do the same with the other character.
    - For example, `aacabb -> bbcbaa` (all `a`'s turn into `b`'s, and all `b`'s turn into `a`'s)

You can use the operations on either string as many times as necessary.

Given two strings, `word1` and `word2`, return `true` *if* `word1` *and* `word2` *are **close**, and* `false` *otherwise.*

**Example 1:**

```
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

```

**Example 2:**

```
Input: word1 = "a", word2 = "aa"
Output: false
Explanation:It is impossible to attain word2 from word1, or vice versa, in any number of operations.

```

**Example 3:**

```
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

```

**Constraints:**

- `1 <= word1.length, word2.length <= 10^5`
- `word1` and `word2` contain only lowercase English letters.


**Solution**
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; ++i) {
    freq1[word1.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < word2.length; ++i) {
    freq2[word2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; ++i) {
    if ((freq1[i] > 0 && freq2[i] === 0) || (freq2[i] > 0 && freq1[i] === 0)) {
      return false;
    }
  }

  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);

  for (let i = 0; i < 26; ++i) {
    if (freq1[i] !== freq2[i]) {
      return false;
    }
  }

  return true;
};
