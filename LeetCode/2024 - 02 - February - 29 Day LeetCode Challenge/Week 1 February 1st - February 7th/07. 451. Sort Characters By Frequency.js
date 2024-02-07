/*

Title: 451. Sort Characters By Frequency
URL: https://leetcode.com/problems/sort-characters-by-frequency/
Difficulty: Medium
Topics: Hash Table, String, Sorting, Heap (Priority Queue), Bucket Sort, Counting


**Problem**


Given a string `s`, sort it in **decreasing order** based on the **frequency** of the characters. The **frequency** of a character is the number of times it appears in the string.

Return *the sorted string*. If there are multiple answers, return *any of them*.

**Example 1:**

```
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

```

**Example 2:**

```
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

```

**Example 3:**

```
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

```

**Constraints:**

- `1 <= s.length <= 5 * 10^5`
- `s` consists of uppercase and lowercase English letters and digits.


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
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const counter = new Map();
  for (const char of s) {
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  const pq = Array.from(counter.entries());
  pq.sort((a, b) => b[1] - a[1]);

  let result = "";
  for (const [char, freq] of pq) {
    result += char.repeat(freq);
  }

  return result;
};

/*
  Approach 2
*/

var frequencySort = function (s) {
  const mp = new Map();
  for (const char of s) {
    mp.set(char, (mp.get(char) || 0) + 1);
  }

  const r = new Map([...mp.entries()].sort((a, b) => b[1] - a[1]));
  let ss = "";
  for (const [char, freq] of r.entries()) {
    ss += char.repeat(freq);
  }

  return ss;
};
