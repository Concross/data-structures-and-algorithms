'use strict';

const LinkedList = require('../../linked-lists/lib/linkedList');

class Stack {
  constructor(serializedStack) {
    if (serializedStack) {
      this.storage = serializedStack.storage;
      this.size = serializedStack.storage.length;

    } else {
      this.size = 0;
      this.storage = new LinkedList();

    }
  }

  push(value) {
    if (!value) {
      throw new Error('InputError: <Stack>.push() requires a value');
    }

    this.storage.prepend(value);
    this.size++;
  }

  pop() {
    if (this.size) {
      let topValue = this.storage.removeOffset(0).value;
      this.size--;
      return topValue;
    }
  }

  serialize() {
    return JSON.stringify(this);
  }

  static deserialize(stringyStack) {
    let stack = JSON.parse(stringyStack);
    stack.storage = new LinkedList(stack.storage);
    return new Stack(stack);
  }
}

module.exports = Stack;