/*

Title: 834. Sum of Distances in Tree
URL: https://leetcode.com/problems/sum-of-distances-in-tree/
Difficulty: Hard
Topics: Dynamic Programming, Tree, Depth-First Search, Graph


**Problem**


There is an undirected connected tree with `n` nodes labeled from `0` to `n - 1` and `n - 1` edges.

You are given the integer `n` and the array `edges` where `edges[i] = [ai, bi]` indicates that there is an edge between nodes `ai` and `bi` in the tree.

Return an array `answer` of length `n` where `answer[i]` is the sum of the distances between the `ith` node in the tree and all other nodes.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/07/23/lc-sumdist1.jpg

```
Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
Explanation: The tree is shown above.
We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
equals 1 + 1 + 2 + 2 + 2 = 8.
Hence, answer[0] = 8, and so on.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/07/23/lc-sumdist2.jpg

```
Input: n = 1, edges = []
Output: [0]

```

**Example 3:**

!https://assets.leetcode.com/uploads/2021/07/23/lc-sumdist3.jpg

```
Input: n = 2, edges = [[1,0]]
Output: [1,1]

```

**Constraints:**

- `1 <= n <= 3 * 10^4`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `ai != bi`
- The given input represents a valid tree.


**Solution**

*/
/*

  Approach 1 :: "Depth-First Traversal" :: T→O(n) : S→O(n)
  
  - Time complexity:
    
    `O(n)`, where n is the number of nodes in the tree. Both depth-first traversals require visiting each node once.
    
  - Space complexity:
    
    `O(n)`, as we store the graph representation and arrays to track subtree sizes and distance sums, each of size n.
  
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  const graph = Array(n)
    .fill(0)
    .map(() => []);
  const subtreeCount = Array(n).fill(1);
  const distanceSum = Array(n).fill(0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const postOrder = (node, parent) => {
    for (const child of graph[node]) {
      if (child === parent) continue;
      postOrder(child, node);
      subtreeCount[node] += subtreeCount[child];
      distanceSum[node] += distanceSum[child] + subtreeCount[child];
    }
  };

  const preOrder = (node, parent) => {
    for (const child of graph[node]) {
      if (child === parent) continue;
      distanceSum[child] =
        distanceSum[node] - subtreeCount[child] + (n - subtreeCount[child]);
      preOrder(child, node);
    }
  };

  postOrder(0, -1);
  preOrder(0, -1);

  return distanceSum;
};
