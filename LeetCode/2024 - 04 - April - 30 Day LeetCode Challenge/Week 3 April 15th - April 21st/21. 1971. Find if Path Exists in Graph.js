/*

Title: 1971. Find if Path Exists in Graph
URL: https://leetcode.com/problems/find-if-path-exists-in-graph/
Difficulty: Easy
Topics: Depth-First Search, Breadth-First Search, Union Find, Graph


**Problem**


There is a **bi-directional** graph with `n` vertices, where each vertex is labeled from `0` to `n - 1` (**inclusive**). The edges in the graph are represented as a 2D integer array `edges`, where each `edges[i] = [ui, vi]` denotes a bi-directional edge between vertex `ui` and vertex `vi`. Every vertex pair is connected by **at most one** edge, and no vertex has an edge to itself.

You want to determine if there is a **valid path** that exists from vertex `source` to vertex `destination`.

Given `edges` and the integers `n`, `source`, and `destination`, return `true` *if there is a **valid path** from* `source` *to* `destination`*, or* `false` *otherwise.*

**Example 1:**

!https://assets.leetcode.com/uploads/2021/08/14/validpath-ex1.png

```
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/08/14/validpath-ex2.png

```
Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.

```

**Constraints:**

- `1 <= n <= 2 * 10^5`
- `0 <= edges.length <= 2 * 10^5`
- `edges[i].length == 2`
- `0 <= ui, vi <= n - 1`
- `ui != vi`
- `0 <= source, destination <= n - 1`
- There are no duplicate edges.
- There are no self edges.


**Solution**

*/
/*
  Approach 1 :: Depth-first Traversal” :: T→O(M x N) : S→O(K)
  
  - **Time Complexity:**
    
    The time complexity is `O(n + E)`, where n is the number of vertices and E is the number of edges. This is because we traverse each vertex once and iterate through the edges array to update visited vertices.
    
  - **Space Complexity:**
      
      The space complexity is `O(n)` for the visited array and O(E) for storing the edges information, leading to a total space complexity of `O(n + E)`.
      

  Overall, this solution efficiently determines the existence of a valid path from the source to the destination in the given bi-directional graph.

*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (n === 1) return true; // Special case where there is only one vertex
  let visited = new Array(n).fill(false);
  visited[source] = true;
  let flag = true;
  while (flag) {
    flag = false;
    for (const edge of edges) {
      if (visited[edge[0]] !== visited[edge[1]]) {
        visited[edge[0]] = true;
        visited[edge[1]] = true;
        flag = true;
      }
      if (visited[destination]) return true;
    }
  }
  return false;
};
