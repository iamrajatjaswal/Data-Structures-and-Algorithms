/*

Title: 713. Subarray Product Less Than K
URL: https://leetcode.com/problems/subarray-product-less-than-k/
Difficulty: Medium
Topics: Array, Sliding Window


**Problem**


Given an array of integers `nums` and an integer `k`, return *the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than* `k`.

**Example 1:**

```
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

```

**Example 2:**

```
Input: nums = [1,2,3], k = 0
Output: 0

```

**Constraints:**

- `1 <= nums.length <= 3 * 10^4`
- `1 <= nums[i] <= 1000`
- `0 <= k <= 10^6`



**Solution**

*/
/*
  Approach 1 :: Sliding Window :: T->O(N) : S->O(1)
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  // as all numbers in the array are positive
  if (k <= 1) return 0;

  // initialize some vars
  let prod = 1,
    res = 0,
    left = 0;

  // traversing through each window
  for (let right = 0; right < nums.length; right++) {
    // store the product of elements which we see new in window
    prod *= nums[right];

    // if product is greater than the given k
    // then slide the window by doing left++ and dividing prod by nums[left]
    while (prod >= k) {
      prod /= nums[left];
      left++;
    }

    // this res will have number of subarrays(windows) possible
    /* I/p: [ 10, 5, 2, 6 ], k = 100
          
          right = left = 0;
          prod = prod * 10 = 10; 
          res = res + 0 - 0 + 1 = 1;  // subarrays - [ 10 ]
          
          right = 1;
          prod = prod * 5 = 10 * 5 = 50
          res = res + 1 - 0 + 1 = 1 + 1 - 0 + 1 = 3; // subarrays - [ 10 ], [ 5 ], [ 10, 5 ]
          
          right = 2;
          prod = prod * 2 = 50 * 2 = 100;
          prod > k;
          prod = prod / nums[left] = prod / nums[0] = 100 / 10 = 10;
          left++;
          res = res + 2 - 1 + 1 = 3 + 2 = 5; // subarrays - [ 10 ], [ 5 ], [ 10, 5 ], [ 2 ], [ 5, 2 ] 
      */
    res += right - left + 1;
  }
  return res;
};
