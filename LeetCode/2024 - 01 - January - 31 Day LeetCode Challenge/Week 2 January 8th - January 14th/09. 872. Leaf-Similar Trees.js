/*

Title: 872. Leaf-Similar Trees
URL: https://leetcode.com/problems/leaf-similar-trees/
Difficulty: Easy
Topics: Array, Dynamic Programming


**Problem**


Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a **leaf value sequence***.*

!https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png

For example, in the given tree above, the leaf value sequence is `(6, 7, 4, 9, 8)`.

Two binary trees are considered *leaf-similar* if their leaf value sequence is the same.

Return `true` if and only if the two given trees with head nodes `root1` and `root2` are leaf-similar.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg

```
Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg

```
Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false

```

**Constraints:**

- The number of nodes in each tree will be in the range `[1, 200]`.
- Both of the given trees will have values in the range `[0, 200]`.



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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const dfs = (root) => {
    // If the current node is null, return an empty array
    if (root === null) {
      return [];
    }

    // Recursively explore the left and right children, and accumulate leaf values
    const leaves = dfs(root.left).concat(dfs(root.right));

    // If 'leaves' is empty, it means this is a leaf node, so return its value
    // Otherwise, it means this is an internal node and 'leaves' contains its subtree's leaves
    return leaves.length > 0 ? leaves : [root.val];
  };

  // Compare the leaf value sequences of both trees
  return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2));
};
