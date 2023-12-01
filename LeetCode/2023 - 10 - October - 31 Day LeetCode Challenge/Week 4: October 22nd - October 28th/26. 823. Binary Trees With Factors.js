/*

URL: https://leetcode.com/problems/binary-trees-with-factors
Difficulty: Medium



*Problem:*
Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1.

We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children.

Return the number of binary trees we can make. The answer may be too large so return the answer modulo 109 + 7.

 

Example 1:

Input: arr = [2,4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]
Example 2:

Input: arr = [2,4,5,10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].
 

Constraints:

1 <= arr.length <= 1000
2 <= arr[i] <= 109
All the values of arr are unique.

*/


/**
 * @param {number[]} arr
 * @return {number}
 */

const MOD = 10**9 + 7;

var numFactoredBinaryTrees = function(arr) {
     arr.sort((a, b) => a - b);
    const s = new Set(arr);
    const dp = {};
    for (let x of arr) dp[x] = 1;
    
    for (let i of arr) {
        for (let j of arr) {
            if (j > Math.sqrt(i)) break;
            if (i % j === 0 && s.has(i / j)) {
                dp[i] += (i / j === j ? dp[j] * dp[j] : dp[j] * dp[i / j] * 2);
                dp[i] %= MOD;
            }
        }
    }
    
    return Object.values(dp).reduce((acc, val) => (acc + val) % MOD, 0);
};

/*


# **Intuition**

When we're given a list of unique numbers and we want to form binary trees where each non-leaf node's value is the product of its children's values, it's intuitive to think about factors. If a number can be formed by multiplying two other numbers in the list, then it can be the root of a tree with those two numbers as children. This naturally leads to thinking about combinations of factors and how to efficiently determine how many trees each number can form as the root.

# **Approach**

1. **Sorting and Set Creation:** Start by sorting the `arr` in ascending order. This allows us to efficiently determine when to stop considering pairs of factors (especially with our optimization). Also, create a set `s` from `arr` for O(1) lookup times.
2. **Dynamic Programming:** Use a dictionary `dp` where each key is a number from `arr` and its value represents the number of binary trees with that number as the root. Initialize each number's count to 1 to account for a single-node tree.
3. **Calculating Combinations:** For every number ii*i* in `arr`:
    - Check every number jj*j* in `arr` (where j≤ij \leq \sqrt{i}*j*≤*i* because of optimization).
        - If ii*i* is divisible by jj*j* and ij\frac{i}{j}*ji* is in `s`:
            - If ij=j\frac{i}{j} = j*ji*=*j* (i.e., both factors are the same), then increment the count for ii*i* by dp[j]×dp[j]\text{dp}[j] \times \text{dp}[j]dp[*j*]×dp[*j*].
            - Otherwise, increment the count for ii*i* by dp[j]×dp[ij]×2\text{dp}[j] \times \text{dp}[\frac{i}{j}] \times 2dp[*j*]×dp[*ji*]×2. We multiply by 2 to account for the two possible trees (with children jj*j* and ij\frac{i}{j}*ji* or ij\frac{i}{j}*ji* and jj*j*).
4. **Final Answer:** The final answer is the sum of all values in `dp` modulo 109+710^9 + 7109+7.


- **Space complexity:**
    - The `dp` dictionary will have at most `n` elements, so it's O(n)O(n)*O*(*n*).
    - The set `s` will also have `n` elements, so O(n)O(n)*O*(*n*) for it too.
    - Combined, the space complexity is O(n)O(n)*O*(*n*).
- **Time complexity:**
    - Sorting the `arr` takes O(nlog⁡n)O(n \log n)*O*(*n*log*n*).
    - The nested loop, because of our optimization, will run in average less than n×nn \times \sqrt{n}*n*×*n*, so it's O(nn)O(n \sqrt{n})*O*(*nn*).
    - Overall, the time complexity is O(nn)O(n \sqrt{n})*O*(*nn*).

*/