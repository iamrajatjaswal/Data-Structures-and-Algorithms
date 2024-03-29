/*

Title: 238. Product of Array Except Self
URL: https://leetcode.com/problems/product-of-array-except-self/
Difficulty: Medium
Topics: Array, Prefix Sum


**Problem**


Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

```

**Example 2:**

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

```

**Constraints:**

- `2 <= nums.length <= 105`
- `30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

**Follow up:** Can you solve the problem in `O(1)` extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)



**Solution**

*/
/*
  Approach 1

  - Time complexity: O(n)
  
  - Space complexity: O(1)
  
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const ans = new Array(n).fill(0);
  let product = 1;
  let zeros = 0;

  for (const num of nums) {
    if (num === 0) {
      zeros++;
      continue;
    }
    product *= num;
  }

  if (zeros === 1) {
    for (let i = 0; i < n; i++) {
      ans[i] = nums[i] === 0 ? product : 0;
    }
  } else if (zeros === 0) {
    for (let i = 0; i < n; i++) {
      ans[i] = Math.floor(product / nums[i]);
    }
  }

  return ans;
};
