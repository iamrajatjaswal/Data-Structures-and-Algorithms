/*

Title: 930. Binary Subarrays With Sum
URL: https://leetcode.com/problems/binary-subarrays-with-sum/
Difficulty: Medium
Topics: Array, Hash Table, Sliding Window, Prefix Sum


**Problem**



Given a binary array `nums` and an integer `goal`, return *the number of non-empty **subarrays** with a sum* `goal`.

A **subarray** is a contiguous part of the array.

**Example 1:**

```
Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

```

**Example 2:**

```
Input: nums = [0,0,0,0,0], goal = 0
Output: 15

```

**Constraints:**

- `1 <= nums.length <= 3 * 104`
- `nums[i]` is either `0` or `1`.
- `0 <= goal <= nums.length`




**Solution**

*/
/*
  Approach 1
*/
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let i = 0,
    count = 0,
    res = 0;
  for (let j = 0; j < nums.length; ++j) {
    if (nums[j] === 1) {
      goal--;
      count = 0;
    }

    while (goal === 0 && i <= j) {
      goal += nums[i];
      i++;
      count++;
      if (i > j - goal + 1) break;
    }

    while (goal < 0) {
      goal += nums[i];
      i++;
    }

    res += count;
  }
  return res;
};
