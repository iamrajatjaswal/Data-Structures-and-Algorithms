/*

Title: 2962. Count Subarrays Where Max Element Appears at Least K Times
URL: https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/
Difficulty: Medium
Topics: Array, Sliding Window


**Problem**


You are given an integer array `nums` and a **positive** integer `k`.

Return *the number of subarrays where the **maximum** element of* `nums` *appears **at least*** `k` *times in that subarray.*

A **subarray** is a contiguous sequence of elements within an array.

**Example 1:**

```
Input: nums = [1,3,2,3,3], k = 2
Output: 6
Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].

```

**Example 2:**

```
Input: nums = [1,4,2,1], k = 3
Output: 0
Explanation: No subarray contains the element 4 at least 3 times.

```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`
- `1 <= k <= 10^5`



**Solution**

*/
/*
  Approach 1 :: Sliding Window :: T->O(N) : S->O(1)

  - *Time complexity:*
    
    O(n)
    
  - *Space complexity:*
    
    O(1)  
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  let n = nums.length; // Number of elements in the input array
  let maxi = Math.max(...nums); // Maximum value in the array
  let i = 0,
    j = 0,
    cnt = 0,
    ans = 0; // Initialize pointers and counters

  for (j = 0; j < n; j++) {
    if (nums[j] === maxi) {
      cnt++; // Increment count when the element is equal to the maximum value
    }
    if (cnt >= k) {
      // Slide the window from the left side and count subarrays containing the maximum element
      for (; cnt >= k; i++) {
        ans += n - j; // Count subarrays where maximum element is from j to n-1
        if (nums[i] === maxi) {
          cnt--; // Decrease count as the window slides
        }
      }
    }
  }
  return ans; // Return the total count of subarrays
};
