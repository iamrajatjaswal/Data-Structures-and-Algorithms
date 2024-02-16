/*

Title: 1481. Least Number of Unique Integers after K Removals
URL: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
Difficulty: Medium
Topics: Array, Hash Table, Greedy, Sorting, Counting


**Problem**


Given an array of integers `arr` and an integer `k`. Find the *least number of unique integers* after removing **exactly** `k` elements**.**

**Example 1:**

```
Input:arr = [5,5,4], k = 1
Output:1
Explanation: Remove the single 4, only 5 is left.

```

**Example 2:**

```
Input:arr = [4,3,1,1,3,3,2], k = 3
Output:2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
```

**Constraints:**

- `1 <= arr.length <= 10^5`
- `1 <= arr[i] <= 10^9`
- `0 <= k <= arr.length`


**Solution**

*/

/*
  Approach 1
*/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const freq = new Map();
  for (const a of arr) {
    freq.set(a, (freq.get(a) || 0) + 1);
  }

  const pq = Array.from(freq.values()).sort((a, b) => a - b);

  let uniqueCount = pq.length;
  for (const count of pq) {
    if (k >= count) {
      k -= count;
      uniqueCount--;
    } else {
      break;
    }
  }

  return uniqueCount;
};
