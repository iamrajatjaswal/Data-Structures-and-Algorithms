/*

We build a table of `n` rows (**1-indexed**). We start by writing `0` in the `1st` row. Now in every subsequent row, we look at the previous row and replace each occurrence of `0` with `01`, and each occurrence of `1` with `10`.

- For example, for `n = 3`, the `1st` row is `0`, the `2nd` row is `01`, and the `3rd` row is `0110`.

Given two integer `n` and `k`, return the `kth` (**1-indexed**) symbol in the `nth` row of a table of `n` rows.

**Example 1:**

```
Input: n = 1, k = 1
Output: 0
Explanation: row 1:0
```

**Example 2:**

```
Input: n = 2, k = 1
Output: 0
Explanation:
row 1: 0
row 2:01

```

**Example 3:**

```
Input: n = 2, k = 2
Output: 1
Explanation:
row 1: 0
row 2: 01
```

**Constraints:**

- `1 <= n <= 30`
- `1 <= k <= 2n - 1`

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
 * @return {number[]}
 */
function largestValues(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        let curr_level_size = queue.length;
        let max_val = Number.MIN_SAFE_INTEGER;
        
        for (let i = 0; i < curr_level_size; i++) {
            const node = queue.shift();
            max_val = Math.max(max_val, node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(max_val);
    }
    
    return result;
}


/*


# **Intuition**

When presented with this problem, the immediate thought is to traverse through the tree level by level. This is because we need to determine the maximum value in each row. Level order traversal, also known as breadth-first search (BFS) for trees, is the ideal strategy for this. Using a queue, we can explore each level of the tree one by one and capture the maximum value for each.

# **Approach**

1. **Initialization**: Begin with initializing a queue and adding the root node to it. This queue will help in level order traversal.
2. **Level-wise Traversal**: As long as the queue is not empty, we keep on processing nodes. For each level, we will calculate its size (i.e., the number of nodes in the current level). This helps in segregating nodes of different levels.
3. **Capture Maximum**: For each level, initialize a variable `max_val` with the smallest possible integer. As we process each node in the current level, we update `max_val` to be the maximum between the node's value and the current `max_val`.
4. **Child Processing**: After processing a node, we add its left and right children (if they exist) to the queue for the next level's processing.
5. **Result Update**: Once all nodes of a level are processed, the maximum value for that level (`max_val`) is added to the result list.



# **Complexity**

- **Time complexity**: O(n)O(n)*O*(*n*). Each node is processed once, and the maximum value at each level is determined in constant time. So, the overall time taken is linear with respect to the number of nodes.
- **Space complexity**: O(n)O(n)*O*(*n*). In the worst case, the queue can hold all leaf nodes. In a balanced binary tree, the last level can have n/2n/2*n2 nodes. Thus, the space complexity is linear.


*/