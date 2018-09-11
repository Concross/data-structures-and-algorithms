'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    if (this.head) {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(value, null);
    } else {
      this.head = new Node(value, null);
    }

    this.length++;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

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

  remove(offset) {
    if (this.length) {
      // remove here
    } else {
      throw new Error('No nodes to remove');
    }
  }
}

module.exports = LinkedList;