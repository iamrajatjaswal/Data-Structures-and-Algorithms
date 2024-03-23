/*

Title: 143. Reorder List
URL: https://leetcode.com/problems/reorder-list/
Difficulty: Easy
Topics: Linked List, Two Pointers, Stack, Recursion


**Problem**


You are given the head of a singly linked-list. The list can be represented as:

```
L0 → L1 → … → Ln - 1 → Ln
```

*Reorder the list to be on the following form:*

```
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

```

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg

```
Input: head = [1,2,3,4]
Output: [1,4,2,3]

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg

```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

```

**Constraints:**

- The number of nodes in the list is in the range `[1, 5 * 10^4]`.
- `1 <= Node.val <= 1000`


**Solution**

*/
/*
  Approach 1

  **Time Complexity:**

  - The solution traverses the linked list once to find the penultimate node.
  - Each traversal of the linked list takes linear time, proportional to the number of nodes.
  - Therefore, the time complexity of the solution is O(n), where n is the number of nodes in the linked list.


  **Space Complexity:**

  - The solution uses only a constant amount of additional space, regardless of the size of the input linked list.
  - It does not create any additional data structures that grow with the size of the input.
  - Thus, the space complexity is O(1), indicating constant extra space usage.
  
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // base case i.e if the linked list has zero, one, or two elements just return it
  if (!head || !head.next || !head.next.next) return;

  // Find the penultimate node i.e second last node of the linked list
  let penultimate = head;
  while (penultimate.next.next) penultimate = penultimate.next;

  // Link the penultimate with the second element
  penultimate.next.next = head.next;
  head.next = penultimate.next;

  // Again set the penultimate to the last
  penultimate.next = null;

  // Do the above steps recursively
  reorderList(head.next.next);
};
