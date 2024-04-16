/*

Title: 623. Add One Row to Tree
URL: https://leetcode.com/problems/add-one-row-to-tree/
Difficulty: Medium
Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree


**Problem**


Given the `root` of a binary tree and two integers `val` and `depth`, add a row of nodes with value `val` at the given depth `depth`.

Note that the `root` node is at depth `1`.

The adding rule is:

- Given the integer `depth`, for each not null tree node `cur` at the depth `depth - 1`, create two tree nodes with value `val` as `cur`'s left subtree root and right subtree root.
- `cur`'s original left subtree should be the left subtree of the new left subtree root.
- `cur`'s original right subtree should be the right subtree of the new right subtree root.
- If `depth == 1` that means there is no depth `depth - 1` at all, then create a tree node with value `val` as the new root of the whole original tree, and the original tree is the new root's left subtree.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/03/15/addrow-tree.jpg

```
Input: root = [4,2,6,3,1,5], val = 1, depth = 2
Output: [4,1,1,2,null,null,6,3,1,5]

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/03/11/add2-tree.jpg

```
Input: root = [4,2,null,3,1], val = 1, depth = 3
Output: [4,2,null,1,1,3,null,null,1]

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10^4]`.
- The depth of the tree is in the range `[1, 10^4]`.
- `100 <= Node.val <= 100`
- `10^5 <= val <= 10^5`
- `1 <= depth <= the depth of tree + 1`


**Solution**

*/
/*
  Approach 1 :: Depth-first Traversal” :: T→O(n) : S→O(h)

  - Time complexity: `O(N)`, where `N` is the number of nodes in the binary tree. We visit each node once.

  - Space complexity: `O(H)`, where `H` is the height of the binary tree. The space complexity is determined by the recursion stack.
  
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  const helper = (node, val, depth, currdepth) => {
    if (depth === 1) {
      const newRoot = new TreeNode(val);
      newRoot.left = node;
      return newRoot;
    }

    if (!node) {
      return null;
    }

    if (currdepth === depth - 1) {
      const leftman = node.left;
      const rightman = node.right;

      node.left = new TreeNode(val);
      node.left.left = leftman;
      node.left.right = null;

      node.right = new TreeNode(val);
      node.right.left = null;
      node.right.right = rightman;

      return node;
    }

    node.left = helper(node.left, val, depth, currdepth + 1);
    node.right = helper(node.right, val, depth, currdepth + 1);

    return node;
  };

  return helper(root, val, depth, 1);
};
