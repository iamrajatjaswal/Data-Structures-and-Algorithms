/*

Title: 42. Trapping Rain Water
URL: https://leetcode.com/problems/trapping-rain-water/
Difficulty: Hard
Topics: Array, Two Pointer, Dynamic Programming, Stack, Monotonic Stack


**Problem**


Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

**Example 1:**

!https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

```

**Example 2:**

```
Input: height = [4,2,0,3,2,5]
Output: 9

```

**Constraints:**

- `n == height.length`
- `1 <= n <= 2 * 10^4`
- `0 <= height[i] <= 10^5`



**Solution**

*/
/*
  Approach 1 :: "Two Pointer Approach" :: T->O(n) : S->O(1)

  Time Complexity:

    The solution involves a single pass through the array with two pointers (i and j) moving towards each other until they meet.
    During each iteration of the loop, constant time operations are performed, such as comparisons and updates of left_max and right_max.
    Therefore, the time complexity is O(n), where n is the length of the input array height.

  Space Complexity:

      The solution uses a constant amount of extra space regardless of the size of the input array.
      It only maintains a few variables (i, j, left_max, right_max, sum), irrespective of the size of the input.
      Hence, the space complexity is O(1), indicating constant space complexity.

  In summary:

      Time complexity: O(n)
      Space complexity: O(1)
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let i = 0;
  let left_max = height[0];
  let sum = 0;
  let j = height.length - 1;
  let right_max = height[j];
  while (i < j) {
    if (left_max <= right_max) {
      sum += left_max - height[i];
      i++;
      left_max = Math.max(left_max, height[i]);
    } else {
      sum += right_max - height[j];
      j--;
      right_max = Math.max(right_max, height[j]);
    }
  }
  return sum;
};
