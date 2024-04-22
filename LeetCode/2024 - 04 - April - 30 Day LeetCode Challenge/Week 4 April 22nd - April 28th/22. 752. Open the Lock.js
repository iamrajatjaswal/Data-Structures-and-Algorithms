/*

Title: 752. Open the Lock
URL: https://leetcode.com/problems/open-the-lock/
Difficulty: Medium
Topics: Array, Hash Table, String, Breadth-First Search


**Problem**


You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: `'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'`. The wheels can rotate freely and wrap around: for example we can turn `'9'` to be `'0'`, or `'0'` to be `'9'`. Each move consists of turning one wheel one slot.

The lock initially starts at `'0000'`, a string representing the state of the 4 wheels.

You are given a list of `deadends` dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a `target` representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

**Example 1:**

```
Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation:
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".

```

**Example 2:**

```
Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".

```

**Example 3:**

```
Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation: We cannot reach the target without getting stuck.

```

**Constraints:**

- `1 <= deadends.length <= 500`
- `deadends[i].length == 4`
- `target.length == 4`
- target **will not be** in the list `deadends`.
- `target` and `deadends[i]` consist of digits only.


**Solution**

*/
/*
  Approach 1 :: Breadth-first Traversal” :: T→O(N^2) : S→O(N^2)
  
  - Time complexity:
    
    `O(N^2)`, where `N` is the number of digits in the lock (constant 4 in this case), and each digit can have 10 possible values.
    
  - Space complexity:
    
    `O(N^2)`, for the `visit` array and the queues used in BFS.

*/
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const pow10 = [1, 10, 100, 1000];
  const visit = new Array(10000).fill(0); // 0: not visited, 1: visited through forward direction, -1: visited through backward direction, 2: deadends
  deadends.forEach((dead) => {
    visit[parseInt(dead)] = 2;
  });
  const src = 0,
    dest = parseInt(target);
  let steps = 0,
    dir = 1;
  if (visit[src] == 2 || visit[dest] == 2) return -1;
  if (src == dest) return 0;
  let forward = [],
    backward = [];

  forward.push(src);
  visit[src] = 1;
  backward.push(dest);
  visit[dest] = -1;
  while (forward.length > 0 && backward.length > 0) {
    if (forward.length > backward.length) {
      [forward, backward] = [backward, forward];
      dir = -dir;
    }
    steps++;
    const size = forward.length;
    for (let j = 0; j < size; j++) {
      const cur = forward.shift();
      for (let k = 0; k < 4; k++) {
        const p = pow10[k];
        const d = Math.floor(cur / p) % 10;
        for (let i = -1; i <= 1; i += 2) {
          let z = d + i;
          z = z === -1 ? 9 : z === 10 ? 0 : z;
          const next = cur + (z - d) * p;
          if (visit[next] == -dir) return steps;
          if (visit[next] == 0) {
            forward.push(next);
            visit[next] = dir;
          }
        }
      }
    }
  }
  return -1;
};
