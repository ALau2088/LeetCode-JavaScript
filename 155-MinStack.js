/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.elements = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  // edge case- first insert
  if (this.elements.length === 0) {
    this.elements.push({ val: x, min: x });
  } else {
    let min = this.elements[this.elements.length - 1]['min'];
    if (x < min) {
      this.elements.push({ val: x, min: x });
    } else {
      this.elements.push({ val: x, min });
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let pop = this.elements.pop();
  return pop.val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.elements[this.elements.length - 1]['val'];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.elements[this.elements.length - 1]['min'];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Time complexity of push, pop, top and getMin is O(1)
// See 155-MinStack2 to integers instead of objects in stack.
