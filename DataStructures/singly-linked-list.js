class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) {
      return undefined;
    }

    let current = this.head;
    let count = 0;

    while (count !== i) {
      current = current.next;
      count++;
    }

    return current.val;
  }

  set(i, val) {
    let target = this.get(i);

    if (!target) return false;

    if (target) {
      target = val;
      return true;
    }
  }
}

const list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.unshift('d');

console.log(list);
console.log(list.get(0));
console.log(list.set(0, 'f'));
console.log(list.get(0));
