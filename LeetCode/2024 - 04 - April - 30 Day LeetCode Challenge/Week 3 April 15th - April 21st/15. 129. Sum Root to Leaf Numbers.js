/*

Title: 129. Sum Root to Leaf Numbers
URL: https://leetcode.com/problems/sum-root-to-leaf-numbers/
Difficulty: Medium
Topics: Tree, Depth-First Search, Binary Tree


**Problem**



You are given the `root` of a binary tree containing digits from `0` to `9` only.

Each root-to-leaf path in the tree represents a number.

- For example, the root-to-leaf path `1 -> 2 -> 3` represents the number `123`.

Return *the total sum of all root-to-leaf numbers*. Test cases are generated so that the answer will fit in a **32-bit** integer.

A **leaf** node is a node with no children.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg

```
Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path1->2 represents the number12.
The root-to-leaf path1->3 represents the number13.
Therefore, sum = 12 + 13 =25.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg

```
Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path4->9->5 represents the number 495.
The root-to-leaf path4->9->1 represents the number 491.
The root-to-leaf path4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 =1026.

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 1000]`.
- `0 <= Node.val <= 9`
- The depth of the tree will not exceed `10`.




**Solution**

*/
/*
  Approach 1 :: Depth-first search” :: T→O(n) : S→O(n)

  **Time Complexity**:
    The provided solution operates in *`O*(*n*)` time complexity, where *`n`* is the number of nodes in the binary tree. This is because we traverse each node exactly once during the depth-first search.

  **Space Complexity**:
    In the worst case, the space complexity of the solution is *`O*(*n*)`. This is because the recursion stack can grow as deep as the height of the binary tree, which can be *`O*(*n*)` for an unbalanced tree. However, each recursive call only adds a constant amount of additional information *`O*(1)` space complexity), so the overall space complexity remains *`O*(*n*)`.
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
var sumNumbers = (root) => {
  return sum(root, 0);
};

var sum = (n, s) => {
  if (n === null) return 0;
  if (n.left === null && n.right === null) return s * 10 + n.val;
  return sum(n.left, s * 10 + n.val) + sum(n.right, s * 10 + n.val);
};
