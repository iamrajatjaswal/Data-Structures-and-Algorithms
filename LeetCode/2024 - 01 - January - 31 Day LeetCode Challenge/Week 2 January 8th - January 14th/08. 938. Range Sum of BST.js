/*

Title: 938. Range Sum of BST
URL: https://leetcode.com/problems/range-sum-of-bst/
Difficulty: Hard
Topics: Array, Dynamic Programming


**Problem**

Given the `root` node of a binary search tree and two integers `low` and `high`, return *the sum of values of all nodes with a value in the **inclusive** range* `[low, high]`.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/11/05/bst1.jpg

```
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/11/05/bst2.jpg

```
Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 2 * 104]`.
- `1 <= Node.val <= 10^5`
- `1 <= low <= high <= 10^5`
- All `Node.val` are **unique**.


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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (root === null) {
    return 0;
  }

  if (low <= root.val && root.val <= high) {
    return (
      root.val +
      rangeSumBST(root.left, low, high) +
      rangeSumBST(root.right, low, high)
    );
  } else if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  } else {
    return rangeSumBST(root.left, low, high);
  }
};
