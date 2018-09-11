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

}

module.exports = LinkedList;