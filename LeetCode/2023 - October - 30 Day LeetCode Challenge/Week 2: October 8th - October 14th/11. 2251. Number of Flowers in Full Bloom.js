/*
You are given a **0-indexed** 2D integer array `flowers`, where `flowers[i] = [starti, endi]` means the `ith` flower will be in **full bloom** from `starti` to `endi` (**inclusive**). You are also given a **0-indexed** integer array `people` of size `n`, where `people[i]` is the time that the `ith` person will arrive to see the flowers.

Return *an integer array* `answer` *of size* `n`*, where* `answer[i]` *is the **number** of flowers that are in full bloom when the* `ith` *person arrives.*

**Example 1:**

!https://assets.leetcode.com/uploads/2022/03/02/ex1new.jpg

```
Input: flowers = [[1,6],[3,7],[9,12],[4,13]], poeple = [2,3,7,11]
Output: [1,2,2,2]
Explanation:The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.

```

**Example 2:**

!https://assets.leetcode.com/uploads/2022/03/02/ex2new.jpg

```
Input: flowers = [[1,10],[3,3]], poeple = [3,3,2]
Output: [2,2,1]
Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.

```

**Constraints:**

- `1 <= flowers.length <= 5 * 104`
- `flowers[i].length == 2`
- `1 <= starti <= endi <= 109`
- `1 <= people.length <= 5 * 104`
- `1 <= people[i] <= 109`

*/



class Solution {
  fullBloomFlowers(flowers, people) {
      const n = flowers.length;
      const start = new Array(n);
      const end = new Array(n);

      // Step 1: Extract the start and end days of flower blooms into separate arrays.
      for (let i = 0; i < n; i++) {
          start[i] = flowers[i][0];
          end[i] = flowers[i][1] + 1; // Adding 1 to mark the end of bloom period.
      }

      // Step 2: Sort both arrays for efficient binary searching.
      start.sort((a, b) => a - b);
      end.sort((a, b) => a - b);

      const ans = [];

      // Step 3: Iterate through each person's specified day.
      for (const person of people) {
          const e = this.binarySearch(end, person); // Find the rightmost flower end day before or on the person's day.
          const s = this.binarySearch(start, person); // Find the rightmost flower start day before or on the person's day.

          // Step 4: Calculate the answer by subtracting the end count from the start count for each person.
          ans.push(s - e);
      }
      return ans;
  }

  // Step 5: Binary search to find the rightmost position of 'target' in the array 'A'.
  binarySearch(A, target) {
      let l = 0;
      let r = A.length;
      while (l < r) {
          const mid = Math.floor((l + r) / 2);
          if (target < A[mid]) {
              r = mid;
          } else {
              l = mid + 1;
          }
      }
      return l;
  }
}
