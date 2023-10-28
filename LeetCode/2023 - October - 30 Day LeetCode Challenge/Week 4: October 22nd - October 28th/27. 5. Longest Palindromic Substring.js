/*

Given a string `s`, return *the longest palindromic substring*in s.

**Example 1:**

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

```

**Example 2:**

```
Input: s = "cbbd"
Output: "bb"

```

**Constraints:**

- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(i, i);
        let even = expandAroundCenter(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
};

// Example usage
const s = "babad";
const result = longestPalindrome(s);
console.log("Longest Palindromic Substring: " + result);

/*

# **Intuition**

The given code is an implementation of the "Expand Around Center" approach for finding the longest palindromic substring in a given string. This approach works by iterating through each character in the string and expanding around it to check for palindromes. It takes advantage of the fact that a palindrome can be centered around a single character (in the case of odd-length palindromes) or between two characters (in the case of even-length palindromes). By expanding from each character, it identifies the longest palindrome.

# **Approach**

1. The `expandAroundCenter` function takes a string `s` and two indices `left` and `right`. It starts from the characters at these indices and expands outwards while checking if the characters are the same. When different characters are encountered, the function returns the substring between `left` and `right`, which is a palindrome.
2. The `longestPalindrome` function initializes an empty string longest to keep track of the `longest` palindromic substring found.
3. It iterates through the characters of the input string s. For each character, it calls `expandAroundCenter` twice, once assuming an odd-length palindrome (with the character as the center) and once assuming an even-length palindrome (with the character and the next character as the center).
4. If the length of the palindrome found (either odd or even) is greater than the length of the `longest` palindrome found so far, it updates the `longest` substring.
5. After iterating through all characters, it returns the longest palindromic substring found.


# **Complexity**

- Time complexity:

The time complexity of this code is O(n^2), where 'n' is the length of the input string 's'. This is because, in the worst case, for each of the 'n' characters in 's', we may expand to both the left and the right, resulting in a quadratic time complexity.

- Space complexity:

The space complexity of this code is O(1) because it doesn't use any additional data structures that grow with the input size. The space is primarily used for the variables and temporary substrings, which don't depend on the input size.


*/