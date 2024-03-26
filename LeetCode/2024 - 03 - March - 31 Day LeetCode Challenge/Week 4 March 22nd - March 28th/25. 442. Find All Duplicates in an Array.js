/*

Title: 442. Find All Duplicates in an Array
URL: https://leetcode.com/problems/find-all-duplicates-in-an-array/
Difficulty: Medium
Topics: Array, Hash Table


**Problem**


Given an integer array `nums` of length `n` where all the integers of `nums` are in the range `[1, n]` and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

You must write an algorithm that runs in `O(n)` time and uses only constant extra space.

**Example 1:**

```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

```

**Example 2:**

```
Input: nums = [1,1,2]
Output: [1]

```

**Example 3:**

```
Input: nums = [1]
Output: []

```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 10^5`
- `1 <= nums[i] <= n`
- Each element in `nums` appears **once** or **twice**.s



**Solution**

*/
/*
  Approach 1

  - Time Complexity: The time complexity of this approach is O(n), where n is the number of elements in the input array nums. We iterate through the array once.

  - Space Complexity: The space complexity is O(1) for the std::bitset of size 100001, and O(k) for the result vector, where k is the number of duplicate elements found in the input array nums. Thus, the overall space complexity is O(k).
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const seen = new Set();
  const duplicates = [];

  for (const num of nums) {
    if (seen.has(num)) {
      duplicates.push(num);
    } else {
      seen.add(num);
    }
  }

  return duplicates;
};
