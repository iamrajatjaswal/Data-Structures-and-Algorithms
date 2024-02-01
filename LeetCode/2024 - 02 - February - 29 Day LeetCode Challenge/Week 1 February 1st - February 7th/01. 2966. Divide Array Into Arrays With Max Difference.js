/*

Title: 2966. Divide Array Into Arrays With Max Difference
URL: https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/
Difficulty: Medium
Topics: Array, Greedy, Sorting


**Problem**


You are given an integer array `nums` of size `n` and a positive integer `k`.

Divide the array into one or more arrays of size `3` satisfying the following conditions:

- **Each** element of `nums` should be in **exactly** one array.
- The difference between **any** two elements in one array is less than or equal to `k`.

Return *a* **2D** *array containing all the 
arrays. If it is impossible to satisfy the conditions, return an empty 
array. And if there are multiple answers, return **any** of them.*

**Example 1:**

```
Input: nums = [1,3,4,8,7,9,3,5,1], k = 2
Output: [[1,1,3],[3,4,5],[7,8,9]]
Explanation: We can divide the array into the following arrays: [1,1,3], [3,4,5] and [7,8,9].
The difference between any two elements in each array is less than or equal to 2.
Note that the order of elements is not important.

```

**Example 2:**

```
Input: nums = [1,3,3,2,7,3], k = 3
Output: []
Explanation: It is not possible to divide the array satisfying all the conditions.

```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 10^5`
- `n` is a multiple of `3`.
- `1 <= nums[i] <= 10^5`
- `1 <= k <= 10^5`



**Solution**
*/

/*
  Approach 
  TC : O(nlogn)
  SC : O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  const size = nums.length;
  if (size % 3 !== 0) return [];

  nums.sort((a, b) => a - b);

  const result = [];
  let groupIndex = 0;
  for (let i = 0; i < size; i += 3) {
    if (i + 2 < size && nums[i + 2] - nums[i] <= k) {
      result.push([nums[i], nums[i + 1], nums[i + 2]]);
      groupIndex++;
    } else {
      return [];
    }
  }
  return result;
};
