/*

Title: 1750. Minimum Length of String After Deleting Similar Ends
URL: https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/
Difficulty: Medium
Topics: Two Pointers, String


**Problem**


Given a string `s` consisting only of characters `'a'`, `'b'`, and `'c'`. You are asked to apply the following algorithm on the string any number of times:

1. Pick a **non-empty** prefix from the string `s` where all the characters in the prefix are equal.
2. Pick a **non-empty** suffix from the string `s` where all the characters in this suffix are equal.
3. The prefix and the suffix should not intersect at any index.
4. The characters from the prefix and suffix must be the same.
5. Delete both the prefix and the suffix.

Return *the **minimum length** of* `s` *after performing the above operation any number of times (possibly zero times)*.

**Example 1:**

```
Input: s = "ca"
Output: 2
Explanation:You can't remove any characters, so the string stays as is.

```

**Example 2:**

```
Input: s = "cabaabac"
Output: 0
Explanation: An optimal sequence of operations is:
- Take prefix = "c" and suffix = "c" and remove them, s = "abaaba".
- Take prefix = "a" and suffix = "a" and remove them, s = "baab".
- Take prefix = "b" and suffix = "b" and remove them, s = "aa".
- Take prefix = "a" and suffix = "a" and remove them, s = "".
```

**Example 3:**

```
Input: s = "aabccabba"
Output: 3
Explanation: An optimal sequence of operations is:
- Take prefix = "aa" and suffix = "a" and remove them, s = "bccabb".
- Take prefix = "b" and suffix = "bb" and remove them, s = "cca".

```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` only consists of characters `'a'`, `'b'`, and `'c'`.


**Solution**

*/
/*
  Approach 1

  - Time complexity:O(n)
  
  - Space complexity:O(1)
  
*/
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let l = 0,
    r = s.length - 1;
  while (l < r && s[l] === s[r]) {
    let ch = s[l];
    while (l <= r && s[l] === ch) l++;
    while (l <= r && s[r] === ch) r--;
  }
  return r - l + 1;
};
