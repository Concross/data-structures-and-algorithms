'use strict';

const Stack = require('../lib/stack');

class QueueWithStacks {
  constructor() {
    this.size = 0;
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(value) {
    if (!value) {
      throw new Error('Input Error: enqueue() requires a value');
    }
    this.enqueueStack.push(value);
    this.size++;

  }
}

module.exports = QueueWithStacks;