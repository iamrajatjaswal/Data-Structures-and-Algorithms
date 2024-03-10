/*

Title: 349. Intersection of Two Arrays
URL: https://leetcode.com/problems/intersection-of-two-arrays/
Difficulty: Easy
Topics: Array, Hash Table, Two Pointers, Binary Search, Sorting


**Problem**


Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`



**Solution**

*/
/*
  Approach 1

  - Time complexity: Since we iterate through both arrays once, the time complexity is O(n1 + n2), where n1 is the size of `nums1` and n2 is the size of `nums2`.
  
  - Space complexity: We use extra space to store the counts of elements from `nums1`, so the space complexity is O(n1), where n1 is the size of `nums1`.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const mp = {};
  for (const num of nums1) {
    mp[num] = (mp[num] || 0) + 1;
  }

  const result = [];
  for (const num of nums2) {
    if (mp[num]) {
      result.push(num);
      delete mp[num];
    }
  }

  return result;
};
