/*
Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 

Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 

Constraints:

0 <= key, value <= 106
At most 104 calls will be made to put, get, and remove.

*/

// My Solution at First Try Approach

var MyHashMap = function() {
  this.map = {};
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value;
};

/** 
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function(key) {
  return this.map[key] === undefined ? -1 : this.map[key];
};

/** 
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function(key) {
  delete this.map[key];
};

/** 
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/

/*
  Time Complexity: O(1)
  Space Complexity: O(n)
*/


// ChatGPT Solution
class MyHashMap {
  constructor() {
    this.map = new Array(1000); // Choose an appropriate initial size for the array
  }

  _hash(key) {
    return key % 1000; // Adjust the modulus to the desired range for your keys
  }

  put(key, value) {
    const index = this._hash(key);
    if (!this.map[index]) {
      this.map[index] = [];
    }

    for (let i = 0; i < this.map[index].length; i++) {
      if (this.map[index][i][0] === key) {
        this.map[index][i][1] = value; // Update the value if the key already exists
        return;
      }
    }

    this.map[index].push([key, value]); // Add a new key-value pair
  }

  get(key) {
    const index = this._hash(key);
    if (!this.map[index]) {
      return -1; // Key not found
    }

    for (let i = 0; i < this.map[index].length; i++) {
      if (this.map[index][i][0] === key) {
        return this.map[index][i][1]; // Return the value if the key exists
      }
    }

    return -1; // Key not found
  }

  remove(key) {
    const index = this._hash(key);
    if (!this.map[index]) {
      return;
    }

    for (let i = 0; i < this.map[index].length; i++) {
      if (this.map[index][i][0] === key) {
        this.map[index].splice(i, 1); // Remove the key-value pair
        return;
      }
    }
  }
}

/*
  Time Complexity: O(1)
  Space Complexity: O(n)
*/