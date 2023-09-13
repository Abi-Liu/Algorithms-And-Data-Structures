// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// link: https://leetcode.com/problems/min-stack/description/

// The hardest part is implementing the GetMin function in constant time. If you were to have an array of values and a min property on the stack, if the top element is the min and it get's popped off, how are you going to keep track of the new min?

// the answer is to have the stack be an array of objects instead of values. With each object containing info about its value as well as the current minimum at that point in time.

class MinStack {
  constructor() {
    // length property to keep track of length in constant time, and members is initialized as an empty array
    this.length = 0;
    this.members = [];
  }
  push(val) {
    // if length of stack is 0, the first element is going to be the min
    if (this.members.length === 0) {
      this.members.push({ val, min: val });
    } else {
      // else compare the previous nodes minimum value to the current value. whichever is smaller is the value thats going into the min property in the array object.
      const prev = this.members[this.length - 1].min;
      const lowest = val < prev ? val : prev;
      this.members.push({ val, min: lowest });
    }
    // increment length
    this.length += 1;
    return null;
  }

  pop() {
    this.members.pop();
    this.length -= 1;
    return null;
  }

  top() {
    return this.members[this.length - 1].val;
  }

  // get the top elements min value
  getMin() {
    return this.members[this.length - 1].min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack;
