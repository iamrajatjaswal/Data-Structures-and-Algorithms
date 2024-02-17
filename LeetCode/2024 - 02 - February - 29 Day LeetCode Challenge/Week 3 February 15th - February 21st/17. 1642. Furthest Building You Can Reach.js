/*

Title: 1642. Furthest Building You Can Reach
URL: https://leetcode.com/problems/furthest-building-you-can-reach/
Difficulty: Medium
Topics: Array, Greedy, Heap (Priority Queue)


**Problem**



You are given an integer array `heights` representing the heights of buildings, some `bricks`, and some `ladders`.

You start your journey from building `0` and move to the next building by possibly using bricks or ladders.

While moving from building `i` to building `i+1` (**0-indexed**),

- If the current building's height is **greater than or equal** to the next building's height, you do **not** need a ladder or bricks.
- If the current building's height is **less than** the next building's height, you can either use **one ladder** or `(h[i+1] - h[i])` **bricks**.

*Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.*

**Example 1:**

!https://assets.leetcode.com/uploads/2020/10/27/q4.gif

```
Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
Output: 4
Explanation: Starting at building 0, you can follow these steps:
- Go to building 1 without using ladders nor bricks since 4 >= 2.
- Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
- Go to building 3 without using ladders nor bricks since 7 >= 6.
- Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
It is impossible to go beyond building 4 because you do not have any more bricks or ladders.

```

**Example 2:**

```
Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
Output: 7

```

**Example 3:**

```
Input: heights = [14,3,19,3], bricks = 17, ladders = 0
Output: 3

```

**Constraints:**

- `1 <= heights.length <= 10^5`
- `1 <= heights[i] <= 10^6`
- `0 <= bricks <= 10^9`
- `0 <= ladders <= heights.length`



**Solution**

*/

/*
  Approach 1

  - Time complexity:
    
    O(nlogk)
    
  - Space complexity:
    
    O(min(n,l))
*/
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
// var furthestBuilding = function(heights, bricks, ladders) {
var furthestBuilding = function (h, b, l) {
  const p = new MaxHeap();

  let i = 0,
    diff = 0;
  for (i = 0; i < h.length - 1; i++) {
    diff = h[i + 1] - h[i];

    if (diff <= 0) {
      continue;
    }

    b -= diff;
    p.push(diff);

    if (b < 0) {
      b += p.pop();
      l--;
    }

    if (l < 0) {
      break;
    }
  }

  return i;
};

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    const max = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return max;
  }

  heapifyUp() {
    let current = this.heap.length - 1;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.heap[parent] >= this.heap[current]) {
        break;
      }
      [this.heap[parent], this.heap[current]] = [
        this.heap[current],
        this.heap[parent],
      ];
      current = parent;
    }
  }

  heapifyDown() {
    let current = 0;
    while (true) {
      let leftChild = 2 * current + 1;
      let rightChild = 2 * current + 2;
      let maxChild = leftChild;

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] > this.heap[leftChild]
      ) {
        maxChild = rightChild;
      }

      if (
        leftChild >= this.heap.length ||
        this.heap[current] >= this.heap[maxChild]
      ) {
        break;
      }

      [this.heap[current], this.heap[maxChild]] = [
        this.heap[maxChild],
        this.heap[current],
      ];
      current = maxChild;
    }
  }
}
