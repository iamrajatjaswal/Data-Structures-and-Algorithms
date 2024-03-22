/*

Title: 234. Palindrome Linked List
URL: https://leetcode.com/problems/palindrome-linked-list/
Difficulty: Easy
Topics: Linked List, Two Pointers, Stack, Recursion


**Problem**


Given the `head` of a singly linked list, return `true` *if it is a palindrome or* `false`*otherwise.*

**Example 1:**

!https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg

```
Input: head = [1,2,2,1]
Output: true

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg

```
Input: head = [1,2]
Output: false

```

**Constraints:**

- The number of nodes in the list is in the range `[1, 10^5]`.
- `0 <= Node.val <= 9`

**Follow up:**

Could you do it in time and `O(n)` space? `O(1)`


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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head,
    fast = head,
    prev,
    temp;
  while (fast && fast.next) (slow = slow.next), (fast = fast.next.next);
  (prev = slow), (slow = slow.next), (prev.next = null);
  while (slow)
    (temp = slow.next), (slow.next = prev), (prev = slow), (slow = temp);
  (fast = head), (slow = prev);
  while (slow)
    if (fast.val !== slow.val) return false;
    else (fast = fast.next), (slow = slow.next);
  return true;
};
