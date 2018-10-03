'use strict';

class Node {
  constructor(value, left, right) {
    this.value = value;

    if ((left && left.constructor !== Node) || (right && right.constructor !== Node)) {
      throw new Error('InputError: left and right params must be Nodes');

    } else {
      this.left = left || null;
      this.right = right || null;
    }
  }
}

module.exports = Node;