/*

Title: 1838. Frequency of the Most Frequent Element
URL: https://leetcode.com/problems/frequency-of-the-most-frequent-element/
Difficulty: Medium
Topics: Array, Two Pointers, Greedy, Sorting


**Problem**

The **frequency** of an element is the number of times it occurs in an array.

You are given an integer array `nums` and an integer `k`. In one operation, you can choose an index of `nums` and increment the element at that index by `1`.

Return *the **maximum possible frequency** of an element after performing **at most*** `k` *operations*.

**Example 1:**

```
Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.
```

**Example 2:**

```
Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.

```

**Example 3:**

```
Input: nums = [3,9,6], k = 2
Output: 1

```

**Constraints:**

- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 105`
- `1 <= k <= 105`


**Solution**
*/

/*
1st Method :- Two Pointers / Sliding Window
Time complexity: O(n log n)
Space complexity: O(1)
*/
var maxFrequency = function(nums, k) {
    let maxFrequency = 0; // Initialize the maximum frequency
    let currentSum = 0; // Initialize the current sum of the subarray

    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let left = 0, right = 0; right < nums.length; ++right) {
        currentSum += nums[right]; // Include the current element in the subarray sum

        // Check if the current subarray violates the condition (sum + k < nums[right] * length)
        while (currentSum + k < nums[right] * (right - left + 1)) {
            currentSum -= nums[left]; // Adjust the subarray sum by removing the leftmost element
            left++; // Move the left pointer to the right
        }

        // Update the maximum frequency based on the current subarray length
        maxFrequency = Math.max(maxFrequency, right - left + 1);
    }

    return maxFrequency;
};

/*
2nd Method :- Sliding Window & Greedy
Time complexity: O(N + K)
Space complexity: O(K)
*/
var maxFrequency = function(nums, k) {
    countingSort(nums); // Sort the array using counting sort
    let start = 0; // Start index of the current subarray
    let subarraySum = 0; // Sum of elements in the current subarray
    let maxFrequency = 1; // Initialize the maximum frequency to 1

    // Iterate through the sorted array
    for (let i = 0; i < nums.length; i++) {
        let subarrayLength = i - start + 1; // Length of the current subarray
        let subarrayProduct = nums[i] * subarrayLength; // Product of element and subarray length
        subarraySum += nums[i]; // Add the current element to the subarray sum

        // Adjust the subarray to satisfy the condition (product - sum <= k)
        while (subarrayProduct - subarraySum > k) {
            subarraySum -= nums[start]; // Remove the leftmost element from the subarray
            start++; // Move the start index to the right
            subarrayLength--; // Decrease the length of the subarray
            subarrayProduct = nums[i] * subarrayLength; // Recalculate the product
        }

        // Update the maximum frequency based on the current subarray length
        maxFrequency = Math.max(maxFrequency, subarrayLength);
    }

    return maxFrequency; // Return the final result
}

/**
 * Counting Sort to sort the array in non-decreasing order.
 * @param {number[]} nums - The input array of numbers.
 */
function countingSort(nums) {
    const maxElement = Math.max(...nums); // Find the maximum element in the array
    const countMap = Array(maxElement + 1).fill(0); // Create an array to store the count of each element
    let index = 0;

    // Count the occurrences of each element in the array
    for (const num of nums) {
        countMap[num]++;
    }

    // Reconstruct the sorted array
    for (let i = 0; i <= maxElement; i++) {
        while (countMap[i]-- > 0) {
            nums[index++] = i;
        }
    }
}

/*
3rd Method :- Binary Search with Prefix Sum
The least efficient approach
Time complexity: O(n log n)
Space complexity: O(n)
*/
var maxFrequency = function(nums, k) {
    /**
     * Function to find the maximum frequency of an element in a subarray
     * after performing certain operations.
     * @param {number[]} nums - The input array of numbers.
     * @param {number} k - The allowed difference for operations.
     * @returns {number} - The maximum frequency.
     */
        // Sort the array in ascending order
        nums.sort((a, b) => a - b);
    
        const length = nums.length;
    
        // Calculate the differences between adjacent elements
        const differences = new Array(length).fill(0);
        for (let i = 1; i < length; i++)
            differences[i] = nums[i] - nums[i - 1];
    
        // Calculate the prefix sums of the differences
        const prefixSums = new Array(length).fill(0);
        for (let i = 1; i < length; i++)
            prefixSums[i] = prefixSums[i - 1] + differences[i];
    
        let low = 1, high = length;
    
        // Binary search for the maximum frequency
        while (low < high) {
            const mid = Math.floor((high - low + 1) / 2) + low;
    
            // Check if it's possible to achieve the given frequency with the allowed difference
            if (isPossible(nums, differences, prefixSums, mid, k))
                low = mid;
            else
                high = mid - 1;
        }
    
        return low;
    }
    
    /**
     * Function to check if it's possible to achieve the given frequency with the allowed difference.
     * @param {number[]} nums - The input array of numbers.
     * @param {number[]} differences - The array of differences between adjacent elements.
     * @param {number[]} prefixSums - The array of prefix sums of differences.
     * @param {number} freq - The current frequency being considered.
     * @param {number} k - The allowed difference for operations.
     * @returns {boolean} - True if the given frequency is possible; otherwise, false.
     */
    function isPossible(nums, differences, prefixSums, freq, k) {
        const length = differences.length;
    
        let times = 0;
    
        // Calculate the initial times based on the frequency and the last element in the subarray
        for (let i = freq - 2; i >= 0; i--)
            times += nums[freq - 1] - nums[i];
    
        let minTimes = times;
    
        // Iterate from freq-th element to the end of the array
        for (let i = freq; i < length; i++) {
            // Update times by considering the difference in prefix sums and new differences
            times = times - (prefixSums[i - 1] - prefixSums[i - freq]) + differences[i] * (freq - 1);
            minTimes = Math.min(minTimes, times);
        }
    
        // Check if the minimum times is within the allowed difference (k)
        return minTimes <= k;
    }