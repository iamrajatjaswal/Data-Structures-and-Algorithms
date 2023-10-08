/*
Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.

**Example 1:**

```
Input: nums = [3,2,3]
Output: [3]

```

**Example 2:**

```
Input: nums = [1]
Output: [1]

```

**Example 3:**

```
Input: nums = [1,2]
Output: [1,2]

```

**Constraints:**

- `1 <= nums.length <= 5 * 104`
- `109 <= nums[i] <= 109`

Follow up: Could you solve the problem in linear time and in O(1) space?

*/


// My Solution method
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const result = [];
  let countElems = {};
  const countMoreThanRequiredValue = nums.length/3;

  for (let i = 0; i < nums.length; i++) {
      countElems[nums[i]] = (countElems[nums[i]] || 0) + 1;
  }
  

  for (let i in countElems) {
      if (countElems[i] > countMoreThanRequiredValue) {
          result.push(i);
      }
  }

  return result;
};


// Boyer-Moore Voting Algorithm

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) return nums;

  let num1 = nums[0], num2 = 0;
  let count1 = 1, count2 = 0;

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === num1) {
          count1++;
      } else if (nums[i] === num2) {
          count2++;
      } else if (count1 === 0) {
          num1 = nums[i];
          count1 = 1;
      } else if (count2 === 0) {
          num2 = nums[i];
          count2 = 1;
      } else {
          count1--;
          count2--;
      }
  }

  count1 = 0;
  count2 = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] === num1) {
          count1++;
      } else if (nums[i] === num2) {
          count2++;
      }
  }

  const res = [];

  if (count1 > nums.length / 3) {
      res.push(num1);
  }

  if (count2 > nums.length / 3) {
      res.push(num2);
  }

  return res;
};