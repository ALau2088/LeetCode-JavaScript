/**
 * Initialize your data structure here.
 */

/*
insert
------------
hashmap store values
if does not exist
    add to hashmap
    return true
else
    return false
    
remove
---------------
if val exists
    remove from set and return true
else
    return false
    
getRandom
--------------
get number of vals in set by number of keys in hashmap
random number algorithm use Math.random * number of keys
return key at random number

*/
var RandomizedSet = function () {
  this.set = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.set[val]) {
    this.set[val] = true;
    return true;
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.set[val]) {
    delete this.set[val];
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * Object.keys(this.set).length);
  return Object.keys(this.set)[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
