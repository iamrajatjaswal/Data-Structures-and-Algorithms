/*

Title: 1877. Minimize Maximum Pair Sum in Array
URL: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
Difficulty: Medium
Topics: Array, Two Pointers, Greedy, Sorting


**Problem**

The **pair sum** of a pair `(a,b)` is equal to `a + b`. The **maximum pair sum** is the largest **pair sum** in a list of pairs.

- For example, if we have pairs `(1,5)`, `(2,3)`, and `(4,4)`, the **maximum pair sum** would be `max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8`.

Given an array `nums` of **even** length `n`, pair up the elements of `nums` into `n / 2` pairs such that:

- Each element of `nums` is in **exactly one** pair, and
- The **maximum pair sum** is **minimized**.

Return *the minimized **maximum pair sum** after optimally pairing up the elements*.

**Example 1:**

```
Input: nums = [3,5,2,3]
Output: 7
Explanation: The elements can be paired up into pairs (3,3) and (5,2).
The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.

```

**Example 2:**

```
Input: nums = [3,5,4,2,4,6]
Output: 8
Explanation: The elements can be paired up into pairs (3,5), (4,4), and (6,2).
The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.

```

**Constraints:**

- `n == nums.length`
- `2 <= n <= 105`
- `n` is **even**.
- `1 <= nums[i] <= 105`


**Solution**
*/

// 1st Method Greedy / Two Pointers
var minPairSum = function(nums) {
  // Step 1: Sort the array in ascending order
  nums.sort((a, b) => a - b);

  // Step 2: Initialize pointers at the start and end of the sorted array
  let left = 0, right = nums.length - 1;

  // Step 3: Initialize a variable to store the minimum of the maximum pair sum
  let minMaxPairSum = Number.MIN_SAFE_INTEGER;

  // Step 4: Iterate until the pointers meet
  while (left < right) {
      // Step 5: Calculate the current pair sum
      const currentPairSum = nums[left] + nums[right];

      // Step 6: Update the minimum of the maximum pair sum
      minMaxPairSum = Math.max(minMaxPairSum, currentPairSum);

      // Step 7: Move the pointers towards the center
      left++;
      right--;
  }

  // Step 8: Return the minimum of the maximum pair sum
  return minMaxPairSum;
};


// 2nd Method :- Two-pointer approach with frequency counting.
var minPairSum = function(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER; // Variable to store the minimized maximum pair sum
  let minNum = Number.MAX_SAFE_INTEGER; // Variable to store the minimum number in the array
  let maxNum = Number.MIN_SAFE_INTEGER; // Variable to store the maximum number in the array

  const frequency = new Array(100001).fill(0); // Array to store the frequency of each number in the array

  // Iterate through the array to populate frequency array and find min and max numbers
  nums.forEach(num => {
      frequency[num]++;
      minNum = Math.min(minNum, num);
      maxNum = Math.max(maxNum, num);
  });

  // Initialize pointers for two numbers to form pairs
  let low = minNum;
  let high = maxNum;

  // Iterate while low pointer is less than or equal to high pointer
  while (low <= high) {
      // If frequency of the number at low pointer is zero, move low pointer to the right
      if (frequency[low] === 0) {
          low++;
      }
      // If frequency of the number at high pointer is zero, move high pointer to the left
      else if (frequency[high] === 0) {
          high--;
      }
      // Both low and high pointers point to valid numbers
      else {
          // Calculate the sum of the pair at the current pointers
          let currentPairSum = low + high;
          // Update maxSum if the current pair sum is greater
          maxSum = Math.max(maxSum, currentPairSum);
          // Decrease the frequency of the numbers at low and high pointers
          frequency[low]--;
          frequency[high]--;
      }
  }

  return maxSum; // Return the minimized maximum pair sum
};