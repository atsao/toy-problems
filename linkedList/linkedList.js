/*
Linked List

Implement a linked list using the pseudoclassical instantiation pattern in ES6.

Your linked list should have methods called "addToTail", "removeHead", and "contains."

Example:
let list = new LinkedList();
list.tail; // null
list.addToTail(4);
list.addToTail(5);
list.head.value; // 4
list.contains(5); // true
list.contains(6); // false
list.removeHead(); // 4
list.tail.value; // 5

*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    let newTail = this.makeNode(value);

    if (!this.head) { this.head = newTail; }
    if (this.tail) { this.tail.next = newTail; }

    this.tail = newTail;
  }

  removeHead() {
    let head = this.head.value;
    this.head = this.tail;

    return head;    
  }

  contains(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) { return true; }
      node = node.next;
    }

    return false;
  }

  makeNode(value) {
    return {
      value: value,
      next: null
    }
  }

};

let list = new LinkedList();
console.log(list.tail); // null
list.addToTail(4);
list.addToTail(5);
console.log(list);
console.log(list.head.value); // 4
console.log(list.contains(5)); // true
console.log(list.contains(6)); // false
console.log(list.removeHead()); // 4
console.log(list.tail.value); // 5