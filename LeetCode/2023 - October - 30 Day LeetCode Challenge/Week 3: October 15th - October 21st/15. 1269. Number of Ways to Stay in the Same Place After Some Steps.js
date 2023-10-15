/*


You have a pointer at index `0` in an array of size `arrLen`. At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place (The pointer should not be placed outside the array at any time).

Given two integers `steps` and `arrLen`, return the number of ways such that your pointer is still at index `0` after **exactly** `steps` steps. Since the answer may be too large, return it **modulo** `109 + 7`.

**Example 1:**

```
Input: steps = 3, arrLen = 2
Output: 4
Explanation:There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay

```

**Example 2:**

```
Input: steps = 2, arrLen = 4
Output: 2
Explanation: There are 2 differents ways to stay at index 0 after 2 steps
Right, Left
Stay, Stay

```

**Example 3:**

```
Input: steps = 4, arrLen = 2
Output: 8

```

**Constraints:**

- `1 <= steps <= 500`
- `1 <= arrLen <= 106`

*/

// Solution
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    // Define a modulus value for taking the modulo operation to avoid overflow.
    const kMod = 1000000007;
    
    // Calculate the number of positions we need to consider, which is the minimum of arrLen and steps/2 + 1.
    const n = Math.min(arrLen, Math.floor(steps / 2) + 1);
    
    // Create an array dp to store the number of ways to stay at each position.
    const dp = new Array(n).fill(0);
    
    // Initialize the number of ways to stay at position 0 after 0 steps to 1.
    dp[0] = 1;

    // Loop through each step.
    while (steps > 0) {
        // Create a new array newDp to store updated values for each position.
        const newDp = new Array(n).fill(0);
        
        // Iterate through each position.
        for (let i = 0; i < n; i++) {
            // Initialize with the number of ways to stay at the same position in the previous step.
            newDp[i] = dp[i];
            
            // Add the number of ways to reach the current position by moving left if it's a valid move.
            if (i - 1 >= 0) {
                newDp[i] += dp[i - 1];
            }
            
            // Add the number of ways to reach the current position by moving right if it's a valid move.
            if (i + 1 < n) {
                newDp[i] += dp[i + 1];
            }
            
            // Take the modulo to avoid integer overflow.
            newDp[i] %= kMod;
        }

        // Update dp with the newDp array for the next step.
        dp.splice(0, n, ...newDp);

        // Decrement the number of steps.
        steps--;
    }

    // The final result is stored in dp[0], representing the number of ways to reach the initial position after taking the specified number of steps.
    return dp[0];
};