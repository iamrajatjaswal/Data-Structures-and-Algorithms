/*

Title: 100. Same Tree
URL: https://leetcode.com/problems/same-tree/
Difficulty: Easy
Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree


**Problem**


Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg

```
Input: p = [1,2,3], q = [1,2,3]
Output: true

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg

```
Input: p = [1,2], q = [1,null,2]
Output: false

```

**Example 3:**

!https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg

```
Input: p = [1,2,1], q = [1,1,2]
Output: false

```

**Constraints:**

- The number of nodes in both trees is in the range `[0, 100]`.
- `10^4 <= Node.val <= 10^4`



**Solution**

*/
/*
  Appraoch 1

  - Time complexity:
    
    O(n)
    
    *(n is the number of nodes in the tree)*
    
  - Space complexity:
    
    O(h)
    
    *(h is the height of the tree)*
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
