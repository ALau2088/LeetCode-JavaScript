/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.elements = [];
  this.min;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  // edge case- first insert
  if (this.elements.length === 0) {
    this.elements.push(x);
    this.min = x;
  } else {
    if (x < this.min) {
      this.elements.push(x);
      this.elements.push(2 * x - this.min); // x is multiplied by 2 to ensure pop < this.min in pop method
      this.min = x;
    } else {
      this.elements.push(x);
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let pop = this.elements.pop();
  if (pop < this.min) {
    this.min = 2 * this.min - pop;
    return this.elements.pop();
  }
  return pop;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.elements[this.elements.length - 1] < this.min) {
    return this.elements[this.elements.length - 2];
  } else {
    return this.elements[this.elements.length - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
