class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (this.items.length) {
      return this.items[this.items.length - 1];
    }
    return null;
  }
}

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxValues = new Stack();
  }

  push(item) {
    this.stack.push(item);

    if (!this.maxValues.peek() || item >= this.maxValues.peek()) {
      this.maxValues.push(item);
    }
  }

  pop() {
    const item = this.stack.pop();

    if (item === this.maxValues.peek()) {
      this.maxValues.pop();
    }

    return item;
  }

  getMax() {
    return this.maxValues.peek();
  }
}

/* Some console.log tests */
const maxStack = new MaxStack();
console.log(maxStack.getMax());   // should print `null`

maxStack.push(1);
console.log(maxStack.getMax());   // should print 1

maxStack.push(100);
console.log(maxStack.getMax());   // should print 100

maxStack.pop();
console.log(maxStack.getMax());   // should print 1