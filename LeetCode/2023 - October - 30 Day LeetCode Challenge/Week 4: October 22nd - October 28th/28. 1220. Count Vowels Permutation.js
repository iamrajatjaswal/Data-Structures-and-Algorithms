/*

Given an integer `n`, your task is to count how many strings of length `n` can be formed under the following rules:

- Each character is a lower case vowel (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`)
- Each vowel `'a'` may only be followed by an `'e'`.
- Each vowel `'e'` may only be followed by an `'a'` or an `'i'`.
- Each vowel `'i'` **may not** be followed by another `'i'`.
- Each vowel `'o'` may only be followed by an `'i'` or a `'u'`.
- Each vowel `'u'` may only be followed by an `'a'.`

Since the answer may be too large, return it modulo `10^9 + 7.`

**Example 1:**

```
Input: n = 1
Output: 5
Explanation: All possible strings are: "a", "e", "i" , "o" and "u".

```

**Example 2:**

```
Input: n = 2
Output: 10
Explanation: All possible strings are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".

```

**Example 3:**

```
Input: n = 5
Output: 68
```

**Constraints:**

- `1 <= n <= 2 * 10^4`

*/

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    const MOD = 1e9 + 7;
    
    let a = 1, e = 1, i = 1, o = 1, u = 1;
    
    for (let j = 1; j < n; j++) {
        let a_next = e;
        let e_next = (a + i) % MOD;
        let i_next = (a + e + o + u) % MOD;
        let o_next = (i + u) % MOD;
        let u_next = a;
        
        a = a_next, e = e_next, i = i_next, o = o_next, u = u_next;
    }
    
    return (a + e + i + o + u) % MOD;
}

/*

# **Intuition**

The essence of this problem lies in the transitions between vowels and how they form sequences. Given the constraints, not every vowel can follow every other vowel. This forms a sort of directed graph where each vowel points to the vowels it can be followed by. As we're tasked with counting the number of valid sequences, our intuition guides us to explore paths in this graph, starting from each vowel and expanding based on the transitions allowed.

# **Logic Behind the Solution**

1. **Understanding Transitions**: The entire problem revolves around transitions. For a given vowel, the next character in the sequence can only be certain vowels. For instance, the vowel 'a' can only be followed by 'e'. This forms the backbone of our dynamic programming approach. By understanding these transitions, we can determine the number of sequences of length nn*n* ending in a particular vowel.
2. **Recursive Nature of Problem**: If we want to find the number of sequences of length nn*n* ending in vowel 'a', we don't need to consider all possible sequences of length n−1n-1*n*−1. Instead, we only need to know the number of sequences of length n−1n-1*n*−1 ending in vowels that can precede 'a'. This recursive nature, combined with transitions, is what makes dynamic programming apt for this problem.
3. **State Maintenance**: At each step (or length), we maintain the counts of sequences ending in each vowel. This forms the state of our dynamic programming solution. As we proceed, we update these counts based on the previous state and the transitions allowed.
4. **Linear Time Complexity**: By maintaining state and ensuring that we only consider valid transitions, we ensure that our solution runs in linear time. At each step, we're essentially doing constant work, updating counts for 5 vowels.

# **Approach**

1. **Transition Matrix**: First, we need to understand the transition for each vowel. We can build this based on the rules provided:
    - 'a' can only be followed by 'e'
    - 'e' can be followed by 'a' or 'i'
    - 'i' cannot be followed by another 'i'
    - 'o' can be followed by 'i' or 'u'
    - 'u' can only be followed by 'a'
2. **Dynamic Programming**: We maintain a dynamic programming array for each vowel which will store the count of strings ending with that vowel for a particular length.
    - For n=1n = 1*n*=1, all vowels have a count of 1.
    - For each subsequent length, the count for each vowel is updated based on the previous counts of the other vowels.
    - For example, the count of strings of length ii*i* ending with 'a' will be equal to the count of strings of length i−1i-1*i*−1 ending with 'e', because 'a' can only be followed by 'e'.
3. **Modulo Operation**: Since the answer can be large, we use modulo 109+710^9 + 7109+7 at each step to keep the numbers manageable.
4. **Final Answer**: The final answer will be the sum of counts of all vowels for length nn*n*.



# **Complexity**

- **Time complexity**: O(n)O(n)*O*(*n*)
    - We iterate through the numbers from 1 to nn*n* once, updating the count for each vowel in constant time.
- **Space complexity**: O(1)O(1)*O*(1)
    - We are using a fixed amount of space regardless of the value of nn*n* since we only maintain counts for the 5 vowels.


*/