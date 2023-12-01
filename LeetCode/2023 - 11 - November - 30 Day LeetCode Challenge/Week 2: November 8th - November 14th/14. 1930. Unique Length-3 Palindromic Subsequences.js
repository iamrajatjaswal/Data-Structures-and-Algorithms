/*

Title: 1930. Unique Length-3 Palindromic Subsequences
URL: https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
Difficulty: Medium
Topics: Hash Table, String, Prefix Sum


**Problem**

Given a string `s`, return *the number of **unique palindromes of length three** that are a **subsequence** of* `s`.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted **once**.

A **palindrome** is a string that reads the same forwards and backwards.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

- For example, `"ace"` is a subsequence of `"abcde"`.

**Example 1:**

```
Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")

```

**Example 2:**

```
Input: s = "adc"
Output: 0
Explanation: There are no palindromic subsequences of length 3 in "adc".

```

**Example 3:**

```
Input: s = "bbcbaba"
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- "bbb" (subsequence of "bbcbaba")
- "bcb" (subsequence of "bbcbaba")
- "bab" (subsequence of "bbcbaba")
- "aba" (subsequence of "bbcbaba")

```

**Constraints:**

- `3 <= s.length <= 105`
- `s` consists of only lowercase English letters.


**Solution**
*/

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const c = 'abcdefghijklmnopqrstuvwxyz';
        let a = 0, t = 0;

        for (const x of c) {
            const l = s.indexOf(x);
            if (l === -1) {
                continue;
            }
            const r = s.lastIndexOf(x);
            if (l >= r) {
                continue;
            }

            const v = new Array(128).fill(false);
            t = 0;
            for (let i = l + 1; i < r; i++) {
                if (!v[s.charCodeAt(i)]) {
                    v[s.charCodeAt(i)] = true;
                    t++;
                    if (t === 26) {
                        break;
                    }
                }
            }
            a += t;
        }
        return a;
};