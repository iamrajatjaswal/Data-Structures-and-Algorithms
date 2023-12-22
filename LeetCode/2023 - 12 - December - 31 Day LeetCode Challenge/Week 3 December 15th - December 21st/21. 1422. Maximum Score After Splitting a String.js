/*

Title: 1637. Widest Vertical Area Between Two Points Containing No Points
URL: https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
Difficulty: Medium
Topics: Array, Sorting


**Problem**

Given `n` `points` on a 2D plane where `points[i] = [xi, yi]`, Return *the **widest vertical area** between two points such that no points are inside the area.*

A **vertical area** is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The **widest vertical area** is the one with the maximum width.

Note that points **on the edge** of a vertical area **are not** considered included in the area.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/09/19/points3.png

```
Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation: Both the red and the blue area are optimal.

```

**Example 2:**

```
Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
Output: 3

```

**Constraints:**

- `n == points.length`
- `2 <= n <= 105`
- `points[i].length == 2`
- `0 <= xi, yi <= 109`


**Solution**
*/

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(arr, key) {
  let ans = Infinity;
      let fin;

      for (let i = 0; i < arr.length; ++i) {
          for (let j = 0; j < arr.length; ++j) {
              if (i !== j) {
                  const sum = arr[i] + arr[j];
                  ans = Math.min(ans, sum);
              }
          }
      }

      fin = key - ans;
      if(fin>=0){
      return fin;
      }
      else{
          return key;
      }
};