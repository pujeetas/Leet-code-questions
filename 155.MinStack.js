class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    if (this.minStack.length === 0) {
      this.stack.push(val);
      this.minStack.push(val);
      return;
    }
    if (val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
      this.stack.push(val);
    } else if (val > this.minStack[this.minStack.length - 1]) {
      this.stack.push(val);
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }

  pop() {
    this.stack.pop(this.stack.length - 1);
    this.minStack.pop(this.minStack.length - 1);
  }

  top() {
    const top = this.stack[this.stack.length - 1];
    return top;
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new MinStack();
stack.push(3);
stack.push(1);
stack.push(2);
console.log(stack);
console.log(stack.top()); // 2
console.log(stack.getMin()); // 1
stack.pop();
console.log(stack);

console.log(stack.getMin()); // 1
