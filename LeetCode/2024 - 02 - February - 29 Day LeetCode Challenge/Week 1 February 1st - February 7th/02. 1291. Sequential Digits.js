/*

Title: 1291. Sequential Digits
URL: https://leetcode.com/problems/sequential-digits/
Difficulty: Medium
Topics: Array, Greedy, Sorting


**Problem**


An integer has *sequential digits* if and only if each digit in the number is one more than the previous digit.

Return a **sorted** list of all the integers in the range `[low, high]` inclusive that have sequential digits.

**Example 1:**

```
Input: low = 100, high = 300
Output: [123,234]

```

**Example 2:**

```
Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]

```

**Constraints:**

- `10 <= low <= high <= 10^9`



**Solution**
*/

/*
  Approach 
  TC : O(nlogn)
  SC : O(n)
*/

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const a = [];

  for (let i = 1; i <= 9; ++i) {
    let num = i;
    let nextDigit = i + 1;

    while (num <= high && nextDigit <= 9) {
      num = num * 10 + nextDigit;
      if (low <= num && num <= high) {
        a.push(num);
      }
      ++nextDigit;
    }
  }

  a.sort((a, b) => a - b);
  return a;
};
