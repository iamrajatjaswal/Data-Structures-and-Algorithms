/*

Title: 525. Contiguous Array
URL: https://leetcode.com/problems/contiguous-array/
Difficulty: Medium
Topics: Array, Hash Table, Prefix Sum


**Problem**


Given a binary array `nums`, return *the maximum length of a contiguous subarray with an equal number of* `0` *and* `1`.

**Example 1:**

```
Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

```

**Example 2:**

```
Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

```

**Constraints:**

- `1 <= nums.length <= 105`
- `nums[i]` is either `0` or `1`.


**Solution**

*/
/*
  Approach 1

  - Time complexity: O(n)
  
  - Space complexity: O(n)
  
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const hashmap = new Map();
  let zeros = 0,
    ones = 0,
    maxLen = 0;

  hashmap.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? zeros++ : ones++;
    const diff = zeros - ones;

    if (hashmap.has(diff)) {
      maxLen = Math.max(maxLen, i - hashmap.get(diff));
    } else {
      hashmap.set(diff, i);
    }
  }

  return maxLen;
};
