'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new Node(value, null);
    this.length++;
  }
}



module.exports = LinkedList;