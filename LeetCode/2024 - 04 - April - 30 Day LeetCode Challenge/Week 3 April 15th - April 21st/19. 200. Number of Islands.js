/*

Title: 200. Number of Islands
URL: https://leetcode.com/problems/number-of-islands/
Difficulty: Medium
Topics: Array, Depth-First Search, Breadth-First Search, Union Find, Matrix


**Problem**





**Solution**

*/
/*
  Approach 1 :: Breadth-first Traversal” :: T→O(M x N) : S→O(M x N)
  
  - Time complexity:
    
    `O(M x N)`, where `M` is the number of rows and `N` is the number of columns in the grid. We visit each cell once.
    
- Space complexity:
    
    `O(M × N)`, considering the worst-case scenario where the entire grid is filled with `'1's`, and the call stack reaches its maximum depth due to recursive BFS calls.
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length || !grid[0].length) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  const dfs = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] !== "1"
    )
      return;
    grid[row][col] = "0";
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        dfs(row, col);
        islands++;
      }
    }
  }

  return islands;
};
