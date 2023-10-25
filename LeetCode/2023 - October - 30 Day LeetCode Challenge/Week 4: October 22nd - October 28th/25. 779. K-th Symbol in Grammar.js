/*

We build a table of `n` rows (**1-indexed**). We start by writing `0` in the `1st` row. Now in every subsequent row, we look at the previous row and replace each occurrence of `0` with `01`, and each occurrence of `1` with `10`.

- For example, for `n = 3`, the `1st` row is `0`, the `2nd` row is `01`, and the `3rd` row is `0110`.

Given two integer `n` and `k`, return the `kth` (**1-indexed**) symbol in the `nth` row of a table of `n` rows.

**Example 1:**

```
Input: n = 1, k = 1
Output: 0
Explanation: row 1:0
```

**Example 2:**

```
Input: n = 2, k = 1
Output: 0
Explanation:
row 1: 0
row 2:01

```

**Example 3:**

```
Input: n = 2, k = 2
Output: 1
Explanation:
row 1: 0
row 2: 01
```

**Constraints:**

- `1 <= n <= 30`
- `1 <= k <= 2n - 1`

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if (n === 1) return 0;
    let length = 1 << (n - 2);
    if (k <= length) return kthGrammar(n - 1, k);
    else return 1 - kthGrammar(n - 1, k - length);
};


/*

# **Solution 1: Recursive Approach**

## **Intuition**

The initial thought on solving the problem revolves around understanding the pattern of sequence generation as described in the problem statement. As the sequence grows by replacing 0 with 01 and 1 with 10, we can observe a recursive relationship between the nth row and the (n-1)th row.

## **Approach**

Our approach is to leverage the recursive pattern observed. The length of the nth row is double the length of the (n-1)th row. If k is in the first half of the nth row, the symbol at position k in the nth row is the same as the symbol at position k in the (n-1)th row. If k is in the second half of the nth row, the symbol at position k in the nth row is the opposite of the symbol at position (k - length of (n-1)th row) in the (n-1)th row.


## **Complexity**

- Time complexity: The time complexity is O(n) as there is a single recursive call for every level of n.
- Space complexity: The space complexity is also O(n) due to the stack space used by the recursive calls.

*/