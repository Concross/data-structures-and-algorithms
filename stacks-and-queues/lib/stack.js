'use strict';

const LinkedList = require('../../linked-lists/lib/linkedList');

class Stack {
  constructor() {
    this.size = 0;
    this.storage = new LinkedList();
  }

  push(value) {
    if (!value) {
      throw new Error('InputError: <Stack>.push() requires a value');
    }
  }
}

module.exports = Stack;