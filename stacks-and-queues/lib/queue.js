'use strict';

const LinkedList = require('../../linked-lists/lib/linkedList');

class Queue {
  constructor(serializedQueue) {
    if (serializedQueue) {
      this.size = serializedQueue.size;
      this.storage = serializedQueue.storage;

    } else {
      this.size = 0;
      this.storage = new LinkedList();
    }
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
      let frontValue = this.storage.removeOffset(0).value;
      this.size--;
      return frontValue;
    }
  }

  serialize() {
    return JSON.stringify(this);
  }

  static deserialize(stringyQueue) {
    let queue = JSON.parse(stringyQueue);
    queue.storage = new LinkedList(queue.storage);
    return new Queue(queue);
  }
}

module.exports = Queue;