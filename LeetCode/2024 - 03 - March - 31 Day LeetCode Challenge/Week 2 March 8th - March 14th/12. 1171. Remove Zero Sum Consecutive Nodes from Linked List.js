/*

Title: 1171. Remove Zero Sum Consecutive Nodes from Linked List
URL: https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
Difficulty: Medium
Topics: Hash Table, Linked List


**Problem**


Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of `ListNode` objects.)

**Example 1:**

```
Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.

```

**Example 2:**

```
Input: head = [1,2,3,-3,4]
Output: [1,2,4]

```

**Example 3:**

```
Input: head = [1,2,3,-3,-2]
Output: [1]

```

**Constraints:**

- The given linked list will contain between `1` and `1000` nodes.
- Each node in the linked list has `1000 <= node.val <= 1000`.


**Solution**

*/
/*
  Approach 1
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prefixSumToNode = new Map();
  let prefixSum = 0;
  for (let current = dummy; current != null; current = current.next) {
    prefixSum += current.val;
    if (prefixSumToNode.has(prefixSum)) {
      let prev = prefixSumToNode.get(prefixSum);
      let toRemove = prev.next;
      let p = prefixSum + (toRemove ? toRemove.val : 0);
      while (p != prefixSum) {
        prefixSumToNode.delete(p);
        toRemove = toRemove.next;
        p += toRemove ? toRemove.val : 0;
      }
      prev.next = current.next;
    } else {
      prefixSumToNode.set(prefixSum, current);
    }
  }
  return dummy.next;
};
