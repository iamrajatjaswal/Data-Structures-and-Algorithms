/*

Title: 1356. Sort Integers by The Number of 1 Bits
URL: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
Difficulty: Easy
Topics: Array, Bit, Manipulation, Sorting, Counting


**Problem:**
You are given an integer array `arr`. Sort the integers in the array in ascending order by the number of `1`'s in their binary representation and in case of two or more integers have the same number of `1`'s you have to sort them in ascending order.

Return *the array after sorting it*.

**Example 1:**

```
Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

```

**Example 2:**

```
Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

```

**Constraints:**

- `1 <= arr.length <= 500`
- `0 <= arr[i] <= 104`


**Solution**

*/
// Method 1:
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(numbers) {
    const map = {};

   for (let i = 0; i < numbers.length; i++) {
       let counter = 0;
       let bit = numbers[i];
       
       while(bit > 0) {
           counter += (bit & 1);
           bit = bit >> 1;
       }

       map[numbers[i]] = counter;
   }

   return numbers.sort((a, b) => map[a] - map[b] || a - b);
};


// Method 2:
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};

function bitCount(num) {
    //0101 (5)
    let count = 0;
    while (num > 0) {
        count += num & 1;
        num = num >> 1;
    }
    return count;
}