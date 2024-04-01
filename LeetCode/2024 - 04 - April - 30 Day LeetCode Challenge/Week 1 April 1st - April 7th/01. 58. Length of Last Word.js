/*

Title: 58. Length of Last Word
URL: https://leetcode.com/problems/length-of-last-word/
Difficulty: Easy
Topics: String


**Problem**


Given a string `s` consisting of words and spaces, return *the length of the **last** word in the string.* A **word** is a maximal substring consisting of non-space characters only.

**Example 1:**

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

```

**Example 2:**

```
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

```

**Example 3:**

```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

```

**Constraints:**

- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.



**Solution**

*/
/*
  Appraoch 1
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0; // Variable to store the length of the last word
  let space = false; // Boolean variable to track if a space is encountered

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // If a space character is encountered
      space = true;
    } else if (s[i] !== " " && space) {
      // If a non-space character is encountered after a space
      count = 1; // Start counting a new word
      space = false;
    } else {
      count++; // Increment the count for non-space characters
    }
  }

  return count;
};
