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
  Approach 1 :: Depth-first Traversal” :: T→O(N * h) : S→O(N * h)

  - Time complexity:
    The time complexity of the provided solution is `O(N⋅h)`, where `N` is the number of nodes in the binary tree and `h` is the height of the tree.

    Here's the breakdown:

    1. **Traversal**: The algorithm traverses every node of the binary tree once in a depth-first manner. This traversal takes `O(N)` time, where `N` is the number of nodes.
    2. **String Manipulation**: At each leaf node, the algorithm constructs a string representation of the path from the root to that leaf. Constructing this string takes `O(h)` time, where `h` is the height of the tree, because in the worst case, the path from the root to a leaf can contain all nodes.

    Since both the traversal and string manipulation steps occur within the DFS, the overall time complexity is `O(N⋅h)`.

  - Space complexity:
    The space complexity is also O(N⋅h). This is because the algorithm maintains a call stack for the DFS traversal, which can grow up to the height of the tree h. Additionally, at each leaf node, a string of length h is constructed to represent the path from the root to that leaf. Therefore, the space complexity is dominated by the space used by the call stack and the strings.

  
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
