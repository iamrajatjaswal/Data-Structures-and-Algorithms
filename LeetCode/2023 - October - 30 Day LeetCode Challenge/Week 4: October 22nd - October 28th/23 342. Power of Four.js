/*

Given an integer `n`, return *`true` if it is a power of four. Otherwise, return `false`*.

An integer `n` is a power of four, if there exists an integer `x` such that `n == 4x`.

**Example 1:**

```
Input: n = 16
Output: true

```

**Example 2:**

```
Input: n = 5
Output: false

```

**Example 3:**

```
Input: n = 1
Output: true

```

**Constraints:**

- `231 <= n <= 231 - 1`

**Follow up:**

Could you solve it without loops/recursion?

*/

// Approach 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n > 0 && (n & (n - 1)) === 0) {
        let zero_count = 0;
        while (n > 1) {
            zero_count++;
            n >>= 1;
        }
        return zero_count % 2 === 0;
    }
    return false;
};




/*

# **Approach**

## **First Approach:**

1. **Power of Two Check**: Before checking if a number is a power of four, it is essential to ensure it's a power of two. Why? Because every power of four is a power of two, but not vice versa. This can be checked by the expression nn*n* AND (n−1)(n-1)(*n*−1) which must be zero. This is because powers of two in binary form have only one set bit, and subtracting one from them inverts all the bits after the rightmost set bit.
2. **Count Zeros**: Since not all powers of two are powers of four, we need to further discern them by checking the position of the set bit. Powers of four have their only set bit at odd positions in binary form. We count the number of trailing zeros, and if the count is even, then it's a power of four.

## **Second Approach:**

1. **Power of Two Check**: As with the first approach, we need to ensure the number is a power of two.
2. **Masking**: Instead of counting zeros, we can use a mask to check the position of the set bit directly. The mask for 32-bit integers with bits set in odd positions is `0x55555555`. Powers of four will only have a set bit in one of these positions, so the number AND the mask should yield the number itself.




# **Complexity**

## **First Approach:**

- **Time complexity**: O(log⁡n)O(\log n)*O*(log*n*)
    - The while loop will run for as many bits as there are in the number, which is logarithmic in nature.
- **Space complexity**: O(1)O(1)*O*(1)
    - Only a constant amount of extra space is used.


## **Second Approach:**

- **Time complexity**: O(1)O(1)*O*(1)
    - The solution uses direct bitwise operations which are constant time operations.
- **Space complexity**: O(1)O(1)*O*(1)
    - Only a constant amount of extra space is used.
*/