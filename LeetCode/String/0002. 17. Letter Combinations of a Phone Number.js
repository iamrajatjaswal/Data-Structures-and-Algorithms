/*

Title: 17. Letter Combinations of a Phone Number
URL: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
Difficulty: Medium
Topics: Hash Table, String, Backtracking


**Problem**

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

!https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png

**Example 1:**

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

```

**Example 2:**

```
Input: digits = ""
Output: []

```

**Example 3:**

```
Input: digits = "2"
Output: ["a","b","c"]

```

**Constraints:**

- `0 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`.


**Solution**
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const n = digits.length;
  const output = [];
  if (n === 0) return output;

  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  var generateAll = function (curr, ind, n, map, digits, output) {
    if (ind === n) {
      output.push(curr);
      return;
    }

    for (char of map[digits[ind]]) {
      generateAll(curr + char, ind + 1, n, map, digits, output);
    }
  };

  generateAll("", 0, n, map, digits, output);

  return output;
};


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinationsChatGPTSolution = function(digits) {
  if (!digits || digits.length === 0) {
      return [];
  }

  const digitMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
  };

  const result = [];

  function backtrack(index, currentCombination) {
      if (index === digits.length) {
          result.push(currentCombination);
          return;
      }

      const currentDigit = digits[index];
      const letters = digitMap[currentDigit];

      for (const letter of letters) {
          backtrack(index + 1, currentCombination + letter);
      }
  }

  backtrack(0, '');

  return result;
};


const digits = "23";
// const output = letterCombinations(digits);
const output = letterCombinationsChatGPTSolution(digits);
console.log(output);

