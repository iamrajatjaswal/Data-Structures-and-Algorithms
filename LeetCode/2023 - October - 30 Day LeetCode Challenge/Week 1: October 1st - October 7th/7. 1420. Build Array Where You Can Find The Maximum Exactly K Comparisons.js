/*
You are given three integers `n`, `m` and `k`. Consider the following algorithm to find the maximum element of an array of positive integers:

!https://assets.leetcode.com/uploads/2020/04/02/e.png

You should build the array arr which has the following properties:

- `arr` has exactly `n` integers.
- `1 <= arr[i] <= m` where `(0 <= i < n)`.
- After applying the mentioned algorithm to `arr`, the value `search_cost` is equal to `k`.

Return *the number of ways* to build the array `arr` under the mentioned conditions. As the answer may grow large, the answer **must be** computed modulo `109 + 7`.

**Example 1:**

```
Input: n = 2, m = 3, k = 1
Output: 6
Explanation: The possible arrays are [1, 1], [2, 1], [2, 2], [3, 1], [3, 2] [3, 3]

```

**Example 2:**

```
Input: n = 5, m = 2, k = 3
Output: 0
Explanation: There are no possible arrays that satisify the mentioned conditions.

```

**Example 3:**

```
Input: n = 9, m = 1, k = 1
Output: 1
Explanation: The only possible array is [1, 1, 1, 1, 1, 1, 1, 1, 1]

```

**Constraints:**

- `1 <= n <= 50`
- `1 <= m <= 100`
- `0 <= k <= n`
*/

// LeetCode Solution Method
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
  const MOD = 1000000007;
  let dp = new Array(n + 1).fill(null).map(() =>
      new Array(m + 1).fill(null).map(() =>
          new Array(k + 1).fill(0)
      )
  );

  for (let i = 1; i <= m; i++) {
      dp[1][i][1] = 1;
  }

  for (let len = 2; len <= n; len++) {
      for (let maxVal = 1; maxVal <= m; maxVal++) {
          for (let cost = 1; cost <= k; cost++) {
              let sum = 0;
              for (let i = 1; i < maxVal; i++) {
                  sum = (sum + dp[len - 1][i][cost - 1]) % MOD;
              }
              dp[len][maxVal][cost] = (dp[len - 1][maxVal][cost] * maxVal + sum) % MOD;
          }
      }
  }

  let ans = 0;
  for (let i = 1; i <= m; i++) {
      ans = (ans + dp[n][i][k]) % MOD;
  }

  return ans;
}

/*
- Explanation
    
    # **Intuition**
    
    The problem requires counting the number of arrays of length n, where each element in the array is in the range [1, m], and the array has exactly k distinct elements. We need to find a dynamic programming solution to calculate the count of such arrays.
    
    ---
    
    # **Approach**
    
    1. Initialize a 3D DP array dp to store the count of valid arrays.
    2. For len = 1 (arrays of length 1), set dp[1][i][1] = 1 for i in [1, m] since there's only one way to create a single-element array with any number from 1 to m.
    3. Use dynamic programming to fill in the dp array for len from 2 to n.
    4. For each len, maxVal, and cost, calculate dp[len][maxVal][cost] by summing up the values of dp[len-1][i][cost-1] for i less than maxVal, and then add dp[len-1][maxVal][cost] * maxVal.
    5. Take modulo MOD after each computation to avoid integer overflow.
    6. Sum up the possibilities for the final state dp[n][1..m][k] to get the answer.
- Time and Space Complexity
    - Time complexity:
        
        The time complexity of this solution is O(n * m * k), where n, m, and k are the input parameters.
        
    - Space complexity:
        
        The space complexity is O(n * m * k) as well, due to the 3D dp array.
*/