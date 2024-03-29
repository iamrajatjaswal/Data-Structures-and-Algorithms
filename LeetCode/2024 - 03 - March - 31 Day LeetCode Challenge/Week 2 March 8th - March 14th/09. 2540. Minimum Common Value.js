/*

Title: 2540. Minimum Common Value
URL: https://leetcode.com/problems/minimum-common-value/
Difficulty: Easy
Topics: Array, Hash Table, Two Pointers, Binary Search


**Problem**


Given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, return *the **minimum integer common** to both arrays*. If there is no common integer amongst `nums1` and `nums2`, return `-1`.

Note that an integer is said to be **common** to `nums1` and `nums2` if both arrays have **at least one** occurrence of that integer.

**Example 1:**

```
Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.

```

**Example 2:**

```
Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 10^5`
- `1 <= nums1[i], nums2[j] <= 10^9`
- Both `nums1` and `nums2` are sorted in **non-decreasing** order.



**Solution**

*/
/*
  Approach 1

  The time complexity of this solution is O(n + m), where n is the length of the nums1 array and m is the length of the nums2 array. This is because in the worst case scenario, you iterate through both arrays once.

  The space complexity is O(1) because the only additional space used is for a few variables (common, i, and j), which do not depend on the size of the input arrays.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let common = Infinity;
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      common = nums1[i];
      break;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return common !== Infinity ? common : -1;
};
