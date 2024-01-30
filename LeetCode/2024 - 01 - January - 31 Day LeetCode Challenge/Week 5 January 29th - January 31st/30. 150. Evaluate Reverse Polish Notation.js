/*

Title: 150. Evaluate Reverse Polish Notation
URL: https://leetcode.com/problems/evaluate-reverse-polish-notation/
Difficulty: Medium
Topics: Array, Math, Stack


**Problem**

You are given an array of strings `tokens` that represents an arithmetic expression in a [Reverse Polish Notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

Evaluate the expression. Return *an integer that represents the value of the expression*.

**Note** that:

- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always **truncates toward zero**.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a **32-bit** integer.

**Example 1:**

```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

```

**Example 2:**

```
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

```

**Example 3:**

```
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

```

**Constraints:**

- `1 <= tokens.length <= 10^4`
- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.



**Solution**
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (const s of tokens) {
    const c = s.charAt(0);
    if (c === "+") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a + b);
    } else if (c === "-" && s.length === 1) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a - b);
    } else if (c === "*") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a * b);
    } else if (c === "/") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push((a / b) | 0); // Truncate towards zero
    } else {
      stack.push(parseInt(s));
    }
  }
  return stack[0];
};
