/*

Title: 1903. Largest Odd Number in String
URL: https://leetcode.com/problems/largest-odd-number-in-string/
Difficulty: Easy
Topics: Math, String, Greedy


**Problem**

You are given a string `num`, representing a large integer. Return *the **largest-valued odd** integer (as a string) that is a **non-empty substring** of* `num`*, or an empty string* `""` *if no odd integer exists*.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

```

**Example 2:**

```
Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".

```

**Example 3:**

```
Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.

```

**Constraints:**

- `1 <= num.length <= 105`
- `num` only consists of digits and does not contain any leading zeros.


**Solution**
*/

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  const week_count = Math.floor(n / 7);
  const remaining_days = n % 7;
  
  let total = ((week_count * (week_count - 1)) / 2) * 7; 
  total += week_count * 28;
  total += ((remaining_days * (remaining_days + 1)) / 2) + (week_count * remaining_days);
  
  return total;
};