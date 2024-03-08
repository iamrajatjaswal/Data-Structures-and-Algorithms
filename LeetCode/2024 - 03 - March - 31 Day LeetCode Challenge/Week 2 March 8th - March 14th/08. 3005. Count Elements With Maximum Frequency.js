/*

Title: 3005. Count Elements With Maximum Frequency
URL: https://leetcode.com/problems/count-elements-with-maximum-frequency/
Difficulty: Easy
Topics: Array, Hash Table, Counting


**Problem**


You are given an array `nums` consisting of **positive** integers.

Return *the **total frequencies** of elements in* `nums` *such that those elements all have the **maximum** frequency*.

The **frequency** of an element is the number of occurrences of that element in the array.

**Example 1:**

```
Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.

```

**Example 2:**

```
Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.

```

**Constraints:**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`



**Solution**

*/
/*
  Approach 1

  1. Time Complexity:
    - Iterating through the **`nums`** array to build the frequency counter using a **`Map`**: This operation takes O(n) time, where n is the number of elements in the **`nums`** array.
    - Finding the maximum frequency using **`Math.max(...freqCounter.values())`**: This operation requires iterating through all values in the frequency counter, which takes O(m) time, where m is the number of unique elements in the **`nums`** array.
    - Filtering elements with maximum frequency: This operation also requires iterating through all keys in the frequency counter, which takes O(m) time.
    - Overall, the time complexity of the solution is O(n + m), where n is the number of elements in the **`nums`** array and m is the number of unique elements.

  2. Space Complexity:
    - A **`Map`** (**`freqCounter`**) is used to store the frequency of each element in the **`nums`** array. The space complexity of storing this map is O(m), where m is the number of unique elements in the **`nums`** array.
    - Additional space is used to store the array of elements with maximum frequency (**`maxFreqElements`**). In the worst case, if all elements have the same maximum frequency, this array could contain all elements, leading to a space complexity of O(n).
    - Overall, the space complexity of the solution is O(m + n), where m is the number of unique elements and n is the number of elements in the **`nums`** array.

  In summary:

  - Time complexity: O(n + m)
  - Space complexity: O(m + n)
  
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  const freqCounter = new Map();
  for (const num of nums) {
    freqCounter.set(num, (freqCounter.get(num) || 0) + 1);
  }

  const maxFrequency = Math.max(...freqCounter.values());

  const maxFreqElements = [...freqCounter.keys()].filter(
    (num) => freqCounter.get(num) === maxFrequency
  );

  const totalFrequency = maxFrequency * maxFreqElements.length;

  return totalFrequency;
};
