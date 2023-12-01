/*

Given an integer `rowIndex`, return the `rowIndexth` (**0-indexed**) row of the **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

!https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif

**Example 1:**

```
Input: rowIndex = 3
Output: [1,3,3,1]

```

**Example 2:**

```
Input: rowIndex = 0
Output: [1]

```

**Example 3:**

```
Input: rowIndex = 1
Output: [1,1]

```

**Constraints:**

- `0 <= rowIndex <= 33`

**Follow up:** Could you optimize your algorithm to use only `O(rowIndex)` extra space?

*/


/*
# **Approach**
Each row of Pascal's Triangle can be represented using the sequence of combinations:

C(r,0),C(r,1),C(r,2),…,C(r,r)C(r, 0), C(r, 1), C(r, 2), \ldots, C(r, r)*C*(*r*,0),*C*(*r*,1),*C*(*r*,2),…,*C*(*r*,*r*)

where C(n,k)C(n, k)*C*(*n*,*k*) is the binomial coefficient, defined as:

C(n,k)=n!k!(n−k)!C(n, k) = \frac{n!}{k!(n-k)!}*C*(*n*,*k*)=*k*!(*n*−*k*)!*n*!

The row's first element is always 1. Given the previous element in the row (`prev`), the next element can be calculated using:

next_val=prev×rowIndex−k+1k\text{next\_val} = \text{prev} \times \frac{\text{rowIndex} - k + 1}{k}next_val=prev×*k*rowIndex−*k*+1

This formula is derived from the relationship between consecutive binomial coefficients in the same row.

Iterating from `k = 1` to `k = rowIndex`, we can directly generate the elements for the desired row without building the entire triangle.



# **Complexity**
- Time complexity: O(rowIndex)O(\text{rowIndex})*O*(rowIndex)
    
    This is because we are directly computing the rowIndex-th row without iterating through all previous rows.
    
- Space complexity: O(rowIndex)O(\text{rowIndex})*O*(rowIndex)
    
    The only significant space used is for the result list, which has a length of rowIndex + 1.

*/


// Solution
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1];
    let prev = 1;
    for(let k = 1; k <= rowIndex; k++) {
        let next_val = prev * (rowIndex - k + 1) / k;
        res.push(next_val);
        prev = next_val;
    }
    return res;
};