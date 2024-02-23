/*

Title: 787. Cheapest Flights Within K Stops
URL: https://leetcode.com/problems/bitwise-and-of-numbers-range/
Difficulty: Medium
Topics: Dynamic Programming, Depth-First Search, Breadth-First Search, Graph, Heap (Priority Queue), Shortest Path


**Problem**


There are `n` cities connected by some number of flights. You are given an array `flights` where `flights[i] = [fromi, toi, pricei]` indicates that there is a flight from city `fromi` to city `toi` with cost `pricei`.

You are also given three integers `src`, `dst`, and `k`, return ***the cheapest price** from* `src` *to* `dst` *with at most* `k` *stops.* If there is no such route, return **`-1`.

**Example 1:**

!https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-3drawio.png

```
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-1drawio.png

```
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.

```

**Example 3:**

!https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-2drawio.png

```
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph is shown above.
The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.

```

**Constraints:**

- `1 <= n <= 100`
- `0 <= flights.length <= (n * (n - 1) / 2)`
- `flights[i].length == 3`
- `0 <= fromi, toi < n`
- `fromi != toi`
- `1 <= pricei <= 10^4`
- There will not be any multiple flights between two cities.
- `0 <= src, dst, k < n`
- `src != dst`



**Solution**

*/
/*
  Approach 1

  - Time complexity:
    
    O(E∗K)
    
    (E is the number of flights and k is the maximum number of stops.)
    
  - Space complexity:
    
    O(n)
    
    (V is the number of vertices (n) and E is the number of edges.)
*/
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adj = new Map();
  for (const [from, to, price] of flights) {
    if (!adj.has(from)) adj.set(from, []);
    adj.get(from).push([to, price]);
  }

  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  const queue = [[src, 0]];
  let stops = 0;

  while (queue.length && stops <= k) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [node, distance] = queue.shift();

      if (!adj.has(node)) continue;

      for (const [neighbour, price] of adj.get(node)) {
        if (price + distance >= dist[neighbour]) continue;
        dist[neighbour] = price + distance;
        queue.push([neighbour, dist[neighbour]]);
      }
    }
    stops++;
  }

  return dist[dst] === Infinity ? -1 : dist[dst];
};
