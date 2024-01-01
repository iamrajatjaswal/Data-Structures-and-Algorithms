/*

Title: 455. Assign Cookies
URL: https://-leetcode.com/problems/assign-cookies/
Difficulty: Hard
Topics: Array, Two Pointer, Greedy, Sorting


**Problem**

Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child `i` has a greed factor `g[i]`, which is the minimum size of a cookie that the child will be content with; and each cookie `j` has a size `s[j]`. If `s[j] >= g[i]`, we can assign the cookie `j` to the child `i`, and the child `i` will be content. Your goal is to maximize the number of your content children and output the maximum number.

**Example 1:**

```
Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.

```

**Example 2:**

```
Input: g = [1,2], s = [1,2,3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
You have 3 cookies and their sizes are big enough to gratify all of the children,
You need to output 2.

```

**Constraints:**

- `1 <= g.length <= 3 * 104`
- `0 <= s.length <= 3 * 104`
- `1 <= g[i], s[j] <= 231 - 1`


**Solution**
*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const cookiesNums = s.length;
  if (cookiesNums === 0) return 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let maxNum = 0;
  let cookieIndex = cookiesNums - 1;
  let childIndex = g.length - 1;
  while (cookieIndex >= 0 && childIndex >= 0) {
    if (s[cookieIndex] >= g[childIndex]) {
      maxNum++;
      cookieIndex--;
      childIndex--;
    } else {
      childIndex--;
    }
  }
  return maxNum;
};

/*
     My Best Solution
     TC -> O(N logN)
     The dominant factor in the time complexity is the sorting step for both arrays g and s. 
     Therefore, the time complexity is determined by the sorting, which is O(n log n) for each 
     array. After sorting, the while loop iterates through both arrays once. So, the overall time 
     complexity is O(n log n), where n is the length of the larger of the two arrays.

     SC -> O(N)
     The space complexity is primarily due to the sorting. The sort method typically uses 
     O(log n) space for the sorting algorithm. Apart from that, the algorithm uses a constant amount of space for the loop variables i and j. Therefore, the overall space complexity is O
     (log n).
*/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0; // child represented by i
  let j = 0; // cookie represneted by j
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i;
};
