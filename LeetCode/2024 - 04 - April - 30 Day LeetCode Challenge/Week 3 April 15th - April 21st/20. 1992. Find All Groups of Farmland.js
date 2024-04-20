/*

Title: 1992. Find All Groups of Farmland
URL: https://leetcode.com/problems/find-all-groups-of-farmland/
Difficulty: Medium
Topics: Array, Depth-First Search, Breadth-First Search, Matrix


**Problem**


You are given a **0-indexed** `m x n` binary matrix `land` where a `0` represents a hectare of forested land and a `1` represents a hectare of farmland.

To keep the land organized, there are designated rectangular areas of hectares that consist **entirely** of farmland. These rectangular areas are called **groups**. No two groups are adjacent, meaning farmland in one group is **not** four-directionally adjacent to another farmland in a different group.

`land` can be represented by a coordinate system where the top left corner of `land` is `(0, 0)` and the bottom right corner of `land` is `(m-1, n-1)`. Find the coordinates of the top left and bottom right corner of each **group** of farmland. A **group** of farmland with a top left corner at `(r1, c1)` and a bottom right corner at `(r2, c2)` is represented by the 4-length array `[r1, c1, r2, c2].`

Return *a 2D array containing the 4-length arrays described above for each **group** of farmland in* `land`*. If there are no groups of farmland, return an empty array. You may return the answer in **any order***.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-23-15-copy-of-diagram-drawio-diagrams-net.png

```
Input: land = [[1,0,0],[0,1,1],[0,1,1]]
Output: [[0,0,0,0],[1,1,2,2]]
Explanation:
The first group has a top left corner at land[0][0] and a bottom right corner at land[0][0].
The second group has a top left corner at land[1][1] and a bottom right corner at land[2][2].

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-30-26-copy-of-diagram-drawio-diagrams-net.png

```
Input: land = [[1,1],[1,1]]
Output: [[0,0,1,1]]
Explanation:
The first group has a top left corner at land[0][0] and a bottom right corner at land[1][1].

```

**Example 3:**

!https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-32-24-copy-of-diagram-drawio-diagrams-net.png

```
Input: land = [[0]]
Output: []
Explanation:
There are no groups of farmland.

```

**Constraints:**

- `m == land.length`
- `n == land[i].length`
- `1 <= m, n <= 300`
- `land` consists of only `0`'s and `1`'s.
- Groups of farmland are **rectangular** in shape.


**Solution**

*/
/*
  Approach 1 :: Depth-first Traversal” :: T→O(M x N) : S→O(K)
  
  - Time complexity:
    
    `O(M×N)`, where `M`is the number of rows and `N` is the number of columns in the land matrix. We traverse each cell once.
    
  - Space complexity:
    
    `O(K)`, where `K` is the number of groups of farmland. We store the coordinates of each group in the `result` list.
*/
/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  const result = [];
  const m = land.length;
  const n = land[0].length;

  const findFarmlandCoordinates = (row, col) => {
    const coordinates = [row, col];
    let r = row,
      c = col;

    while (r < m && land[r][col] === 1) r++;
    while (c < n && land[row][c] === 1) c++;

    coordinates.push(r - 1, c - 1);

    for (let i = row; i <= r - 1; i++) {
      for (let j = col; j <= c - 1; j++) {
        land[i][j] = 0;
      }
    }

    return coordinates;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] === 1) {
        result.push(findFarmlandCoordinates(i, j));
      }
    }
  }

  return result;
};
