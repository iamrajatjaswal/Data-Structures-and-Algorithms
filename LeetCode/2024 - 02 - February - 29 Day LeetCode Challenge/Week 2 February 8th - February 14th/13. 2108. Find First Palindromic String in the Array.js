/*

Title: 2108. Find First Palindromic String in the Array
URL: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
Difficulty: Easy
Topics: Array, Two Pointers, String


**Problem**


Given an array of strings `words`, return *the first **palindromic** string in the array*. If there is no such string, return *an **empty string*** `""`.

A string is **palindromic** if it reads the same forward and backward.

**Example 1:**

```
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

```

**Example 2:**

```
Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

```

**Example 3:**

```
Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.

```

**Constraints:**

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists only of lowercase English letters.



**Solution**

*/

/*
  Approach 1

  - Time complexity:
    
    O(N.M)
    
    *(N is the number of words in the input array and M is the maximum length of a word.)*
    
    - Space complexity:
    
    O(1)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var check = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i <= j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let word of words) {
    if (check(word)) {
      return word;
    }
  }
  return "";
};

/*
  Approach 2

  - Time complexity:
    
    O(N.M)
    
    *(N is the number of words in the input array and M is the maximum length of a word.)*
    
  - Space complexity:
    
    O(1)
*/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (word === word.split("").reverse().join("")) {
      return word;
    }
  }
  return "";
};
