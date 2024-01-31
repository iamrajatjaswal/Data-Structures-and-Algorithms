/*

Title: 739. Daily Temperatures
URL: https://leetcode.com/problems/daily-temperatures/
Difficulty: Medium
Topics: Array, Stack, Monotonic Stack


**Problem**

Given an array of integers `temperatures` represents the daily temperatures, return *an array* `answer` *such that* `answer[i]` *is the number of days you have to wait after the* `ith` *day to get a warmer temperature*. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

**Example 1:**

```
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

```

**Example 2:**

```
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

```

**Example 3:**

```
Input: temperatures = [30,60,90]
Output: [1,1,0]

```

**Constraints:**

- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100`


**Solution**
*/

/*
  Approach 1
  TC : O(N)
  SC : O(N)
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  for (let i = temperatures.length - 1; i >= 0; --i) {
    while (stack.length > 0 && temperatures[i] >= temperatures[stack[0]]) {
      stack.shift();
    }

    if (stack.length === 0) {
      result[i] = 0;
    } else {
      result[i] = stack[0] - i;
    }

    stack.unshift(i);
  }

  return result;
};

/*
  Approach 2
  TC : O(N)
  SC : O(N)
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; --i) {
    const currTemperature = temperatures[i];

    while (
      stack.length > 0 &&
      currTemperature >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return result;
};
