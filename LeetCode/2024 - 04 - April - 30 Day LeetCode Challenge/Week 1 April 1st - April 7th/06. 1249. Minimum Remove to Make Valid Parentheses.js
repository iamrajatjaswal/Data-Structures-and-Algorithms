/*

Title: 1249. Minimum Remove to Make Valid Parentheses
URL: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
Difficulty: Medium
Topics: String, Stack


**Problem**


Given a string s of `'('` , `')'` and lowercase English characters.

Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting *parentheses string* is valid and return **any** valid string.

Formally, a *parentheses string* is valid if and only if:

- It is the empty string, contains only lowercase characters, or
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
- It can be written as `(A)`, where `A` is a valid string.

**Example 1:**

```
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

```

**Example 2:**

```
Input: s = "a)b(c)d"
Output: "ab(c)d"

```

**Example 3:**

```
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s[i]` is either`'('` , `')'`, or lowercase English letter`.`



**Solution**

*/
/*
  Approach 1 :: "Iterating the string from beginning" :: T->O(N) : S->O(1)

  - **Time Complexity** is O(n+n+n) = **O(n)** for each 3 steps

  - **Space Complexity** is **O(1)** , No extra space taken excluding result string.  
*/
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let n = s.length;
  let res = "";

  let cnt = 0;
  // iterating from beginning
  for (let i = 0; i < s.length; ++i) {
    // if we find an open parenthesis increase the cnt
    if (s[i] === "(") ++cnt;
    // if we found a close parenthesis
    // check if cnt == 0, that means we have no earlier open parenthesis,
    // therefore replace that index by '#'
    else if (s[i] === ")") {
      if (cnt === 0) s = s.substring(0, i) + "#" + s.substring(i + 1);
      // else decrease the cnt because a valid pair is found
      else --cnt;
    }
  }

  cnt = 0;
  // iterating from the end
  for (let i = n - 1; i >= 0; --i) {
    // if we find a close parenthesis increase the cnt
    if (s[i] === ")") ++cnt;
    // if we found an open parenthesis
    // check if cnt == 0, that means we have no earlier close parenthesis,
    // therefore replace that index by '#'
    else if (s[i] === "(") {
      if (cnt === 0) s = s.substring(0, i) + "#" + s.substring(i + 1);
      // else decrease the cnt because a valid pair is found
      else --cnt;
    }
  }

  // making the resultant string by excluding '#'
  for (let i = 0; i < s.length; ++i) {
    if (s[i] !== "#") res += s[i];
  }

  return res;
};

/*
  Approach 2 :: "Using Stack" :: T->O(N) : S->O(N)
*/
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  let res = "";

  for (let i = 0; i < s.length; ++i) {
    // if we find an open parenthesis push its index to stack
    if (s[i] === "(") stack.push(i);
    // if we find a close parenthesis
    else if (s[i] === ")") {
      // if stack is empty then we need to remove that index from string
      // replacing it with '#' for our convenience
      if (stack.length === 0) s = s.substring(0, i) + "#" + s.substring(i + 1);
      // if there is an open parenthesis then remove that from the stack
      else stack.pop();
    }
  }

  // now, if stack is not empty that means it has open parenthesis
  // which have no closing parenthesis.
  // so we have to replace that index of string with '#' for our convenience
  while (stack.length > 0) {
    s =
      s.substring(0, stack[stack.length - 1]) +
      "#" +
      s.substring(stack[stack.length - 1] + 1);
    stack.pop();
  }

  // making the resultant string by excluding '#'
  for (let i = 0; i < s.length; ++i) {
    if (s[i] !== "#") res += s[i];
  }

  return res;
};
