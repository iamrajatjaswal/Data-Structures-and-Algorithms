/*

Title: 988. Smallest String Starting From Leaf
URL: https://leetcode.com/problems/smallest-string-starting-from-leaf/
Difficulty: Medium
Topics: String, Tree, Depth-First Search, Binary Tree


**Problem**


You are given the `root` of a binary tree where each node has a value in the range `[0, 25]` representing the letters `'a'` to `'z'`.

Return *the **lexicographically smallest** string that starts at a leaf of this tree and ends at the root*.

As a reminder, any shorter prefix of a string is **lexicographically smaller**.

- For example, `"ab"` is lexicographically smaller than `"aba"`.

A leaf of a node is a node that has no children.

**Example 1:**

!https://assets.leetcode.com/uploads/2019/01/30/tree1.png

```
Input: root = [0,1,2,3,4,3,4]
Output: "dba"

```

**Example 2:**

!https://assets.leetcode.com/uploads/2019/01/30/tree2.png

```
Input: root = [25,1,3,1,3,0,2]
Output: "adz"

```

**Example 3:**

!https://assets.leetcode.com/uploads/2019/02/01/tree3.png

```
Input: root = [2,2,1,null,1,0,null,0]
Output: "abc"

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 8500]`.
- `0 <= Node.val <= 25`


**Solution**

*/
/*
  Approach 1 :: Depth-first Traversal”
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var dfs = function (node, path, smallest) {
  if (node === null) return;

  // Append current node's character to the path
  path += String.fromCharCode("a".charCodeAt(0) + node.val);

  // If it's a leaf node, compare and update smallest
  if (node.left === null && node.right === null) {
    path = path.split("").reverse().join("");
    if (smallest.value === "" || path < smallest.value) {
      smallest.value = path;
    }
    path = path.split("").reverse().join(""); // backtrack by reversing again
  }

  // Recursively traverse left and right subtrees
  dfs(node.left, path, smallest);
  dfs(node.right, path, smallest);
};

/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let smallest = { value: "" };
  dfs(root, "", smallest);
  return smallest.value;
};
