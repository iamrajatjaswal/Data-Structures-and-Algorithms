/*

Title: 992. Subarrays with K Different Integers
URL: https://leetcode.com/problems/subarrays-with-k-different-integers/
Difficulty: Hard
Topics: Array, Hash Table, Sliding Window, Counting


**Problem**


Given an integer array `nums` and an integer `k`, return *the number of **good subarrays** of* `nums`.

A **good array** is an array where the number of different integers in that array is exactly `k`.

- For example, `[1,2,3,1,2]` has `3` different integers: `1`, `2`, and `3`.

A **subarray** is a **contiguous** part of an array.

**Example 1:**

```
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

```

**Example 2:**

```
Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

```

**Constraints:**

- `1 <= nums.length <= 2 * 10^4`
- `1 <= nums[i], k <= nums.length`



**Solution**

*/
/*
  Approach 1
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  const sub_with_max_element_k = subarrayWithAtmostK(nums, k);
  const reduced_sub_with_max_k = subarrayWithAtmostK(nums, k - 1);
  return sub_with_max_element_k - reduced_sub_with_max_k;
};

var subarrayWithAtmostK = function (nums, k) {
  const map = new Map();
  let left = 0,
    right = 0,
    ans = 0;
  while (right < nums.length) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);
    while (map.size > k) {
      map.set(nums[left], map.get(nums[left]) - 1);
      if (map.get(nums[left]) === 0) map.delete(nums[left]);
      left++;
    }
    ans += right - left + 1; // basically the size of subarray;
    right++;
  }
  return ans;
};
