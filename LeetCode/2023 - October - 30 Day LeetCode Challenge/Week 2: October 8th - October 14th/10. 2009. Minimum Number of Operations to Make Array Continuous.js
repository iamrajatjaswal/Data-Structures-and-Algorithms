/*

You are given an integer array `nums`. In one operation, you can replace **any** element in `nums` with **any** integer.

`nums` is considered **continuous** if both of the following conditions are fulfilled:

- All elements in `nums` are **unique**.
- The difference between the **maximum** element and the **minimum** element in `nums` equals `nums.length - 1`.

For example, `nums = [4, 2, 5, 3]` is **continuous**, but `nums = [1, 2, 3, 5, 6]` is **not continuous**.

Return *the **minimum** number of operations to make* `nums` ***continuous***.

**Example 1:**

```
Input: nums = [4,2,5,3]
Output: 0
Explanation: nums is already continuous.

```

**Example 2:**

```
Input: nums = [1,2,3,5,6]
Output: 1
Explanation: One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous.

```

**Example 3:**

```
Input: nums = [1,10,100,1000]
Output: 3
Explanation: One possible solution is to:
- Change the second element to 2.
- Change the third element to 3.
- Change the fourth element to 4.
The resulting array is [1,2,3,4], which is continuous.

```

**Constraints:**

- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 109`

*/

// Solution:
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  var n = nums.length, max = 0, repeats = 0;
  nums.sort((a,b) => a-b);

  for(var l=0, r=0; r<nums.length; ++r) {
      while(nums[r] === nums[r+1]) ++r, ++repeats; // Skip repeats in front

      while(nums[r] - nums[l] >= n) { // Skip element with diff more than (nums.length-1)
          while(nums[l] === nums[l+1]) ++l, --repeats; // Skip repeats in back
          ++l;
      }
      
      // Get max no of elements with difference (nums.length-1) without repeats
      max = Math.max(max, r - l - repeats);
  }

  return n - max - 1;
};