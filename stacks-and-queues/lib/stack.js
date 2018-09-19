'use strict';

const LinkedList = require('../../linked-lists/lib/linkedList');

class Stack {
  constructor() {
    this.size = 0;
    this.storage = new LinkedList();
  }
}

module.exports = Stack;