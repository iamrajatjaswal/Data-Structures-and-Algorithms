/*

Title: 1758. Minimum Changes To Make Alternating Binary String
URL: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
Difficulty: Easy
Topics: String


**Problem**

You are given a string `s` consisting only of the characters `'0'` and `'1'`. In one operation, you can change any `'0'` to `'1'` or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string `"010"` is alternating, while the string `"0100"` is not.

Return *the **minimum** number of operations needed to make* `s` *alternating*.

**Example 1:**

```
Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.

```

**Example 2:**

```
Input: s = "10"
Output: 0
Explanation: s is already alternating.

```

**Example 3:**

```
Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".

```

**Constraints:**

- `1 <= s.length <= 104`
- `s[i]` is either `'0'` or `'1'`.


**Solution**
*/

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  // Count flips needed to make the string same as 'next'
  const countFlips = (str, nextChar) => {
    let count = 0;
    for (const char of str) {
      if (nextChar !== char) {
        count++;
      }
      nextChar = nextChar === "0" ? "1" : "0";
    }
    return count;
  };

  // Calculate minimum operations to make the string alternating
  const result0 = countFlips(s, "0");
  const result1 = countFlips(s, "1");
  return Math.min(result0, result1);
};
