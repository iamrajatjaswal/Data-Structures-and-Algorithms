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

// Helper function to check if a character is repeating in a string
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
  
  The time complexity of the provided solution is O(n^3), where "n" is the length of the input 
  string. This is because there are two nested loops, and for each character in the outer loop, 
  there is a nested loop that potentially iterates over all characters in the remaining part of 
  the string.

  SC ->  O(min(n, m)), where "n" is the length of the input string, and "m" is the size of the 
  character set (assuming constant size, such as ASCII characters).

  The space complexity is determined by the storage of the currentSubstring variable. In the worst 
  case, the substring could be as long as the entire input string, so the space complexity is O
  (n). However, since the substring only contains unique characters, its size is limited by the 
  character set size ("m"). Therefore, in scenarios where the character set size is small and 
  constant, the space complexity is O(min(n, m)).
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringBrute = function (s) {
  // Check if the input string is empty
  if (s.length === 0) return 0;

  // Initialize the maximum length of the substring
  let maxLength = 0;
  let n = s.length;

  // Outer loop to iterate through each character in the string
  for (let i = 0; i < n; i++) {
    // Initialize the current substring
    let currentSubstring = "";

    // Check if the current character is repeating in the substring
    for (let j = i; j < n; j++) {
      // Check if the current character is repeating in the substring
      if (isRepeating(currentSubstring, s[j])) {
        // If repeating, break the inner loop
        break;
      }

      // Add the current character to the substring
      currentSubstring += s[j];

      // Update the maximum length if the current substring is longer
      maxLength = Math.max(maxLength, currentSubstring.length);
    }
  }

  // Return the maximum length of the substring without repeating characters
  return maxLength;
};

/*
  Method: Better
  TC -> O(n^2)
  * The outer loop runs in O(n) time, where n is the length of the input string.
  * The inner loop also runs in O(n) time in the worst case, considering each character once.
  * Within the inner loop, set operations (has and add) are considered O(1) on average, leading 
    to an average time complexity of O(n).
  * Therefore, the overall time complexity is O(n^2).

  SC -> O(min(n, m)), where n is the length of the input string, and m is the size of the 
  character set (assuming constant size, such as ASCII characters).
  * The currentSubstring variable can potentially store up to n characters in the worst case.
  * The charSet set also stores unique characters, and its size is limited by the character set 
    size, so it can be considered O(min(n, m)).
  * Therefore, the overall space complexity is O(min(n, m)).
*/
var lengthOfLongestSubstringBetter = function (s) {
  const n = s.length;
  if (n === 0) return 0;

  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    let currentSubstring = "";
    // Use a set to check for repeating characters
    let charSet = new Set();
    for (let j = i; j < n; j++) {
      if (charSet.has(s[j])) {
        break;
      }

      currentSubstring += s[j];
      charSet.add(s[j]);

      maxLength = Math.max(maxLength, currentSubstring.length);
    }
  }

  return maxLength;
};

/*
  Method: Better 2
  Approach: Sliding Window with Hash Table
  TC -> O(2N), where N is the length of the array
  Because in the worst case the right pointer will go to extreme right first and if there is some
  other element which is coming repeating then the left element will also move and cover the whole
  array that is why TC will be at max 2 * N which covering the array twice in the worst case
  
  SC -> O(N), where N is the length of the array
  Because we are using Set to store all the elements into the set in the worst case
*/
var lengthOfLongestSubstringBetter2 = function (s) {
  const n = s.length;
  if (n === 0) return 0;

  let maxLength = 0;
  // use a set to track unique characters in the current window
  let charSet = new Set();
  let left = 0; // left pointer of the sliding window
  let right = 0; // right pointer of the sliding window

  while (right < n) {
    while (charSet.has(s[right])) {
      // move the left pointer to exclude the repeating character
      charSet.delete(s[left]);
      left++;
    }

    // expand the window to include the current character
    charSet.add(s[right]);

    // update the maximum length
    maxLength = Math.max(maxLength, right - left + 1);

    right++;
  }

  return maxLength;
};
/*
  Method: Optimal
  Approach: Sliding Window with map
*/
var lengthOfLongestSubstringOptimal = function (s) {
  const n = s.length;
  if (n === 0) return 0;

  let maxLength = 0;
  let map = {};
  let left = 0;
  let right = 0;

  while (right < n) {
    if (map.hasOwnProperty(s[right]) && map[s[right]] >= left) {
      left = map[s[right]] + 1;
    }

    map[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);

    right++;
  }

  return maxLength;
};

/*
  Output
*/
// const str = "abcabcbb";
// const str = "bbbbb";
const str = "pwwke1%w";
// const output = lengthOfLongestSubstringBrute(str);
// const output = lengthOfLongestSubstringBetter(str);
// const output = lengthOfLongestSubstringBetter2(str);
const output = lengthOfLongestSubstringOptimal(str);

console.log(
  "Length of the longest substring without repeating characters is:",
  output
);
