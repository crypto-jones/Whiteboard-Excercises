// Write a function reverseLinkedList that
// receives a linked list node as input and
// then reverses the list, starting from the given node.
// Do this in-place without using any extra memory.
// Your function should return the value of the
// new head of the list.

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(node) {
  let current = node;
  let nextNode = null;
  let prevNode = null;

  while (current) {
    nextNode = current.next;
    current.next = prevNode;
    prevNode = current;
    current = nextNode;
  }

  return prevNode.value;
}

const a = new ListNode('a');
const b = new ListNode('b');
const c = new ListNode('c');
const d = new ListNode('d');
const e = new ListNode('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/* Function that prints the contents of a linked list */
function printList(node) {
  let current = node;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

console.log(reverseLinkedList(a)); // should print 'e'
printList(e); // should print 'e', 'd', 'c', 'b', 'a'
