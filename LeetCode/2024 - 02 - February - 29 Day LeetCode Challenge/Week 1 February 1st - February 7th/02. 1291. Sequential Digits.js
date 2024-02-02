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

/*
**Time Complexity:**

The outer loop runs from 1 to 9, so it has a constant number of iterations (9 iterations). The time complexity of the outer loop is O(1).

The inner while loop runs as long as both **`num`** and **`nextDigit`** are within certain bounds. In the worst case, it continues until **`nextDigit`** reaches 9. The number of iterations in the inner loop is also constant (9 iterations for each outer loop iteration).

Since the number of iterations in both the outer and inner loops is constant, we can express the overall time complexity as O(1).



**Space Complexity:**

The space complexity is determined by the array **`a`** that stores the sequential digits. The size of this array depends on the number of valid sequential digits between **`low`** and **`high`**.

In the worst case, if there are k valid sequential digits, the space complexity would be O(k).

In this specific case, since the number of valid sequential digits is not directly related to the input size (low and high), it's difficult to express the space complexity in terms of input size. However, we can say that it's proportional to the number of valid sequential digits in the specified range.

In conclusion:

- Time Complexity: O(1)
- Space Complexity: O(k) (where k is the number of valid sequential digits in the specified range)
*/
