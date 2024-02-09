/*

Title: 368. Largest Divisible Subset
URL: https://leetcode.com/problems/largest-divisible-subset/
Difficulty: Medium
Topics: Array, Math, Dynamic Programming, Sorting


**Problem**


Given a set of **distinct** positive integers `nums`, return the largest subset `answer` such that every pair `(answer[i], answer[j])` of elements in this subset satisfies:

- `answer[i] % answer[j] == 0`, or
- `answer[j] % answer[i] == 0`

If there are multiple solutions, return any of them.

**Example 1:**

```
Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.

```

**Example 2:**

```
Input: nums = [1,2,4,8]
Output: [1,2,4,8]

```

**Constraints:**

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 10^9`
- All the integers in `nums` are **unique**.


**Solution**

*/

/*
  Approach 1
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const dp = new Array(n).fill(1);
  let maxSize = 1,
    maxIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        if (dp[i] > maxSize) {
          maxSize = dp[i];
          maxIndex = i;
        }
      }
    }
  }

  const result = [];
  let num = nums[maxIndex];
  for (let i = maxIndex; i >= 0; i--) {
    if (num % nums[i] === 0 && dp[i] === maxSize) {
      result.push(nums[i]);
      num = nums[i];
      maxSize--;
    }
  }

  return result;
};
