/*

Title: 2265. Count Nodes Equal to Average of Subtree
URL: https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
Difficulty: Medium
Topics: Tree, Depth-First Search, Binary Tree


**Problem:**
Given the `root` of a binary tree, return *the number of nodes where the value of the node is equal to the **average** of the values in its **subtree***.

**Note:**

- The **average** of `n` elements is the **sum** of the `n` elements divided by `n` and **rounded down** to the nearest integer.
- A **subtree** of `root` is a tree consisting of `root` and all of its descendants.

**Example 1:**

!https://assets.leetcode.com/uploads/2022/03/15/image-20220315203925-1.png

```
Input: root = [4,8,5,0,1,null,6]
Output: 5
Explanation:
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2022/03/26/image-20220326133920-1.png

```
Input: root = [1]
Output: 1
Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 1000]`.
- `0 <= Node.val <= 1000`



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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let result = 0;
    
    const traverse = node => {
        if (!node) return [0, 0];
        
        const [leftSum, leftCount] = traverse(node.left);
        const [rightSum, rightCount] = traverse(node.right);
        
        const currSum = node.val + leftSum + rightSum;
        const currCount = 1 + leftCount + rightCount;
        
        if (Math.floor(currSum / currCount) === node.val) result++;
        
        return [currSum, currCount];
    };
    
    traverse(root);
    return result;
};