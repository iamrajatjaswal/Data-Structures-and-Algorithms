/*

Title: 94. Binary Tree Inorder Traversal
URL: https://leetcode.com/problems/binary-tree-inorder-traversal/
Difficulty: Easy
Topics: Stack, Tree, Depth-First Search, Binary Tree


**Problem**

Given the `root` of a binary tree, return *the inorder traversal of its nodes' values*.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg

```
Input: root = [1,null,2,3]
Output: [1,3,2]

```

**Example 2:**

```
Input: root = []
Output: []

```

**Example 3:**

```
Input: root = [1]
Output: [1]

```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 100]`.
- `100 <= Node.val <= 100`

**Follow up:**

Recursive solution is trivial, could you do it iteratively?


**Solution**
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    helper(root, result);
    return result;
};

function helper(root, result) {
    if (root !== null) {
        helper(root.left, result);
        result.push(root.val);
        helper(root.right, result);
    }
}