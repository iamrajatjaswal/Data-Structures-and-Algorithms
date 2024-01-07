/*

Title: 446. Arithmetic Slices II - Subsequence
URL: https://leetcode.com/problems/arithmetic-slices-ii-subsequence/
Difficulty: Hard
Topics: Array, Dynamic Programming


**Problem**

Given an integer array `nums`, return *the number of all the **arithmetic subsequences** of* `nums`.

A sequence of numbers is called arithmetic if it consists of **at least three elements** and if the difference between any two consecutive elements is the same.

- For example, `[1, 3, 5, 7, 9]`, `[7, 7, 7, 7]`, and `[3, -1, -5, -9]` are arithmetic sequences.
- For example, `[1, 1, 2, 5, 7]` is not an arithmetic sequence.

A **subsequence** of an array is a sequence that can be formed by removing some elements (possibly none) of the array.

- For example, `[2,5,10]` is a subsequence of `[1,2,1,**2**,4,1,**5**,**10**]`.

The test cases are generated so that the answer fits in **32-bit** integer.

**Example 1:**

```
Input: nums = [2,4,6,8,10]
Output: 7
Explanation: All arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]

```

**Example 2:**

```
Input: nums = [7,7,7,7,7]
Output: 16
Explanation: Any subsequence of this array is arithmetic.

```

**Constraints:**

- `1 <= nums.length <= 1000`
- `2^31 <= nums[i] <= 2^31 - 1`


**Solution**
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  const n = nums.length;
  const dp = Array.from(Array(n), () => Array(n).fill(0));
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const temp = nums[i];
    if (!map.has(temp)) {
      map.set(temp, []);
    }
    map.get(temp).push(i);
  }

  let totalSum = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = 2 * nums[i] - nums[j];
      if (map.has(a)) {
        for (const k of map.get(a)) {
          if (k < i) {
            dp[i][j] += dp[k][i] + 1;
          } else {
            break;
          }
        }
      }
      totalSum += dp[i][j];
    }
  }

  return totalSum;
};
