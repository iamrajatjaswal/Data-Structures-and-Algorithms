/*

Title: 1235. Maximum Profit in Job Scheduling
URL: https://leetcode.com/problems/maximum-profit-in-job-scheduling/
Difficulty: Hard
Topics: Array, Binary Search, Dynamic Programming


**Problem**

We have `n` jobs, where every job is scheduled to be done from `startTime[i]` to `endTime[i]`, obtaining a profit of `profit[i]`.

You're given the `startTime`, `endTime` and `profit` arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time `X` you will be able to start another job that starts at time `X`.

**Example 1:**

!https://assets.leetcode.com/uploads/2019/10/10/sample1_1584.png

```
Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job.
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2019/10/10/sample22_1584.png

```
Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job.
Profit obtained 150 = 20 + 70 + 60.

```

**Example 3:**

!https://assets.leetcode.com/uploads/2019/10/10/sample3_1584.png

```
Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6

```

**Constraints:**

- `1 <= startTime.length == endTime.length == profit.length <= 5 * 104`
- `1 <= startTime[i] < endTime[i] <= 109`
- `1 <= profit[i] <= 104`

**Solution**
*/

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const numJobs = profit.length; // Number of jobs
  const jobs = new Array(numJobs);

  for (let i = 0; i < numJobs; ++i) {
    jobs[i] = [endTime[i], startTime[i], profit[i]];
  }

  jobs.sort((a, b) => a[0] - b[0]);
  const dp = new Array(numJobs + 1).fill(0);

  for (let i = 0; i < numJobs; ++i) {
    const [endTime, startTime, profit] = jobs[i];

    const latestNonConflictJobIndex = upperBound(jobs, i, startTime);
    dp[i + 1] = Math.max(dp[i], dp[latestNonConflictJobIndex] + profit);
  }

  return dp[numJobs];
};

/**
 * @param {number[][]} jobs
 * @param {number} endIndex
 * @param {number} targetTime
 * @return {number}
 */
function upperBound(jobs, endIndex, targetTime) {
  let low = 0;
  let high = endIndex;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (jobs[mid][0] <= targetTime) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}
