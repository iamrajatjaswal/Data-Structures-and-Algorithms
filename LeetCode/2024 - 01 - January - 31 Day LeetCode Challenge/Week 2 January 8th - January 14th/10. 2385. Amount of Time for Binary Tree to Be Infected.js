/*

Title: 2385. Amount of Time for Binary Tree to Be Infected
URL: https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
Difficulty: Easy
Topics: Array, Dynamic Programming


**Problem**


ou are given the `root` of a binary tree with **unique** values, and an integer `start`. At minute `0`, an **infection** starts from the node with value `start`.

Each minute, a node becomes infected if:

- The node is currently uninfected.
- The node is adjacent to an infected node.

Return *the number of minutes needed for the entire tree to be infected.*

**Example 1:**

!https://assets.leetcode.com/uploads/2022/06/25/image-20220625231744-1.png

```
Input: root = [1,5,3,null,4,10,6,9,2], start = 3
Output: 4
Explanation: The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2022/06/25/image-20220625231812-2.png

```
Input: root = [1], start = 1
Output: 0
Explanation: At minute 0, the only node in the tree is infected so we return 0.

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 105]`.
- `1 <= Node.val <= 105`
- Each node has a **unique** value.
- A node with a value of `start` exists in the tree.



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
 * @param {number} start
 * @return {number}
 */
const amountOfTime = (root, start) => {
  let amount = 0;
  const traverse = (root, start) => {
    if (!root) {
      return 0;
    }

    let left = traverse(root.left, start);
    let right = traverse(root.right, start);

    if (root.val === start) {
      amount = Math.max(left, right);
      return -1;
    } else if (left >= 0 && right >= 0) {
      return Math.max(left, right) + 1;
    } else {
      amount = Math.max(amount, Math.abs(left - right));
      return Math.min(left, right) - 1;
    }
  };
  traverse(root, start);

  return amount;
};
