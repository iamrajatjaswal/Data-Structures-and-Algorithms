/*

Title: 501. Find Mode in Binary Search Tree
URL: https://leetcode.com/problems/find-mode-in-binary-search-tree/
Difficulty: Easy
Topics: Tree, Depth-First Search, Binary Search Tree, Binary Tree


**Problem:**
Given the `root` of a binary search tree (BST) with duplicates, return *all the [mode(s)](https://en.wikipedia.org/wiki/Mode_(statistics)) (i.e., the most frequently occurred element) in it*.

If the tree has more than one mode, return them in **any order**.

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys **less than or equal to** the node's key.
- The right subtree of a node contains only nodes with keys **greater than or equal to** the node's key.
- Both the left and right subtrees must also be binary search trees.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/03/11/mode-tree.jpg

```
Input: root = [1,null,2,2]
Output: [2]

```

**Example 2:**

```
Input: root = [0]
Output: [0]

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 104]`.
- `105 <= Node.val <= 105`

**Follow up:**

Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).


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
var findMode = function(root) {
    let currentVal = null;
    let currentCount = 0;
    let maxCount = 0;
    let modes = [];

    function inOrderTraversal(node) {
        if (!node) return;

        inOrderTraversal(node.left);

        currentCount = (node.val === currentVal) ? currentCount + 1 : 1;
        if (currentCount === maxCount) {
            modes.push(node.val);
        } else if (currentCount > maxCount) {
            maxCount = currentCount;
            modes = [node.val];
        }
        currentVal = node.val;

        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);
    return modes;
};