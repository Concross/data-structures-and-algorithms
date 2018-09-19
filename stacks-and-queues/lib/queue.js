'use strict';

const LinkedList = require('../../linked-lists/lib/linkedList');

class Queue {
  constructor() {
    this.size = 0;
    this.storage = new LinkedList();
  }
}

module.exports = Queue;