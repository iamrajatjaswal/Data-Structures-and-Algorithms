/*

Title: 997. Find the Town Judge
URL: https://leetcode.com/problems/bitwise-and-of-numbers-range/
Difficulty: Easy
Topics: Array, Hash Table, Graph


**Problem**


In a town, there are `n` people labeled from `1` to `n`. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties **1** and **2**.

You are given an array `trust` where `trust[i] = [ai, bi]` representing that the person labeled `ai` trusts the person labeled `bi`. If a trust relationship does not exist in `trust` array, then such a trust relationship does not exist.

Return *the label of the town judge if the town judge exists and can be identified, or return* `-1` *otherwise*.

**Example 1:**

```
Input: n = 2, trust = [[1,2]]
Output: 2

```

**Example 2:**

```
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3

```

**Example 3:**

```
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

```

**Constraints:**

- `1 <= n <= 1000`
- `0 <= trust.length <= 10^4`
- `trust[i].length == 2`
- All the pairs of `trust` are **unique**.
- `ai != bi`
- `1 <= ai, bi <= n`



**Solution**

*/
/*
  Approach 1

  - Time complexity:
    
    O(n)
    
  - Space complexity:
    
    O(n)
*/
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const inDegree = new Array(N + 1).fill(0);
  const outDegree = new Array(N + 1).fill(0);
  for (let a of trust) {
    outDegree[a[0]]++;
    inDegree[a[1]]++;
  }
  for (let i = 1; i <= N; ++i) {
    if (inDegree[i] === N - 1 && outDegree[i] === 0) return i;
  }
  return -1;
};
