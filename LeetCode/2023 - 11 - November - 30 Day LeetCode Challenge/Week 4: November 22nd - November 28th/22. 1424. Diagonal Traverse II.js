/*

Title: 1424. Diagonal Traverse II
URL: https://leetcode.com/problems/diagonal-traverse-ii/
Difficulty: Medium
Topics: Array, Sorting, Heap (Priority Queue)


**Problem**

Given a 2D integer array `nums`, return *all elements of* `nums` *in diagonal order as shown in the below images*.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/04/08/sample_1_1784.png

```
Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,4,2,7,5,3,8,6,9]

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/04/08/sample_2_1784.png

```
Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]

```

**Constraints:**

- `1 <= nums.length <= 105`
- `1 <= nums[i].length <= 105`
- `1 <= sum(nums[i].length) <= 105`
- `1 <= nums[i][j] <= 105`



**Solution**
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    function reverse(num) {
        let rev = 0;
        while (num > 0) {
            rev = rev * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev;
    }

    const mod = 1000000007;

    nums = nums.map(num => num - reverse(num));
    nums.sort((a, b) => a - b);

    let res = 0;
    let i = 0;
    while (i < nums.length - 1) {
        let cont = 1;
        while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
            cont++;
            i++;
        }
        res = (res % mod + (cont * (cont - 1)) / 2) % mod;
        i++;
    }

    return Math.floor(res % mod);
};