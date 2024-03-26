/*

Title: 41. First Missing Positive
URL: https://leetcode.com/problems/first-missing-positive/
Difficulty: Hard
Topics: Array, Hash Table


**Problem**


Given an unsorted integer array `nums`. Return the *smallest positive integer* that is *not present* in `nums`.

You must implement an algorithm that runs in `O(n)` time and uses `O(1)` auxiliary space.

**Example 1:**

```
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

```

**Example 2:**

```
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

```

**Example 3:**

```
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.

```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `2^31 <= nums[i] <= 2^31 - 1`


**Solution**

*/
/*
  Approach 1

  **Time Complexity :**
    - The code has three main iterations through the array:
        - Marking encountered numbers in the unordered map (`O(n)`)
        - Checking for missing positives (`O(n)`)
        - Handling all positives present (`O(n)`)
    - Total time complexity: O(n)

  **Space Complexity :**
    - The code uses an unordered map (`mp`) to store encountered numbers.
    - However, the size of the unordered map is limited by the array size and the problem constraint that elements are integers. In essence, it's constant space complexity (O(1)).
  
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const mp = new Map();
  let maxi = Math.max(...nums, 0);
  for (let num of nums) {
    mp.set(num, true);
  }
  for (let i = 1; i < maxi; i++) {
    if (!mp.has(i)) {
      return i;
    }
  }
  return maxi < 0 ? 1 : maxi + 1;
};
