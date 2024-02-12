/*

Title: 169. Majority Element
URL: https://leetcode.com/problems/majority-element/
Difficulty: Easy
Topics: Array, Hash Table, Divide and Conquer, Sorting, Counting


**Problem**

Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**

```
Input: nums = [3,2,3]
Output: 3

```

**Example 2:**

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2

```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 5 * 104`
- `109 <= nums[i] <= 109`

**Follow-up:**

Could you solve the problem in linear time and in `O(1)` space?


**Solution**

*/

/*
  Approach 1    
  
  - Time complexity:
    
    O(n)
    
  - Space complexity:
    
    O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let n = nums.length / 2;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let ans = 0;

  for (let [key, value] of map.entries()) {
    if (value > n) {
      ans = key;
      break;
    }
  }

  return ans;
};

/*
  Approach 2

  - Time complexity:
    
    O(n)
    
  - Space complexity:
    
    O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let element = 0;

  for (let num of nums) {
    if (count === 0) {
      element = num;
      count = 1;
    } else if (element === num) {
      count++;
    } else {
      count--;
    }
  }

  return element;
};
