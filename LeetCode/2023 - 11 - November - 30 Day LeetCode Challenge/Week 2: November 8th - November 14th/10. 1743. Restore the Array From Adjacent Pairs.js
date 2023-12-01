/*

Title: 1743. Restore the Array From Adjacent Pairs
URL: https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
Difficulty: Medium
Topics: Math, String


**Problem**

There is an integer array `nums` that consists of `n` **unique** elements, but you have forgotten it. However, you do remember every pair of adjacent elements in `nums`.

You are given a 2D integer array `adjacentPairs` of size `n - 1` where each `adjacentPairs[i] = [ui, vi]` indicates that the elements `ui` and `vi` are adjacent in `nums`.

It is guaranteed that every adjacent pair of elements `nums[i]` and `nums[i+1]` will exist in `adjacentPairs`, either as `[nums[i], nums[i+1]]` or `[nums[i+1], nums[i]]`. The pairs can appear **in any order**.

Return *the original array* `nums`*. If there are multiple solutions, return **any of them***.

**Example 1:**

```
Input: adjacentPairs = [[2,1],[3,4],[3,2]]
Output: [1,2,3,4]
Explanation: This array has all its adjacent pairs in adjacentPairs.
Notice that adjacentPairs[i] may not be in left-to-right order.

```

**Example 2:**

```
Input: adjacentPairs = [[4,-2],[1,4],[-3,1]]
Output: [-2,4,1,-3]
Explanation: There can be negative numbers.
Another solution is [-3,1,4,-2], which would also be accepted.

```

**Example 3:**

```
Input: adjacentPairs = [[100000,-100000]]
Output: [100000,-100000]

```

**Constraints:**

- `nums.length == n`
- `adjacentPairs.length == n - 1`
- `adjacentPairs[i].length == 2`
- `2 <= n <= 105`
- `105 <= nums[i], ui, vi <= 105`
- There exists some `nums` that has `adjacentPairs` as its pairs.


**Solution**
*/

/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(vals) {
    const pairs = new Map();
    
    for (const val of vals) {
        if (!pairs.has(val[0])) pairs.set(val[0], []);
        if (!pairs.has(val[1])) pairs.set(val[1], []);
        pairs.get(val[0]).push(val[1]);
        pairs.get(val[1]).push(val[0]);
    }
    
    const result = [];
    let start = -1000000;
    
    for (const [entry, values] of pairs) {
        if (values.length === 1) {
            start = entry;
            break;
        }
    }
    
    let left = -1000000;
    result.push(start);
    
    for (let i = 1; i <= vals.length; i++) {
        const val = pairs.get(start);
        const newval = val[0] !== left ? val[0] : val[1];
        result.push(newval);
        left = start;
        start = newval;
    }
    
    return result;
};