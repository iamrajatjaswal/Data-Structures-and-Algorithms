/*

Title: 935. Knight Dialer
URL: https://leetcode.com/problems/knight-dialer/
Difficulty: Medium
Topics: Dynamic Programming


**Problem**

The chess knight has a **unique movement**, it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an **L**). The possible movements of chess knight are shown in this diagaram:

A chess knight can move as indicated in the chess diagram below:

!https://assets.leetcode.com/uploads/2020/08/18/chess.jpg

We have a chess knight and a phone pad as shown below, the knight **can only stand on a numeric cell** (i.e. blue cell).

!https://assets.leetcode.com/uploads/2020/08/18/phone.jpg

Given an integer `n`, return how many distinct phone numbers of length `n` we can dial.

You are allowed to place the knight **on any numeric cell** initially and then you should perform `n - 1` jumps to dial a number of length `n`. All jumps should be **valid** knight jumps.

As the answer may be very large, **return the answer modulo** `109 + 7`.

**Example 1:**

```
Input: n = 1
Output: 10
Explanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.

```

**Example 2:**

```
Input: n = 2
Output: 20
Explanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]

```

**Example 3:**

```
Input: n = 3131
Output: 136006598
Explanation: Please take care of the mod.

```

**Constraints:**

- `1 <= n <= 5000`



**Solution**

*/
/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
    const cap = (x) => x % (10 ** 9 + 7)
    const jumps = {
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [3, 9, 0],
        6: [1, 7, 0],
        7: [2,6],
        8: [1, 3],
        9: [2, 4],
        0: [4, 6]
    }

    let prev = Array.from(Array(10), _=>1)
    let cur = Array.from(Array(10), _=>0)

    for (let k=2; k<=n; k++) {
        for (let i=0; i<=9; i++) {
            if (i===5) continue
            cur[i] = cap(jumps[i].reduce((acc, c)=> {
                return cap(acc + prev[c])
            }, 0))
        }
        prev = [...cur]
    }
    const sum = prev.reduce((acc, cur)=>cap(acc+cur), 0)
    return cap(sum)
};