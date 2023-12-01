/*

Title: 1441. Build an Array With Stack Operations
URL: https://leetcode.com/problems/build-an-array-with-stack-operations/
Difficulty: Medium
Topics: Array, Stack, Simulation


You are given an integer array `target` and an integer `n`.

You have an empty stack with the two following operations:

- **`"Push"`**: pushes an integer to the top of the stack.
- **`"Pop"`**: removes the integer on the top of the stack.

You also have a stream of the integers in the range `[1, n]`.

Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to `target`. You should follow the following rules:

- If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.
- If the stack is not empty, pop the integer at the top of the stack.
- If, at any moment, the elements in the stack (from the bottom to the top) are equal to `target`, do not read new integers from the stream and do not do more operations on the stack.

Return *the stack operations needed to build* `target` following the mentioned rules. If there are multiple valid answers, return **any of them**.

**Example 1:**

```
Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Pop the integer on the top of the stack. s = [1].
Read 3 from the stream and push it to the stack. s = [1,3].

```

**Example 2:**

```
Input: target = [1,2,3], n = 3
Output: ["Push","Push","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Read 3 from the stream and push it to the stack. s = [1,2,3].

```

**Example 3:**

```
Input: target = [1,2], n = 4
Output: ["Push","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Since the stack (from the bottom to the top) is equal to target, we stop the stack operations.
The answers that read integer 3 from the stream are not accepted.

```

**Constraints:**

- `1 <= target.length <= 100`
- `1 <= n <= 100`
- `1 <= target[i] <= n`
- `target` is strictly increasing.


**Solution**
*/

// Method 1: Brute Force
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const result = [];
    let current = 1; // The current number to be pushed

    for (let i = 0; i < target.length; i++) {
        while (current < target[i]) {
            // While the current number is less than the target number,
            // push the current number and generate the "Push" operation.
            result.push("Push");
            result.push("Pop"); // After pushing, immediately pop
            current++;
        }

        // The current number matches the target number, so push it.
        result.push("Push");

        current++; // Move to the next number to be pushed
    }

    return result;
}


//  Method 2: Optimized Approach Using Two Pointers
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const operations = [];
    let targetIndex = 0; // Pointer for target array
    let currentNumber = 1; // Pointer for numbers 1 to n

    while (targetIndex < target.length) {
        if (target[targetIndex] === currentNumber) {
            // If the current number in the target array matches the current number 1 to n
            // Push "Push" operation and move both pointers
            operations.push("Push");
            targetIndex++;
        } else {
            // If the numbers don't match, push "Push" followed by "Pop" operation
            // and only move the current number pointer
            operations.push("Push");
            operations.push("Pop");
        }
        currentNumber++;
    }

    return operations;
};


// Method 3: Efficient Method=> Stack
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const operations = [];
    let targetIndex = 0;
  
    for (let num = 1; num <= n; num++) {
        if (target[targetIndex] === num) {
            operations.push("Push");
            targetIndex++;
        } else {
            operations.push("Push");
            operations.push("Pop");
        }
        
        if (targetIndex === target.length) {
            break;
        }
    }
  
  return operations;
}
