/*

Title: 231. Power of Two
URL: https://leetcode.com/problems/power-of-two/
Difficulty: Easy
Topics: Math, Bit Manipulation, Recursion


**Problem**


Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

**Example 1:**

```
Input: n = 1
Output: true
Explanation:20 = 1

```

**Example 2:**

```
Input: n = 16
Output: true
Explanation:24 = 16

```

**Example 3:**

```
Input: n = 3
Output: false

```

**Constraints:**

- `2^31 <= n <= 2^31 - 1`

**Follow up:**

Could you solve it without loops/recursion?



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
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  for (let i = 0; i < 31; i++) {
    let ans = Math.pow(2, i);
    if (ans === n) {
      return true;
    }
  }
  return false;
};
