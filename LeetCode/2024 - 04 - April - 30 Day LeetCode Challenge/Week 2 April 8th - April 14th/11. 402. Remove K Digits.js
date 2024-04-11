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
  Approach 1 :: "Stack Approach" :: T->O(n) : S->O(n)

  - Time complexity: O(n)

  - Space complexity:O(1)only returning string take space. we have to mandatory return it so it can not be counted as extra space
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

/*
  Approach 2 :: "Without Stack"
*/
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let s = num[0];
  for (let i = 1; i < num.length; ++i) {
    // if removal attempts are left (k > 0)
    // and num[i] is less than the last element of s
    // then remove the last element of s and come back to num[i] again
    if (k > 0 && s.length > 0 && num[i] < s[s.length - 1]) {
      s = s.slice(0, -1);
      k--;
      i--;
      continue;
    } else s += num[i];
  }
  // if removal attempts are left, remove characters at the end
  // because at this point s contains characters in ascending order
  // so preferable to remove larger characters at the end
  while (k > 0 && s.length > 0) {
    s = s.slice(0, -1);
    k--;
  }

  while (s[0] === "0") {
    // remove trailing zeroes if any
    s = s.substr(1);
  }

  if (s.length === 0) s = "0"; // if final s is empty then indicates 0
  return s;
};
