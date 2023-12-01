/*


You have `n` binary tree nodes numbered from `0` to `n - 1` where node `i` has two children `leftChild[i]` and `rightChild[i]`, return `true` if and only if **all** the given nodes form **exactly one** valid binary tree.

If node `i` has no left child then `leftChild[i]` will equal `-1`, similarly for the right child.

Note that the nodes have no values and that we only use the node numbers in this problem.

**Example 1:**

!https://assets.leetcode.com/uploads/2019/08/23/1503_ex1.png

```
Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
Output: true

```

**Example 2:**

!https://assets.leetcode.com/uploads/2019/08/23/1503_ex2.png

```
Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
Output: false

```

**Example 3:**

!https://assets.leetcode.com/uploads/2019/08/23/1503_ex3.png

```
Input: n = 2, leftChild = [1,0], rightChild = [-1,-1]
Output: false

```

**Constraints:**

- `n == leftChild.length == rightChild.length`
- `1 <= n <= 104`
- `1 <= leftChild[i], rightChild[i] <= n - 1`

*/

/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
const validateBinaryTreeNodes = ( n, left, right ) => {
  let parent = Array(n).fill(-1), 
      dfs = i => i >= 0 && --n && dfs(left[i]) & dfs(right[i])
  for ( let i in left ) {
      if ( left[i] >= 0 && parent[left[i]] >= 0 || 
           right[i] >= 0 && parent[right[i]] >= 0 ) return false
      parent[left[i]] = i, parent[right[i]] = i
  }
  return dfs(parent.indexOf(-1)) || !n
}
