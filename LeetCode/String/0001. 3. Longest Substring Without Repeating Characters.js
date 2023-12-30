/*

Title: 3. Longest Substring Without Repeating Characters
URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/
Difficulty: Medium
Topics: Hash Table, String, Sliding Window


**Problem**

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

```

**Constraints:**

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.


**Solution**
*/

/**
 * @param {string} substring
 * @param {string} char
 * @return {boolean}
 */
var isRepeating = function (substring, char) {
  for (let i = 0; i < substring.length; i++) {
    if (substring[i] === char) {
      return true;
    }
  }

  return false;
};

/*
  Method: Brute
  TC -> O(N^3)
  
  The time complexity of the provided solution is O(n^3), where "n" is the length of the input string. This is because there are two nested loops, and for each character in the outer loop, there is a nested loop that potentially iterates over all characters in the remaining part of the string.

  SC ->  O(min(n, m)), where "n" is the length of the input string, and "m" is the size of the character set (assuming constant size, such as ASCII characters).

  The space complexity is determined by the storage of the currentSubstring variable. In the worst case, the substring could be as long as the entire input string, so the space complexity is O(n). However, since the substring only contains unique characters, its size is limited by the character set size ("m"). Therefore, in scenarios where the character set size is small and constant, the space complexity is O(min(n, m)).
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringBrute = function (s) {
  if (s.length === 0) return 0;

  let maxLength = 0;
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let currentSubstring = "";
    for (let j = i; j < n; j++) {
      if (isRepeating(currentSubstring, s[j])) {
        break;
      }

      currentSubstring += s[j];
      maxLength = Math.max(maxLength, currentSubstring.length);
    }
  }

  return maxLength;
};

// const str = "abcabcbb";
// const str = "bbbbb";
const str = "pwwke1%w";
const output = lengthOfLongestSubstringBrute(str);

console.log(output);
