/*

Title: 815. Bus Routes
URL: https://leetcode.com/problems/bus-routes/
Difficulty: Hard
Topics: Array, Hash Table, Breadth-First Search


**Problem**

You are given an array `routes` representing bus routes where `routes[i]` is a bus route that the `ith` bus repeats forever.

- For example, if `routes[0] = [1, 5, 7]`, this means that the `0th` bus travels in the sequence `1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ...` forever.

You will start at the bus stop `source` (You are not on any bus initially), and you want to go to the bus stop `target`. You can travel between bus stops by buses only.

Return *the least number of buses you must take to travel from* `source` *to* `target`. Return `-1` if it is not possible.

**Example 1:**

```
Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

```

**Example 2:**

```
Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
Output: -1

```

**Constraints:**

- `1 <= routes.length <= 500`.
- `1 <= routes[i].length <= 105`
- All the values of `routes[i]` are **unique**.
- `sum(routes[i].length) <= 105`
- `0 <= routes[i][j] < 106`
- `0 <= source, target < 106`



**Solution**
*/

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    // This map will hold an adjacency map of all the routes each stop can go to
    let stopRoutes = new Map();
    
    // Initialize adjacency map - for each route
    for (let route = 0; route < routes.length; route++) {
      // Look at all of the route's stops
      for (let stop of routes[route]) {
        // If we haven't added this stop yet then create a new entry for it
        if (!stopRoutes.has(stop)) stopRoutes.set(stop, new Set());
        // Add the current route as a possible route this stop can go to
        stopRoutes.get(stop).add(route);
      }
    }
    
    // This queue will contain all of the visited stops AND the number of buses it took to get to that stop
    let stopsToVisit = new Queue();
    // We start at the source and 0 buses to get there
    stopsToVisit.enqueue([source, 0]);
    
    // This set will contain all of the stops we've already visited
    let visitedStops = new Set();
    visitedStops.add(source);
    
    // This set will contain all of the routes we've visited
    let visitedRoutes = new Array(routes.length);
    
    // While there are more stops to visit
    while(!stopsToVisit.isEmpty()) {
      // Get the queued stop and number of buses it took to get there
      let stop = stopsToVisit.front()[0], bus = stopsToVisit.front()[1];
      stopsToVisit.dequeue();
      
      // If the stop is our target then we return the number of buses it took to get here
      if (stop === target) return bus;
      
      // Loop over all the routes this stop can go to
      for (let route of stopRoutes.get(stop)) {
        // If we've already visited this route then don't do it again
        if (visitedRoutes[route]) continue;
        
        // Loop over all of the stops in this route
        for (let stop of routes[route]) {
          // If we haven't visited this stop before
          if (!visitedStops.has(stop)) {
            // Add it to the stops we've visited
            visitedStops.add(stop);
            // Add it to the queue of stops we need to visit adding 1 more bus stop to get to it
            stopsToVisit.enqueue([stop, bus + 1]);
          }
        }
        
        // Set the current route as visited
        visitedRoutes[route] = true;
      }
    }
    
    // If we never got to our target then return -1
    return -1;
  };