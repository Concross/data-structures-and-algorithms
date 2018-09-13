'use strict';

const Node = require('./node');

class LinkedList {
  constructor(linkedList) {
    this.head = linkedList.head || null;
    this.tail = linkedList.tail || null;
    this.length = linkedList.length || 0;
  }

  // append is O(n)
  append(value) {
    if (this.tail) {
      this.tail = this.tail.next = new Node(value, null);
    } else {
      this.head = this.tail = new Node(value, null);
    }

    this.length++;
  }

  // prepend is O(n)
  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  // reverse is O(n)
  reverse() {
    let curr = this.head;
    let prev = null;
    let next = curr.next;

    while (next) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = curr.next;

    }
    curr.next = prev;
    this.head = curr;
  }

  // remove is O(n)
  remove(offset) {
    if (offset === 0 && this.length) {
      let node = this.head;
      this.head = null;
      this.length--;
      return node;

    } else if (this.length) {
      let curr = this.head;
      for (let i = 0; i < offset - 1; i++) {
        curr = curr.next;
      }

      let node = curr.next;
      curr.next = node.next;
      node.next = null;
      this.length--;
      return node;

    } else {
      throw new Error('No nodes to remove');
    }
  }

  // serialize is O(1)
  serialize() {
    return JSON.stringify(this);
  }

  // deserialize is O(?)
  static deserialize(linkedList) {
    return new LinkedList(JSON.parse(linkedList));
  }
}

module.exports = LinkedList;