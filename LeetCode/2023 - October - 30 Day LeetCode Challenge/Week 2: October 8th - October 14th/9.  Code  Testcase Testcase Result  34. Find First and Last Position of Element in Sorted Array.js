/*

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

```

**Example 3:**

```
Input: nums = [], target = 0
Output: [-1,-1]

```

**Constraints:**

- `0 <= nums.length <= 105`
- `109 <= nums[i] <= 109`
- `nums` is a non-decreasing array.
- `109 <= target <= 109`

*/

// Approach 1  :: Linear Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let result = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {            
          break;
      }

      if (nums[i] === target && (nums[i-1] !== target || i === -1 )) {
          result[0] = i;
      }

      if (nums[i] === target && (nums[i+1] !== target || i === nums.length - 1 )) {
          result[1] = i;
      }
  }

  return result;
};

// Approach 2   :: Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const findLeft = (nums, target) => {
      let left = 0;
      let right = nums.length - 1;
      let index = -1;

      while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (nums[mid] === target) {
              index = mid;
              right = mid - 1;
          } else if (nums[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }

      return index;
  };

  const findRight = (nums, target) => {
      let left = 0;
      let right = nums.length - 1;
      let index = -1;

      while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (nums[mid] === target) {
              index = mid;
              left = mid + 1;
          } else if (nums[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }

      return index;
  };

  const leftIndex = findLeft(nums, target);
  const rightIndex = findRight(nums, target);

  if (leftIndex <= rightIndex) {
      return [leftIndex, rightIndex];
  } else {
      return [-1, -1];
  }
};