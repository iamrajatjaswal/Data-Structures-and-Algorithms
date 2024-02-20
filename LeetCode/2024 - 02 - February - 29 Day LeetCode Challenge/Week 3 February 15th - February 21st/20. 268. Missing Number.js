/*

Title: 268. Missing Number
URL: https://leetcode.com/problems/missing-number/
Difficulty: Easy
Topics: Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting


**Problem**


Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return *the only number in the range that is missing from the array.*

**Example 1:**

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

```

**Example 2:**

```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

```

**Example 3:**

```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 10^4`
- `0 <= nums[i] <= n`
- All the numbers of `nums` are **unique**.

**Follow up:** Could you implement a solution using only `O(1)` extra space complexity and `O(n)` runtime complexity?



**Solution**

*/

/*
  Approach 1
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length;
  let v = new Array(n+1).fill(-1);
  for(let i = 0; i < nums.length; i++) {
      v[nums[i]] = nums[i];
  }
  for(let i = 0; i < v.length; i++) {
      if(v[i] == -1) return i;
  }
  return 0;
};

/*
  Approach 2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  let ans = 0;
  for (let i = 1; i <= n; i++) {
      ans ^= i;
  }
  for (let i = 0; i < nums.length; i++) {
      ans ^= nums[i];
  }
  return ans;
};
