/*

Title: 201. Bitwise AND of Numbers Range
URL: https://leetcode.com/problems/bitwise-and-of-numbers-range/
Difficulty: Medium
Topics: Bit Manipulation


**Problem**


Given two integers `left` and `right` that represent the range `[left, right]`, return *the bitwise AND of all numbers in this range, inclusive*.

**Example 1:**

```
Input: left = 5, right = 7
Output: 4

```

**Example 2:**

```
Input: left = 0, right = 0
Output: 0

```

**Example 3:**

```
Input: left = 1, right = 2147483647
Output: 0

```

**Constraints:**

- `0 <= left <= right <= 2^31 - 1`



**Solution**

*/
/*
  Approach 1

  - Time complexity:
    
    O(1)
    
  - Space complexity:
    
    O(1)
*/
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  let cnt = 0;
  while (left !== right) {
    left >>= 1;
    right >>= 1;
    cnt++;
  }
  return left << cnt;
};
