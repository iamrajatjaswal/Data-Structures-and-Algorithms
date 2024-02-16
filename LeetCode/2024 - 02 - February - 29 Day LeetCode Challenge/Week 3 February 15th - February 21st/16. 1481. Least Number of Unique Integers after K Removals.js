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
  Approach 1 (Greedy Approach)

    ### Approach:

    The approach used in this solution is often referred to as a "greedy" approach.

    In this problem, the algorithm prioritizes removing elements with the lowest frequency first, as long as there is enough remaining "capacity" in **`k`**. This greedy strategy aims to minimize the number of unique integers remaining after the removal process.

    The algorithm iterates through the frequencies sorted in ascending order, attempting to remove as many unique integers as possible until the remaining **`k`** becomes insufficient to remove more integers. This approach may not always yield the optimal solution but often provides a good heuristic for certain optimization problems.
  

  **Time Complexity**:
    - The loop that constructs the frequency map has a time complexity of O(n), where n is the number of elements in the input array **`arr`**.

    - Constructing the priority queue (or sorting the frequency counts array) takes O(n log n) time.

    - The loop that iterates through the priority queue or sorted array to determine the number of unique elements takes O(n) time.

    - Overall, the time complexity is dominated by the sorting step, so it's O(n log n).

    
  **Space Complexity**:
    - The space complexity is primarily determined by the frequency map, which stores the frequency of each element. In the worst case, all elements are unique, so the map would have a size of O(n).

    - The priority queue or sorted array of frequencies also takes up O(n) space.
    
    - The overall space complexity is O(n).
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
