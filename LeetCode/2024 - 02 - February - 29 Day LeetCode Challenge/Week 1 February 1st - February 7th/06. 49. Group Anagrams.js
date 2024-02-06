/*

Title: 49. Group Anagrams
URL: https://leetcode.com/problems/group-anagrams/
Difficulty: Medium
Topics: Array, Hash Table, String, Sorting


**Problem**

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging
 the letters of a different word or phrase, typically using all the 
original letters exactly once.

**Example 1:**

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

```

**Example 2:**

```
Input: strs = [""]
Output: [[""]]

```

**Example 3:**

```
Input: strs = ["a"]
Output: [["a"]]

```

**Constraints:**

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.


**Solution**
*/

/*
  Approach 1
  
  - Time complexity:
    
    O(n∗k)
    
    *(K is the length of the longest string)*
    
- Space complexity:
    
    O(n∗k)
    
    *(K is the length of the longest string)*
*/

/**
 * @param {string} s
 * @return {string}
 */
var getSignature = function (s) {
  const count = Array(26).fill(0);
  for (const c of s) {
    count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  const result = [];
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
      result.push(
        String.fromCharCode(i + "a".charCodeAt(0)),
        count[i].toString()
      );
    }
  }

  return result.join("");
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = [];
  const groups = new Map();

  for (const s of strs) {
    const signature = getSignature(s);
    if (!groups.has(signature)) {
      groups.set(signature, []);
    }
    groups.get(signature).push(s);
  }

  groups.forEach((value) => result.push(value));

  return result;
};
