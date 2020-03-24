/**
 * Initialize your data structure here.
 */

/*
HashSet-like a set, all key value pairs are unique i.e no duplicates

*/

var MyHashSet = function() {
  this.values = []; // can use obj {} as well
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  if (this.values[key] !== key) {
    this.values[key] = key;
  } else {
    ('key exists already');
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  if (this.values[key] === key) {
    this.values[key] = null;
  } else {
    ('No key to delete');
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  if (this.values[key] === key) {
    return true;
  } else {
    return false;
  }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
