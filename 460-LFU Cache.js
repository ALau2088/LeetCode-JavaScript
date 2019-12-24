/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.evictOrder = {}; // store timestamp: key value pair
  this.data = {};
  this.capacity = capacity;
  this.capacityRemain = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  // edge case-key does not exist
  if (!this.data[key]) {
    return -1;
  } else {
    // remove from current evictOrder
    var evictOrderKeyToRemoveFrom = this.data[`${key}`]['used'];
    for (
      var i = 0;
      i < this.evictOrder[evictOrderKeyToRemoveFrom].length;
      i++
    ) {
      if (this.evictOrder[evictOrderKeyToRemoveFrom][i] === key) {
        // delete this.evictOrder[`${key2}][i]; //Will not work because delete does not affect the length
        this.evictOrder[evictOrderKeyToRemoveFrom].splice(i, 1);
      }
    }

    // Check previous evict Order key if still contains values
    // Remove evictOrderKey if has 0 elements to free memory
    if (this.evictOrder[evictOrderKeyToRemoveFrom].length === 0) {
      // Object.keys(this.evictOrder).shift();
      delete this.evictOrder[evictOrderKeyToRemoveFrom];
    }

    // increment used key
    this.data[`${key}`]['used']++;
    // set new evictOrder
    const timesUsed = this.data[`${key}`]['used'];
    // if times used evictOrder key exists push key
    if (this.evictOrder[`${timesUsed}`]) {
      this.evictOrder[`${timesUsed}`].push(key);
    } else {
      // create evictOrder key then push
      this.evictOrder[`${timesUsed}`] = [key];
    }

    // return data
    return this.data[`${key}`]['value'];
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  // edge case-if capacity is zero
  if (this.capacity === 0) {
    return;
  }

  // edge case-key exists
  if (this.data[`${key}`]) {
    this.data[`${key}`]['value'] = value;
    // Remove from old evict order
    for (
      var i = 0;
      i < this.evictOrder[this.data[`${key}`]['used']].length;
      i++
    ) {
      if (this.evictOrder[this.data[`${key}`]['used']][i] === key) {
        this.evictOrder[this.data[`${key}`]['used']].splice(i, 1);
      }
    }
    // Add to new evict order
    this.data[`${key}`]['used']++;
    if (this.evictOrder[this.data[`${key}`]['used']]) {
      this.evictOrder[this.data[`${key}`]['used']].push(key);
    } else {
      // else create 'used' time used key then push
      this.evictOrder[this.data[`${key}`]['used']] = [key];
    }

    return 'overwritten existing key';
  }

  // edge case-capacity exceeded evict least frequently used key
  if (this.capacityRemain === 0) {
    // const evictOrderKeyToRemoveFrom = Object.keys(this.evictOrder)[0];
    let evictOrderKeyToRemoveFrom;
    let i = 0;
    do {
      evictOrderKeyToRemoveFrom = Object.keys(this.evictOrder)[i];
      i++;
    } while (this.evictOrder[evictOrderKeyToRemoveFrom].length === 0);

    const dataKey = this.evictOrder[evictOrderKeyToRemoveFrom].shift();
    // Remove the data
    delete this.data[dataKey];
    this.capacityRemain++;
    // Remove evictOrderKey if has 0 elements to free memory
    if (this.evictOrder[evictOrderKeyToRemoveFrom].length === 0) {
      // Object.keys(this.evictOrder).shift();
      delete this.evictOrder[evictOrderKeyToRemoveFrom];
    }
  }

  // add key value to capacity
  this.capacityRemain--;
  // add to evict order
  // if 0 time used key exists push key
  if (this.evictOrder[0]) {
    this.evictOrder[0].push(key);
  } else {
    // else create 0 time used key then push
    this.evictOrder[0] = [key];
  }

  this.data[`${key}`] = { value, used: 0 };
  return `key value added, capacityRemain:${this.capacityRemain}`;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// var cache = new LFUCache(2 /* capacity */);

// console.log(cache.put(1, 1));
// console.log(cache.put(2, 2));
// console.log(cache.get(1)); // returns 1
// console.log(cache.put(3, 3)); // evicts key 2
// console.log(cache.get(2)); // returns -1 (not found)
// console.log(cache.get(3)); // returns 3.
// console.log(cache.put(4, 4)); // evicts key 1.
// console.log(cache.get(1)); // returns -1 (not found)
// console.log(cache.get(3)); // returns 3
// console.log(cache.get(4)); // returns 4
