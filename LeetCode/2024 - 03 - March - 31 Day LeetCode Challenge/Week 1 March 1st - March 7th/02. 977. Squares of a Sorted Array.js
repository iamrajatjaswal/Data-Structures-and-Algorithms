/*

Title: 977. Squares of a Sorted Array
URL: https://leetcode.com/problems/squares-of-a-sorted-array/
Difficulty: Easy
Topics: Array, Two Pointers, Sorting


**Problem**


Given an integer array `nums` sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

```

**Example 2:**

```
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

```

**Constraints:**

- `1 <= nums.length <= 10^4`
- `10^4 <= nums[i] <= 10^4`
- `nums` is sorted in **non-decreasing** order.

**Follow up:**

Squaring each element and sorting the new array is very trivial, could you find an

```
O(n)
```

solution using a different approach?


**Solution**

*/
/*
  Appraoch 1
*/
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function countSort(arr, exp) {
  const output = new Array(arr.length);
  const count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  const max = getMax(arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countSort(arr, exp);
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= nums[i];
  }
  radixSort(nums);
  return nums;
}

/*
  Appraoch 2
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  nums.sort((a, b) => a - b);
  return nums;
};
