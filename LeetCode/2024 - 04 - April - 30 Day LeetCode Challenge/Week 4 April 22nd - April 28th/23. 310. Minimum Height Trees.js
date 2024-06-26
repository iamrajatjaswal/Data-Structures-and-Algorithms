/*

Title: 310. Minimum Height Trees
URL: https://leetcode.com/problems/minimum-height-trees/
Difficulty: Medium
Topics: Depth-First Search, Breadth-First Search, Graph, Topological Sort


**Problem**


A tree is an undirected graph in which any two vertices are connected by *exactly* one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of `n` nodes labelled from `0` to `n - 1`, and an array of `n - 1` `edges` where `edges[i] = [ai, bi]` indicates that there is an undirected edge between the two nodes `ai` and `bi` in the tree, you can choose any node of the tree as the root. When you select a node `x` as the root, the result tree has height `h`. Among all possible rooted trees, those with minimum height (i.e. `min(h)`)  are called **minimum height trees** (MHTs).

Return *a list of all **MHTs'** root labels*. You can return the answer in **any order**.

The **height** of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/09/01/e1.jpg

```
Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/09/01/e2.jpg

```
Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]

```

**Constraints:**

- `1 <= n <= 2 * 10^4`
- `edges.length == n - 1`
- `0 <= ai, bi < n`
- `ai != bi`
- All the pairs `(ai, bi)` are distinct.
- The given input is **guaranteed** to be a tree and there will be **no repeated** edges.


**Solution**

*/
/*
  Approach 1 :: "Topological sorting" approach :: T→O(n) : S→O(n)
  
  - Time complexity:
    - The traversal through the edges array takes `O(n)` time.
    - The while loop processing nodes layer by layer takes `O(n)` time in the worst case.
    - Overall, the time complexity is `O(n)`.
    
  - Space complexity:
    - The arrays `counts`, `links`, and `dists` each require `O(n)` space.
    - The queue can have at most `O(n)` elements.
    - The result list may contain `O(n)` elements in the worst case.
    - Overall, the space complexity is `O(n)`.

*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const counts = new Array(n).fill(0);
  const links = new Array(n).fill(0);

  for (const edge of edges) {
    links[edge[0]] ^= edge[1];
    counts[edge[0]]++;
    links[edge[1]] ^= edge[0];
    counts[edge[1]]++;
  }

  const Qu = [];
  const dists = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (counts[i] === 1) Qu.push(i);
  }

  let stp = 1;
  while (Qu.length > 0) {
    const size = Qu.length;
    for (let j = 0; j < size; j++) {
      const tmp = Qu.shift();
      links[links[tmp]] ^= tmp;
      counts[links[tmp]]--;
      if (counts[links[tmp]] === 1) {
        dists[links[tmp]] = Math.max(stp, dists[links[tmp]]);
        Qu.push(links[tmp]);
      }
    }
    stp++;
  }

  const maxDist = Math.max(...dists);
  const res = [];
  for (let i = 0; i < n; i++) {
    if (dists[i] === maxDist) res.push(i);
  }

  return res;
};
