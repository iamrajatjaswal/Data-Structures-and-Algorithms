/*

Title: 404. Sum of Left Leaves
URL: https://leetcode.com/problems/sum-of-left-leaves/
Difficulty: Easy
Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree


**Problem**



Given the `root` of a binary tree, return *the sum of all left leaves.*

A **leaf** is a node with no children. A **left leaf** is a leaf that is the left child of another node.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg

```
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

```

**Example 2:**

```
Input: root = [1]
Output: 0

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 1000]`.
- `1000 <= Node.val <= 1000`



**Solution**

*/
/*
  Approach 1

  ***Time Complexity:***

  **`O(N)`**, where `N`is the number of nodes in the given binary tree. It is a standard DFS traversal technique where each node is visited once.

  ***Space Complexity :***

  **`O(H)`**, where `H`is the height of given binary tree. It is required for implicit recursive stack space. `H = logN` in case of a complete binary tree and `H=N`in case of a skewed tree.
  
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
var sumOfLeftLeaves = (root) => {
  return dfs(root, false);
};

var dfs = (root, isLeft) => {
  if (!root) return 0;
  if (!root.left && !root.right) return isLeft ? root.val : 0;
  return dfs(root.left, true) + dfs(root.right, false);
};
