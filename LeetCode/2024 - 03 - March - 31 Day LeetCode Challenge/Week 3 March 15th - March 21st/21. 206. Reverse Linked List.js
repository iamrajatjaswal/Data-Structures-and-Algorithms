/*

Title: 206. Reverse Linked List
URL: https://leetcode.com/problems/reverse-linked-list/
Difficulty: Medium
Topics: Linked List, Recursion


**Problem**


Given the `head` of a singly linked list, reverse the list, and return *the reversed list*.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg

```
Input: head = [1,2]
Output: [2,1]

```

**Example 3:**

```
Input: head = []
Output: []

```

**Constraints:**

- The number of nodes in the list is the range `[0, 5000]`.
- `5000 <= Node.val <= 5000`

**Follow up:** A linked list can be reversed either iteratively or recursively. Could you implement both?


**Solution**

*/
/*
  Approach 1 :: Iterative approach :: T → O(N) : S → O(N)

  - Time complexity: O(N)

  - Space complexity: O(N)  
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
var reverseList = function (head) {
  let curr = head;
  let prev = null;
  let temp = null;
  while (curr !== null) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

/*
  Approach 2 :: Recursive approach :: T → O(N) : S → O(N)

  - Time complexity: O(N)

  - Space complexity: O(N)  
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  var reverse = function (curr) {
    if (curr === null || curr.next === null) return curr;

    var nextNode = curr.next;
    var reversedHead = reverse(nextNode);

    curr.next = null;
    nextNode.next = curr;

    return reversedHead;
  };

  return reverse(head);
};
