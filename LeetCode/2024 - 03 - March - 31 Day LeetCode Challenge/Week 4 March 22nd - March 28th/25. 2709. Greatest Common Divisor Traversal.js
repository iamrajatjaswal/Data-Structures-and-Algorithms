/*

Title: 2709. Greatest Common Divisor Traversal
URL: https://leetcode.com/problems/greatest-common-divisor-traversal/
Difficulty: Hard
Topics: Array, Math, Union Find, Number Theory


**Problem**


You are given a **0-indexed** integer array `nums`, and you are allowed to **traverse** between its indices. You can traverse between index `i` and index `j`, `i != j`, if and only if `gcd(nums[i], nums[j]) > 1`, where `gcd` is the **greatest common divisor**.

Your task is to determine if for **every pair** of indices `i` and `j` in nums, where `i < j`, there exists a **sequence of traversals** that can take us from `i` to `j`.

Return `true` *if it is possible to traverse between all such pairs of indices, or* `false` *otherwise.*

**Example 1:**

```
Input: nums = [2,3,6]
Output: true
Explanation: In this example, there are 3 possible pairs of indices: (0, 1), (0, 2), and (1, 2).
To go from index 0 to index 1, we can use the sequence of traversals 0 -> 2 -> 1, where we move from index 0 to index 2 because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1, and then move from index 2 to index 1 because gcd(nums[2], nums[1]) = gcd(6, 3) = 3 > 1.
To go from index 0 to index 2, we can just go directly because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1. Likewise, to go from index 1 to index 2, we can just go directly because gcd(nums[1], nums[2]) = gcd(3, 6) = 3 > 1.

```

**Example 2:**

```
Input: nums = [3,9,5]
Output: false
Explanation: No sequence of traversals can take us from index 0 to index 2 in this example. So, we return false.

```

**Example 3:**

```
Input: nums = [4,3,12,8]
Output: true
Explanation: There are 6 possible pairs of indices to traverse between: (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), and (2, 3). A valid sequence of traversals exists for each pair, so we return true.

```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`



**Solution**

*/
/*
  Approach 1

  - Time complexity:
    - The time complexity of identifying prime factors for each element in the array is approximately O(n√maxnum), where n is the number of elements in the array and max_num is the maximum value of an element in the array.
    - The time complexity of the union-find operations is approximately O(nα(n), where α(n) is the inverse Ackermann function, which grows very slowly and can be considered constant for practical purposes.
    - Therefore, the overall time complexity is O(n√maxnum).
    
  - Space complexity:
    - The space complexity is O(n) for storing disjoint sets, set sizes, and first occurrences of prime factors.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function (nums) {
  const numElements = nums.length;
  if (numElements === 1) return true;

  const disjointSet = Array.from({ length: numElements }, (_, index) => index);
  const setSize = Array(numElements).fill(1);
  const factorFirstOccurrence = new Map();

  function findSetLeader(x) {
    if (disjointSet[x] === x) return x;
    disjointSet[x] = findSetLeader(disjointSet[x]);
    return disjointSet[x];
  }

  function unionSets(x, y) {
    const xLeader = findSetLeader(x);
    const yLeader = findSetLeader(y);
    if (xLeader === yLeader) return;
    if (setSize[xLeader] < setSize[yLeader]) {
      disjointSet[xLeader] = yLeader;
      setSize[yLeader] += setSize[xLeader];
    } else {
      disjointSet[yLeader] = xLeader;
      setSize[xLeader] += setSize[yLeader];
    }
  }

  for (let i = 0; i < numElements; i++) {
    let num = nums[i];
    let divisor = 2;
    while (divisor * divisor <= num) {
      if (num % divisor === 0) {
        if (factorFirstOccurrence.has(divisor)) {
          unionSets(i, factorFirstOccurrence.get(divisor));
        } else {
          factorFirstOccurrence.set(divisor, i);
        }
        while (num % divisor === 0) {
          num /= divisor;
        }
      }
      divisor++;
    }
    if (num > 1) {
      if (factorFirstOccurrence.has(num)) {
        unionSets(i, factorFirstOccurrence.get(num));
      } else {
        factorFirstOccurrence.set(num, i);
      }
    }
  }

  return setSize[findSetLeader(0)] === numElements;
};
