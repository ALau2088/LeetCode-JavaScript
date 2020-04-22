const assert = require('assert');
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.maxCapacity = capacity;
  this.currentCapacity = 0;
  this.data = {};
  this.order = {};
  this.orderCounter = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // edge case-key does not exist
  if (!this.data[key]) return -1;

  // Reorder
  let tempValue = this.data[key]['order'];
  delete this.order[tempValue];
  this.order[this.orderCounter++] = key;

  // Return value
  return this.data[key]['value'];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.data[key]) {
    // Reorder
    let keyToReorder = this.data[key]['order'];
    delete this.order[keyToReorder];
    this.order[this.orderCounter++] = key;
    // Set new value
    this.data[key]['value'] = value;
    this.data['order'] = this.orderCounter;
  }

  if (this.currentCapacity === this.maxCapacity) {
    // get key to be deleted
    let keyToDelete = this.order[Object.keys(this.order)[0]];
    // Delete data and key order
    delete this.data[keyToDelete];
    delete this.order[Object.keys(this.order)[0]];
    this.currentCapacity--;
  }

  this.data[key] = {};
  this.data[key]['value'] = value;
  this.data[key]['order'] = this.orderCounter;
  this.order[this.orderCounter] = key;
  this.orderCounter++;
  this.currentCapacity++;
  console.log(Object.keys(this.order));
  return 'key value pair added';
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache(2 /* capacity */);

cache.put(1, 1);
cache.put(2, 2);
assert.equal(1, cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
assert.equal(-1, cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
assert.equal(-1, cache.get(1)); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4

// cache.put(2, 1);
// cache.put(1, 1);
// cache.put(2, 3);
// cache.put(4, 1);
// assert.equal(-1, cache.get(1));
// assert.equal(3, cache.get(2));
