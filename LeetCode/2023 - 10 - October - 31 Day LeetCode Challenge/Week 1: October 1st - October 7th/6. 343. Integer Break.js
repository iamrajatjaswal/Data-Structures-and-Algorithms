/*

Given an integer `n`, break it into the sum of `k` **positive integers**, where `k >= 2`, and maximize the product of those integers.

Return *the maximum product you can get*.

**Example 1:**

```
Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.

```

**Example 2:**

```
Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

```

**Constraints:**

- `2 <= n <= 58`

*/

// LeetCode Solution

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {

  // handling two base cases
  if(n === 2 || n === 3) return n-1;    

  let maxProduct = 1;
  
  // remove the integer 3 recursively from n when (n > 4)
  while(n > 4){
      n -= 3;
      maxProduct *= 3;
  }
  
  // for the last part of the number when (n <= 4)
  maxProduct *= n;
  return maxProduct;
};

/*
- Explanation
    
    # **Intuition**
    
    We are given a positive integer 'n'
    
    - break 'n' into k positive integers (k >= 2) such that ***(Sum of k positive integers) = n***
    - among all the possibilities find the ***Maximum product of the k integers***
    
    ```java
    n = n1 + n2 + n3 +...+ nk , k positive integers
                                where n1, n2,...nk > 0
    obtain Maximum(n1 * n2 * ....* nk)
    ```
    
    # **Explanation**
    
    When an integer is to break in two parts, then to maximize the product those both parts should be equal. Using this concept lets break n into x's (n/x), then their product will be x ^ (n/x).
    
    ### ***Mathematical analysis* {to be familiar with calculus}**
    
    Implement a maxima-minima concept : (out of scope but relatable)
    
    - Extrema of a function are the maximum and minimum points. Maxima and minima are the highest and lowest values of a function within a set of ranges.
    - The largest value of the function in the full range is called the "absolute maximum", and the smallest value is called the "absolute minimum"
    - While the least value is known as the absolute minima. Other peaks and minima of a function are known as local maxima and minima, and they are not the absolute maxima and minima of the function. Let’s take a closer look at local maxima and minima, absolute maxima and minima, and how to calculate the function’s maximum and minima.
    
    Maxima and Minima properties :
    
    - If f(x) is a continuous function in its domain, then there should be at least one maximum and one minimum between equal values of f(x) .
    - The maxima and minima alternate. In other words, there is one minimum between two maxima and vice versa.
    - If f(x) approaches infinity as x approaches an or b, and f'(x) = 0 for exactly one value x, namely c between a and b, then f(c) is the lowest and least value. If f(x) tends to – as x tends to an or b, f(c) is the greatest and most extreme value.
    
    if we take derivative of the obtained product and make that equal to 0 for maxima, we will get to know that valud of x tends to e (base of the natural algorithm) for maximum product.
    
    **2 < e < 3**
    
    we need to break the integer into 2 or 3 only for maximum product.
    
    ### ***Pattern approach***
    
    The maximum product can be obtained by recursively removing the size of integer 3 from the given number 'n' when n > 4.
    
    When 'n' reaches the condition of n <= 4, conclude the last part as size of 2 or 3 or 4
    
    For example.,
    
    - n = 10 -> equivalent positive integer sum = 3 + 3 + 4 | maximum product = 3 * 3 * 4
    - n = 11 -> equivalent posive integer sum = 3 + 3 + 3 + 2 | maximum product = 3 * 3 * 3 * 2
- Time and Space Complexity
    - Time complexity: O(N * 1/3)
    - Space complexity: O(1)
*/