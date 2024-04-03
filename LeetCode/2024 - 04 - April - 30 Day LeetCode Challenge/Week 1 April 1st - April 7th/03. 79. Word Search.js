/*

Title: 79. Word Search
URL: https://leetcode.com/problems/word-search/
Difficulty: Medium
Topics: Array, String, Backtracking, Matrix


**Problem**


Given an `m x n` grid of characters `board` and a string `word`, return `true` *if* `word` *exists in the grid*.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/11/04/word2.jpg

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

```

**Example 3:**

!https://assets.leetcode.com/uploads/2020/10/15/word3.jpg

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

```

**Constraints:**

- `m == board.length`
- `n = board[i].length`
- `1 <= m, n <= 6`
- `1 <= word.length <= 15`
- `board` and `word` consists of only lowercase and uppercase English letters.

**Follow up:** Could you use search pruning to make your solution faster with a larger `board`?



**Solution**

*/
/*
  Appraoch 1

  **Time complexity:**

    O(m∗n∗4l)O(m * n * 4^l), where m and n are the dimensions of the grid and l is the length of the word. The 4^l factor represents the maximum number of recursive calls we may have to make for each starting cell.

  **Space complexity:**

    O(l), where l is the length of the word. The space complexity is primarily due to the recursive stack depth during the DFS traversal.
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  const backtrack = (i, j, k) => {
    if (k === word.length) {
      return true;
    }
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word.charAt(k)) {
      return false;
    }

    const temp = board[i][j];
    board[i][j] = "\0";

    const result =
      backtrack(i + 1, j, k + 1) ||
      backtrack(i - 1, j, k + 1) ||
      backtrack(i, j + 1, k + 1) ||
      backtrack(i, j - 1, k + 1);

    board[i][j] = temp;
    return result;
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
