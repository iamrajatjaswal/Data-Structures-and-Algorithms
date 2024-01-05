/*

Title: 300. Longest Increasing Subsequence
URL: https://leetcode.com/problems/longest-increasing-subsequence/
Difficulty: Medium
Topics: Array, Binary Search, Dynamic Programming


**Problem**

Given an integer array `nums`, return *the length of the longest **strictly increasing subsequence***.

**Example 1:**

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

```

**Example 2:**

```
Input: nums = [0,1,0,3,2,3]
Output: 4

```

**Example 3:**

```
Input: nums = [7,7,7,7,7,7,7]
Output: 1

```

**Constraints:**

- `1 <= nums.length <= 2500`
- `10^4 <= nums[i] <= 10^4`

**Follow up:** Can you come up with an algorithm that runs in `O(n log(n))` time complexity?


**Solution**
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let tails = new Array(nums.length).fill(0);
  let size = 0;

  for (let x of nums) {
    let i = 0,
      j = size;
    while (i !== j) {
      let m = Math.floor((i + j) / 2);
      if (tails[m] < x) {
        i = m + 1;
      } else {
        j = m;
      }
    }
    tails[i] = x;
    if (i === size) ++size;
  }
  return size;
};
