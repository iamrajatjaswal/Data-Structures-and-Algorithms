/*
Given two arrays `nums1` and `nums2`.

Return the maximum dot product between **non-empty** subsequences of nums1 and nums2 with the same length.

A subsequence of a array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `[2,3,5]` is a subsequence of `[1,2,3,4,5]` while `[1,5,3]` is not).

**Example 1:**

```
Input: nums1 = [2,1,-2,5], nums2 = [3,0,-6]
Output: 18
Explanation: Take subsequence [2,-2] from nums1 and subsequence [3,-6] from nums2.
Their dot product is (2*3 + (-2)*(-6)) = 18.
```

**Example 2:**

```
Input: nums1 = [3,-2], nums2 = [2,-6,7]
Output: 21
Explanation: Take subsequence [3] from nums1 and subsequence [7] from nums2.
Their dot product is (3*7) = 21.
```

**Example 3:**

```
Input: nums1 = [-1,-1], nums2 = [1,1]
Output: -1
Explanation:Take subsequence [-1] from nums1 and subsequence [1] from nums2.
Their dot product is -1.
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 500`
- `1000 <= nums1[i], nums2[i] <= 1000`

*/

// LeetCode Solution Method
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
  var n = nums1.length;
  var m = nums2.length;
  var dp = new Array(n + 1).fill(-Infinity).map(() => new Array(m + 1).fill(-Infinity));

  for (var i = 0 ; i < n ; i++) {
      for (var j = 0 ; j < m ; j++) {
          dp[i+1][j+1] = Math.max(
              dp[i][j+1],
              dp[i+1][j],
              dp[i][j] + (nums1[i] * nums2[j]),
              nums1[i] * nums2[j]
          );
      }
  }

  return dp[n][m];
};

/*

- Explanation
    
    # **Intuition**
    
    We are trying to find the max sum of products
    
    # **Approach**
    
    We intialise a dynamic programming 2D array of size (n + 1) * (m + 1)
    
    as n is the length of nums1 and m is the length of nums2
    
    with first row and col intialised with -Infinity (Min Value).
    
    Then we try to find the max of
    
    - If we skip the number from nums 1 -> dp[i+1][j]
    - If we skip the number from nums 2 -> dp[i][j+1]
    - If we take both number and add them to the lastcouple of number we took + the product of thecurrent 2 numbers from each array -> dp[i][j] + (nums1[i] * nums2[j])
    - If we just take he product of the current2 numbers from each array -> (nums1[i] * nums2[j])
    
    The answer will be then dp[n][m]
    
- Time and Space Complexity
    - Time complexity: O(n∗m)O(n * m)*O*(*n*∗*m*)
    - Space complexity: O(n∗m)O(n * m)*O*(*n*∗*m*)

*/