/*

Title: 46. Permutations
URL: https://leetcode.com/problems/permutations/
Difficulty: Medium
Topics: Array, Backtracking


**Problem**

Given an array `nums` of distinct integers, return *all the possible permutations*. You can return the answer in **any order**.

**Example 1:**

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

```

**Example 2:**

```
Input: nums = [0,1]
Output: [[0,1],[1,0]]

```

**Example 3:**

```
Input: nums = [1]
Output: [[1]]

```

**Constraints:**

- `1 <= nums.length <= 6`
- `10 <= nums[i] <= 10`
- All the integers of `nums` are **unique**.


**Solution**
*/

/*
  Method: Brute
*/
/**
 * @param {number} ind
 * @param {number} n
 * @param {number[]} freq
 * @param {number[]} ds
 * @param {number[]} nums
 * @param {number[][]} result
 * @return {void}
 */
function getAllPermutations(ind, n, freq, ds, result, nums) {
  if (ind === n) {
    result.push(ds.slice());
    return;
  }

  for (let i = 0; i < n; i++) {
    if (freq[i] === 0) {
      freq[i] = 1;
      ds.push(nums[i]);

      getAllPermutations(ind + 1, n, freq, ds, result, nums);

      freq[i] = 0;
      ds.pop();
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const n = nums.length;
  const result = [];
  const ds = [];
  const freq = [];

  for (let i = 0; i < n; i++) freq.push(0);

  getAllPermutations(0, n, freq, ds, result, nums);

  return result;
};

/*
  Output
*/
const nums = [1, 2, 3];
const output = permute(nums);

console.log("All permutations are: \n", output);
