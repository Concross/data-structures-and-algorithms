'use strict';

const LinkedList = require('../../linked-lists/lib/linkedList');

class Queue {
  constructor() {
    this.size = 0;
    this.storage = new LinkedList();
  }

  enqueue(value) {
    if (!value) {
      throw new Error('InputError: <Queue>.enqueue() requires a value');
    }
    this.storage.append(value);
    this.size++;
  }

  dequeue() {
    if (this.size) {
      let frontValue = this.storage.remove(0).value;
      this.size--;
      return frontValue;
    }
  }
}

module.exports = Queue;