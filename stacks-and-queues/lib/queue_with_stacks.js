'use strict';

const Stack = require('../lib/stack');

const _transferStack = Symbol('transferStack');

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

  dequeue() {
    if (!this.size) {
      return;
    } else if (this.dequeueStack.size) {
      this.size--;
      return this.dequeueStack.pop();
    } else {
      // while (this.enqueueStack.size) {
      //   let item = this.enqueueStack.pop();
      //   this.dequeueStack.push(item);
      // }
      this[_transferStack]();
      this.size--;
      return this.dequeueStack.pop();
    }
  }

  [_transferStack]() {
    while (this.enqueueStack.size) {
      let item = this.enqueueStack.pop();
      this.dequeueStack.push(item);
    }
  }


}

module.exports = QueueWithStacks;