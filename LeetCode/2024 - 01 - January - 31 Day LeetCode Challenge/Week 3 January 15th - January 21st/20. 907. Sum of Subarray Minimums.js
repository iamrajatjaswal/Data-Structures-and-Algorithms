/*

Title: 907. Sum of Subarray Minimums
URL: https://leetcode.com/problems/sum-of-subarray-minimums/
Difficulty: Medium
Topics: Array, Dynamic Programming, Stack, Monotonic Stack


**Problem**

Given an array of integers arr, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`. Since the answer may be large, return the answer **modulo** `109 + 7`.

**Example 1:**

```
Input: arr = [3,1,2,4]
Output: 17
Explanation:
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

```

**Example 2:**

```
Input: arr = [11,81,94,43,3]
Output: 444

```

**Constraints:**

- `1 <= arr.length <= 3 * 10^4`
- `1 <= arr[i] <= 3 * 10^4`



**Solution**
*/

var sumSubarrayMins = function (arr) {
  const length = arr.length;
  const left = new Array(length).fill(-1);
  const right = new Array(length).fill(length);
  const stack = [];

  for (let i = 0; i < length; ++i) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      left[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  stack.length = 0;

  for (let i = length - 1; i >= 0; --i) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      right[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  let sum = 0;

  for (let i = 0; i < length; ++i) {
    sum += ((i - left[i]) * (right[i] - i) * arr[i]) % (1e9 + 7);
    sum %= 1e9 + 7;
  }

  return sum;
};
