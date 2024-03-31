/*

Title: 2444. Count Subarrays With Fixed Bounds
URL: https://leetcode.com/problems/count-subarrays-with-fixed-bounds/
Difficulty: Hard
Topics: Array, Queue, Sliding Window, Monotonic Queue


**Problem**


You are given an integer array `nums` and two integers `minK` and `maxK`.

A **fixed-bound subarray** of `nums` is a subarray that satisfies the following conditions:

- The **minimum** value in the subarray is equal to `minK`.
- The **maximum** value in the subarray is equal to `maxK`.

Return *the **number** of fixed-bound subarrays*.

A **subarray** is a **contiguous** part of an array.

**Example 1:**

```
Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

```

**Example 2:**

```
Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.

```

**Constraints:**

- `2 <= nums.length <= 10^5`
- `1 <= nums[i], minK, maxK <= 10^6`



**Solution**

*/
/*
  Approach 1
*/
/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let res = 0,
    jbad = -1,
    jmin = -1,
    jmax = -1,
    n = nums.length;
  for (let i = 0; i < n; ++i) {
    if (nums[i] < minK || nums[i] > maxK) jbad = i;
    if (nums[i] === minK) jmin = i;
    if (nums[i] === maxK) jmax = i;
    res += Math.max(0, Math.min(jmin, jmax) - jbad);
  }
  return res;
};
