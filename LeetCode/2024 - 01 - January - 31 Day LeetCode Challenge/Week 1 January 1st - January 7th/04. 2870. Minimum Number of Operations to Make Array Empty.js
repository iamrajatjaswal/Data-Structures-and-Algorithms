/*

Title: 2870. Minimum Number of Operations to Make Array Empty
URL: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
Difficulty: Medium
Topics: Array, Hash Table, Greedy, Counting


**Problem**

You are given a **0-indexed** array `nums` consisting of positive integers.

There are two types of operations that you can apply on the array **any** number of times:

- Choose **two** elements with **equal** values and **delete** them from the array.
- Choose **three** elements with **equal** values and **delete** them from the array.

Return *the **minimum** number of operations required to make the array empty, or* `-1` *if it is not possible*.

**Example 1:**

```
Input: nums = [2,3,3,2,2,4,2,3,4]
Output: 4
Explanation: We can apply the following operations to make the array empty:
- Apply the first operation on the elements at indices 0 and 3. The resulting array is nums = [3,3,2,4,2,3,4].
- Apply the first operation on the elements at indices 2 and 4. The resulting array is nums = [3,3,4,3,4].
- Apply the second operation on the elements at indices 0, 1, and 3. The resulting array is nums = [4,4].
- Apply the first operation on the elements at indices 0 and 1. The resulting array is nums = [].
It can be shown that we cannot make the array empty in less than 4 operations.

```

**Example 2:**

```
Input: nums = [2,1,2,2,3,3]
Output: -1
Explanation: It is impossible to empty the array.

```

**Constraints:**

- `2 <= nums.length <= 105`
- `1 <= nums[i] <= 106`


**Solution**
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  nums.sort((a, b) => a - b);

  let res = 0;
  let s = 0;
  while (s < nums.length) {
    let e = s;

    while (e < nums.length && nums[e] === nums[s]) {
      e++;
    }
    const count = e - s;
    if (count === 1) {
      return -1;
    }
    res += Math.floor(count / 3);

    if (count % 3 !== 0) {
      res += 1;
    }
    s = e;
  }
  return res;
};

/*
  Method: Hash Table
  TC -> O(2N)
  SC -> O(N)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const map = {};
  let operations = 0;

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let i in map) {
    let numCount = map[i];
    if (numCount === 1) return -1;

    /*
    We are dividing by 3 first because making triplets of that number than pairs will result
    in less number of operations
    */
    let rem = numCount % 3;

    if (rem === 0) {
      /*
      3 completely divides the count that means the total number of operations will be
      equal to the number of triplets of that particular number which will be the result
      after dividing by 3
      */
      operations += Math.floor(numCount / 3);
    } else {
      //   } else if (rem === 1 || rem === 2) {
      /*
      what it means is that there will either be rem = 2 or rem = 1 
      if rem == 1
          then there will be pairs of three but still one number unique number of that
          value will be left and we can't make any more pairs or triplets then that means
          we can go for 4 and then two paris will be made such that we have divided 3
          and got remainder 1 but we will exclude last divide from the divisions and we will
          get a number 4 which will have 2 pairs of that number and so indirectly we can add 
          one more operation
      if rem == 2
          then total number of operations for that particular number will be the floor of 
          divisions of that number by 3 and + 1 more operation for a pair of 2 numbers
      */
      operations += Math.floor(numCount / 3) + 1;
    }
  }

  return operations;
};
