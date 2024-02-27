/*

Title: 543. Diameter of Binary Tree
URL: https://leetcode.com/problems/diameter-of-binary-tree/
Difficulty: Easy
Topics: Tree, Depth-First Search, Binary Tree


**Problem**


Given the `root` of a binary tree, return *the length of the **diameter** of the tree*.

The **diameter** of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The **length** of a path between two nodes is represented by the number of edges between them.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg

```
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

```

**Example 2:**

```
Input: root = [1,2]
Output: 1

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `100 <= Node.val <= 100`



**Solution**

*/
/*
  Appraoch 1
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
var diameterOfBinaryTree = function (root) {
  // Define a helper function to calculate the diameter recursively
  const diameter = (node, res) => {
    // Base case: if the current node is null, return 0
    if (!node) return 0;

    // Recursively calculate the diameter of left and right subtrees
    const left = diameter(node.left, res);
    const right = diameter(node.right, res);

    // Update the maximum diameter encountered so far
    res[0] = Math.max(res[0], left + right);

    // Return the depth of the current node
    return Math.max(left, right) + 1;
  };

  // Initialize a list to hold the maximum diameter encountered
  const res = [0];
  // Call the diameter function starting from the root
  diameter(root, res);
  // Return the maximum diameter encountered
  return res[0];
};
