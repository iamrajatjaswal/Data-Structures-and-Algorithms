/*

Title: 513. Find Bottom Left Tree Value
URL: https://leetcode.com/problems/diameter-of-binary-tree/
Difficulty: Easy
Topics: Tree, Depth-First Search, Binary Tree


**Problem**


Given the `root` of a binary tree, return the leftmost value in the last row of the tree.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/12/14/tree1.jpg

```
Input: root = [2,1,3]
Output: 1

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/12/14/tree2.jpg

```
Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 7

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `2^31 <= Node.val <= 2^31 - 1`



**Solution**

*/
/*
  Appraoch 1

  - Time complexity: O(n), where n is the number of nodes in the binary tree. Each node is processed once during the level-order traversal.
  
  - Space complexity: O(m), where m is the maximum number of nodes at any level in the binary tree. In the worst case, the queue would store all nodes at the maximum level.
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
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {

  const queue = [root];
  let leftmostValue;

  while (queue.length > 0) {
      const node = queue.shift();

      leftmostValue = node.val;

      if (node.right) {
          queue.push(node.right);
      }
      if (node.left) {
          queue.push(node.left);
      }
  }

  return leftmostValue;
};