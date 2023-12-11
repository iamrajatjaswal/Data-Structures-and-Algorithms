/*

Title: 1287. Element Appearing More Than 25% In Sorted Array
URL: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
Difficulty: Easy
Topics: Array


**Problem**

Given an integer array **sorted** in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

**Example 1:**

```
Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6

```

**Example 2:**

```
Input: arr = [1,1]
Output: 1

```

**Constraints:**

- `1 <= arr.length <= 104`
- `0 <= arr[i] <= 105`



**Solution**
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let result = Array.from({ length: col }, () => Array(row).fill(0));
    
    for (let i = 0; i < col; ++i) {
        for (let j = 0; j < row; ++j) {
            result[i][j] = matrix[j][i];
        }
    }
    
    return result;
};