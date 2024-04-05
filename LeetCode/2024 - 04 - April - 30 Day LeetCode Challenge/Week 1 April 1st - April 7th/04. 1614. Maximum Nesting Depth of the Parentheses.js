/*

Title: 1614. Maximum Nesting Depth of the Parentheses
URL: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
Difficulty: Easy
Topics: String, Stack


**Problem**


Given a string `s` of lower and upper case English letters.

A good string is a string which doesn't have **two adjacent characters** `s[i]` and `s[i + 1]` where:

- `0 <= i <= s.length - 2`
- `s[i]` is a lower-case letter and `s[i + 1]` is the same letter but in upper-case or **vice-versa**.

To make the string good, you can choose **two adjacent** characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return *the string* after making it good. The answer is guaranteed to be unique under the given constraints.

**Notice** that an empty string is also good.

**Example 1:**

```
Input: s = "leEeetcode"
Output: "leetcode"
Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

```

**Example 2:**

```
Input: s = "abBAcC"
Output: ""
Explanation: We have many possible scenarios, and all lead to the same answer. For example:
"abBAcC" --> "aAcC" --> "cC" --> ""
"abBAcC" --> "abBA" --> "aA" --> ""

```

**Example 3:**

```
Input: s = "s"
Output: "s"

```

**Constraints:**

- `1 <= s.length <= 100`
- `s` contains only lower and upper case English letters.



**Solution**

*/
/*
  Approach 1 :: "stack-based approach” :: T->O(N) : S->O(N)
  
  **Time complexity:**

  We iterate through each character of the input string once, resulting in a time complexity of `O(n)`, where `n` is the length of the string.

  **Space complexity:**

  We utilize a stack to store characters. In the worst-case scenario, we might end up storing all characters in the stack. Therefore, the space complexity is `O(n)`, where `n` is the length of the string.

*/
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];

  for (const char of s) {
    if (
      stack.length > 0 &&
      Math.abs(char.charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
