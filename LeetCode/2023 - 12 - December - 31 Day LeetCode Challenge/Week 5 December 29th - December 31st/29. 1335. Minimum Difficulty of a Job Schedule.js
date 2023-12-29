/*

Title: 1335. Minimum Difficulty of a Job Schedule
URL: https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/
Difficulty: Hard
Topics: Array, Dynamic Programming


**Problem**

You want to schedule a list of jobs in `d` days. Jobs are dependent (i.e To work on the `ith` job, you have to finish all the jobs `j` where `0 <= j < i`).

You have to finish **at least** one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the `d` days. The difficulty of a day is the maximum difficulty of a job done on that day.

You are given an integer array `jobDifficulty` and an integer `d`. The difficulty of the `ith` job is `jobDifficulty[i]`.

Return *the minimum difficulty of a job schedule*. If you cannot find a schedule for the jobs return `-1`.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/01/16/untitled.png

```
Input: jobDifficulty = [6,5,4,3,2,1], d = 2
Output: 7
Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
Second day you can finish the last job, total difficulty = 1.
The difficulty of the schedule = 6 + 1 = 7

```

**Example 2:**

```
Input: jobDifficulty = [9,9,9], d = 4
Output: -1
Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.

```

**Example 3:**

```
Input: jobDifficulty = [1,1,1], d = 3
Output: 3
Explanation: The schedule is one job per day. total difficulty will be 3.

```

**Constraints:**

- `1 <= jobDifficulty.length <= 300`
- `0 <= jobDifficulty[i] <= 1000`
- `1 <= d <= 10`


**Solution**
*/

/*
 Recursive Solution
*/
/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  if (jobDifficulty.length < d) {
    return -1;
  }
  const totalSum = jobDifficulty.reduce((acc, val) => acc + val, 0);
  if (totalSum === 0) {
    return 0;
  }
  return helper(jobDifficulty, d, 0);
};

function helper(jd, daysLeft, idx) {
  const length = jd.length;
  if (daysLeft === 1) {
    return Math.max(...jd.slice(idx));
  }

  let maxDifficulty = jd[idx];
  daysLeft--;
  const stop = length - idx - daysLeft + 1;

  let result = Infinity;
  for (let i = 1; i < stop; i++) {
    maxDifficulty = Math.max(maxDifficulty, jd[idx + i - 1]);
    const other = helper(jd, daysLeft, idx + i);
    result = Math.min(result, other + maxDifficulty);
  }
  return result;
}

/*
 Memoized Solution
*/
/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  if (jobDifficulty.length < d) {
    return -1;
  }
  const totalSum = jobDifficulty.reduce((acc, val) => acc + val, 0);
  if (totalSum === 0) {
    return 0;
  }
  const memo = Array.from({ length: d + 1 }, () =>
    Array(jobDifficulty.length).fill(0)
  );
  helper(jobDifficulty, d, 0, memo);

  return memo[d][0];
};

function helper(jd, daysLeft, idx, memo) {
  const length = jd.length;
  if (memo[daysLeft][idx] !== 0) {
    return;
  }
  if (daysLeft === 1) {
    const num = Math.max(...jd.slice(idx));
    memo[daysLeft][idx] = num;
    return;
  }
  let maxDifficulty = jd[idx];
  daysLeft--;
  const stop = length - idx - daysLeft + 1;

  let res = Infinity;
  for (let i = 1; i < stop; i++) {
    maxDifficulty = Math.max(maxDifficulty, jd[idx + i - 1]);
    let other = memo[daysLeft][idx + i];
    if (other === 0) {
      helper(jd, daysLeft, idx + i, memo);
      other = memo[daysLeft][idx + i];
    }
    res = Math.min(res, other + maxDifficulty);
  }
  memo[daysLeft + 1][idx] = res;
}
