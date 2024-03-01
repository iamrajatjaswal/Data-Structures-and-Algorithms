/*

Title: 2092. Find All People With Secret
URL: https://leetcode.com/problems/find-all-people-with-secret/
Difficulty: Hard
Topics: Depth-First Search, Breadth-First Search, Union Find, Graph, Sorting


**Problem**


You are given an integer `n` indicating there are `n` people numbered from `0` to `n - 1`. You are also given a **0-indexed** 2D integer array `meetings` where `meetings[i] = [xi, yi, timei]` indicates that person `xi` and person `yi` have a meeting at `timei`. A person may attend **multiple meetings** at the same time. Finally, you are given an integer `firstPerson`.

Person `0` has a **secret** and initially shares the secret with a person `firstPerson` at time `0`. This secret is then shared every time a meeting takes place with a person that has the secret. More formally, for every meeting, if a person `xi` has the secret at `timei`, then they will share the secret with person `yi`, and vice versa.

The secrets are shared **instantaneously**. That is, a person may receive the secret and share it with people in other meetings within the same time frame.

Return *a list of all the people that have the secret after all the meetings have taken place.* You may return the answer in **any order**.

**Example 1:**

```
Input: n = 6, meetings = [[1,2,5],[2,3,8],[1,5,10]], firstPerson = 1
Output: [0,1,2,3,5]
Explanation:
At time 0, person 0 shares the secret with person 1.
At time 5, person 1 shares the secret with person 2.
At time 8, person 2 shares the secret with person 3.
At time 10, person 1 shares the secret with person 5.
Thus, people 0, 1, 2, 3, and 5 know the secret after all the meetings.

```

**Example 2:**

```
Input: n = 4, meetings = [[3,1,3],[1,2,2],[0,3,3]], firstPerson = 3
Output: [0,1,3]
Explanation:
At time 0, person 0 shares the secret with person 3.
At time 2, neither person 1 nor person 2 know the secret.
At time 3, person 3 shares the secret with person 0 and person 1.
Thus, people 0, 1, and 3 know the secret after all the meetings.

```

**Example 3:**

```
Input: n = 5, meetings = [[3,4,2],[1,2,1],[2,3,1]], firstPerson = 1
Output: [0,1,2,3,4]
Explanation:
At time 0, person 0 shares the secret with person 1.
At time 1, person 1 shares the secret with person 2, and person 2 shares the secret with person 3.
Note that person 2 can share the secret at the same time as receiving it.
At time 2, person 3 shares the secret with person 4.
Thus, people 0, 1, 2, 3, and 4 know the secret after all the meetings.

```

**Constraints:**

- `2 <= n <= 10^5`
- `1 <= meetings.length <= 10^5`
- `meetings[i].length == 3`
- `0 <= xi, yi <= n - 1`
- `xi != yi`
- `1 <= timei <= 10^5`
- `1 <= firstPerson <= n - 1`



**Solution**

*/
/*
  Approach 1

  - Time complexity:
    - JavaScript, Python, and Python3 solutions: O(nlog⁡n+m) , where nn*n* is the number of meetings and mm*m* is the total number of attendees in all meetings.
    - C++ solution: O(nlog⁡n+m) where *n* is the number of meetings and *m* is the total number of attendees in all meetings.
    
  - Space complexity:
    - JavaScript, Python, and Python3 solutions: O(m) where mm*m* is the total number of attendees in all meetings.
    - C++ solution: O(m), where mm*m* is the total number of attendees in all meetings.

  The space complexity arises from maintaining sets, graphs, and queues to store the information about attendees and their relationships.

  The time complexity is dominated by the sorting of meetings (O(nlog⁡n)) and the BFS traversal (O(m)), where mm*m* is the total number of attendees in all meetings.
*/
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
  let knownSet = new Set([0, firstPerson]);

  let sortedMeetings = [];
  meetings.sort((a, b) => a[2] - b[2]);

  let seenTime = new Set();

  for (let meeting of meetings) {
    if (!seenTime.has(meeting[2])) {
      seenTime.add(meeting[2]);
      sortedMeetings.push([]);
    }
    sortedMeetings[sortedMeetings.length - 1].push([meeting[0], meeting[1]]);
  }

  for (let meetingGroup of sortedMeetings) {
    let peopleKnowSecret = new Set();
    let graph = {};

    for (let [p1, p2] of meetingGroup) {
      if (!graph[p1]) graph[p1] = [];
      if (!graph[p2]) graph[p2] = [];

      graph[p1].push(p2);
      graph[p2].push(p1);

      if (knownSet.has(p1)) peopleKnowSecret.add(p1);
      if (knownSet.has(p2)) peopleKnowSecret.add(p2);
    }

    let queue = [...peopleKnowSecret];

    while (queue.length > 0) {
      let curr = queue.shift();
      knownSet.add(curr);
      for (let neigh of graph[curr]) {
        if (!knownSet.has(neigh)) {
          knownSet.add(neigh);
          queue.push(neigh);
        }
      }
    }
  }

  return [...knownSet];
};
