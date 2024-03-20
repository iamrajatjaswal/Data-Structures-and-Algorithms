/*

Title: 1669. Merge In Between Linked Lists
URL: https://leetcode.com/problems/merge-in-between-linked-lists/
Difficulty: Medium
Topics: Linked List


**Problem**


You are given two linked lists: `list1` and `list2` of sizes `n` and `m` respectively.

Remove `list1`'s nodes from the `ath` node to the `bth` node, and put `list2` in their place.

The blue edges and nodes in the following figure indicate the result:

!https://assets.leetcode.com/uploads/2020/11/05/fig1.png

*Build the result list and return its head.*

**Example 1:**

!https://assets.leetcode.com/uploads/2024/03/01/ll.png

```
Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [10,1,13,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/11/05/merge_linked_list_ex2.png

```
Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.

```

**Constraints:**

- `3 <= list1.length <= 10^4`
- `1 <= a <= b < list1.length - 1`
- `1 <= list2.length <= 10^4`


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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let prev = list1,
    temp1 = list1,
    curr = list1;
  a--; // Adjust a to match zero-based indexing

  // Traverse list1 to find the node at position (a-1)
  while (temp1 && a-- > 0) {
    temp1 = temp1.next;
    prev = temp1;
  }

  temp1 = list1; // Reset temp1 to traverse list1 again

  // Traverse list1 to find the node at position (b+1)
  while (temp1 && b-- > 0) {
    temp1 = temp1.next;
    curr = temp1;
  }

  let temp2 = list2; // Initialize pointer to traverse list2

  // Traverse list2 to find the last node
  while (temp2.next !== null) {
    temp2 = temp2.next;
  }

  prev.next = list2; // Connect the node before position 'a' to the head of list2
  temp2.next = curr.next; // Connect the last node of list2 to the node after position 'b'

  return list1; // Return the head of list1
};
