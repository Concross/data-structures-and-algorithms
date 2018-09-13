'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    if (this.tail) {
      this.tail = this.tail.next = new Node(value, null);
    } else {
      this.head = this.tail = new Node(value, null);
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

  serialize() {
    let stringifiedList = JSON.stringify(this);
    return stringifiedList;
  }
}

module.exports = LinkedList;