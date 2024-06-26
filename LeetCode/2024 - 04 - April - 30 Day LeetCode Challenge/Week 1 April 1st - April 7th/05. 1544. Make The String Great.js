/*

Title: 1544. Make The String Great
URL: https://leetcode.com/problems/make-the-string-great/
Difficulty: Easy
Topics: String, Stack


**Problem**


A string is a **valid parentheses string** (denoted **VPS**) if it meets one of the following:

- It is an empty string `""`, or a single character not equal to `"("` or `")"`,
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are **VPS**'s, or
- It can be written as `(A)`, where `A` is a **VPS**.

We can similarly define the **nesting depth** `depth(S)` of any VPS `S` as follows:

- `depth("") = 0`
- `depth(C) = 0`, where `C` is a string with a single character not equal to `"("` or `")"`.
- `depth(A + B) = max(depth(A), depth(B))`, where `A` and `B` are **VPS**'s.
- `depth("(" + A + ")") = 1 + depth(A)`, where `A` is a **VPS**.

For example, `""`, `"()()"`, and `"()(()())"` are **VPS**'s (with nesting depths 0, 1, and 2), and `")("` and `"(()"` are not **VPS**'s.

Given a **VPS** represented as string `s`, return *the **nesting depth** of* `s`.

**Example 1:**

```
Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.

```

**Example 2:**

```
Input: s = "(1)+((2))+(((3)))"
Output: 3

```

**Constraints:**

- `1 <= s.length <= 100`
- `s` consists of digits `0-9` and characters `'+'`, `'-'`, `'*'`, `'/'`, `'('`, and `')'`.
- It is guaranteed that parentheses expression `s` is a **VPS**.



**Solution**

*/
/*
  Approach 1 :: "parentheses balancing" or "stack-based approach” :: T->O(N) : S->O(1)

  **Time complexity:**

    O(n), where n is the length of the input string `s`. We traverse the entire string once.

  **Space complexity:**

    O(1), as we only use a constant amount of extra space for variables `count` and `max_num`.
    
*/
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let count = 0;
  let maxNum = 0;
  for (let c of s) {
    if (c === "(") {
      count++;
      if (maxNum < count) maxNum = count;
    } else if (c === ")") {
      count--;
    }
  }
  return maxNum;
};
