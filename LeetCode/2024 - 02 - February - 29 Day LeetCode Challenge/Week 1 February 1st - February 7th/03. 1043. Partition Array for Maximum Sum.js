/*

Title: 1043. Partition Array for Maximum Sum
URL: https://leetcode.com/problems/partition-array-for-maximum-sum/
Difficulty: Medium
Topics: Array, Dynamic Programming


**Problem**


Given an integer array `arr`, partition the array into (contiguous) subarrays of length **at most** `k`. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return *the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a **32-bit** integer.*

**Example 1:**

```
Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]

```

**Example 2:**

```
Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
Output: 83

```

**Example 3:**

```
Input: arr = [1], k = 1
Output: 1

```

**Constraints:**

- `1 <= arr.length <= 500`
- `0 <= arr[i] <= 10^9`
- `1 <= k <= arr.length`



**Solution**
*/

/*
  Approach 1
  - Time complexity:    
    O(n∗k)
    
    *(where N is the size of the input array and K is the given parameter.)*    
- Space complexity:    
    O(k)
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const N = arr.length;
  const K = k + 1;

  const dp = Array(K).fill(0);

  for (let start = N - 1; start >= 0; start--) {
    let currMax = 0;
    const end = Math.min(N, start + k);

    for (let i = start; i < end; i++) {
      currMax = Math.max(currMax, arr[i]);
      dp[start % K] = Math.max(
        dp[start % K],
        dp[(i + 1) % K] + currMax * (i - start + 1)
      );
    }
  }
  return dp[0];
};
