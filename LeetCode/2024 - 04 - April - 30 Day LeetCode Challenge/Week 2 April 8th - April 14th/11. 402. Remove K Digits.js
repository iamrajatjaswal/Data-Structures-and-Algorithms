/*

Title: 402. Remove K Digits
URL: https://leetcode.com/problems/remove-k-digits/
Difficulty: Medium
Topics: String, Stack, Greedy, Monotonic Stack


**Problem**


Given string num representing a non-negative integer `num`, and an integer `k`, return *the smallest possible integer after removing* `k` *digits from* `num`.

**Example 1:**

```
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

```

**Example 2:**

```
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

```

**Example 3:**

```
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

```

**Constraints:**

- `1 <= k <= num.length <= 10^5`
- `num` consists of only digits.
- `num` does not have any leading zeros except for the zero itself.



**Solution**

*/
/*
  Approach 1 :: "Stack Approach"
*/
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stk = [];
  let ans = "";
  for (let i = 0; i < num.length; i++) {
    let c = num[i];
    while (k > 0 && stk.length > 0 && stk[stk.length - 1] > c) {
      stk.pop();
      k--;
    }
    stk.push(c);
  }
  while (k > 0) {
    stk.pop();
    k--;
  }
  for (let i = 0; i < stk.length; i++) {
    let c = stk[i];
    if (ans.length === 0 && c === "0") continue;
    ans += c;
  }
  return ans.length === 0 ? "0" : ans;
};

