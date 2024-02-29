/*

Title: 1609. Even Odd Tree
URL: https://leetcode.com/problems/even-odd-tree/
Difficulty: Easy
Topics: Tree, Depth-First Search, Binary Tree


**Problem**


A binary tree is named **Even-Odd** if it meets the following conditions:

- The root of the binary tree is at level index `0`, its children are at level index `1`, their children are at level index `2`, etc.
- For every **even-indexed** level, all nodes at the level have **odd** integer values in **strictly increasing** order (from left to right).
- For every **odd-indexed** level, all nodes at the level have **even** integer values in **strictly decreasing** order (from left to right).

Given the `root` of a binary tree, *return* `true` *if the binary tree is **Even-Odd**, otherwise return* `false`*.*

**Example 1:**

!https://assets.leetcode.com/uploads/2020/09/15/sample_1_1966.png

```
Input: root = [1,10,4,3,null,7,9,12,8,6,null,null,2]
Output: true
Explanation: The node values on each level are:
Level 0: [1]
Level 1: [10,4]
Level 2: [3,7,9]
Level 3: [12,8,6,2]
Since levels 0 and 2 are all odd and increasing and levels 1 and 3 are all even and decreasing, the tree is Even-Odd.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/09/15/sample_2_1966.png

```
Input: root = [5,4,2,3,3,7]
Output: false
Explanation: The node values on each level are:
Level 0: [5]
Level 1: [4,2]
Level 2: [3,3,7]
Node values in level 2 must be in strictly increasing order, so the tree is not Even-Odd.

```

**Example 3:**

!https://assets.leetcode.com/uploads/2020/09/22/sample_1_333_1966.png

```
Input: root = [5,9,1,3,5,7]
Output: false
Explanation: Node values in the level 1 should be even integers.

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10^5]`.
- `1 <= Node.val <= 10^6`


**Solution**

*/
/*
  Appraoch 1

  ## Time Complexity
  - The time complexity of this solution is O(n), where n is the number of nodes in the binary tree. This is because the algorithm traverses each node once, visiting each node exactly once.

  ## Space Complexity
  - The space complexity is also O(n) in the worst case. This is because in the worst case scenario, the queue can hold all the nodes of the last level of the binary tree, which can be up to half of the total number of nodes in a complete binary tree.
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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  if (!root) {
    return true;
  }

  let queue = [root];
  let level = 0;

  while (queue.length > 0) {
    let size = queue.length;
    let prevVal =
      level % 2 === 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      // Check if the values follow the conditions
      if (
        (level % 2 === 0 && (node.val % 2 === 0 || node.val <= prevVal)) ||
        (level % 2 === 1 && (node.val % 2 === 1 || node.val >= prevVal))
      ) {
        return false;
      }

      prevVal = node.val;

      // Add children to the queue
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    level++;
  }

  return true;
};
