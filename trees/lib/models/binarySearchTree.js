'use strict';

const Node = require('./node');

const _walk = Symbol('walk');

class BinarySearchTree {
  constructor(root) {
    this.root = root || null;
  }

  find(node) {
    if (node.constructor !== Node) {
      throw new Error('InputError: insert method requires a Node object');
    }

  }

  insert(node) {
    if (node.constructor !== Node) {
      throw new Error('InputError: insert method requires a Node object');
    }

    if (!this.root) {
      this.root = node;
    } else {
      this[_walk](node, this.root);
    }
  }

  [_walk](node, currentNode) {
    if (node.value <= currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = node;
      } else {
        this[_walk](node, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = node;
      } else {
        this[_walk](node, currentNode.right);
      }
    }
  }

  remove(node) {
    if (node.constructor !== Node) {
      throw new Error('InputError: insert method requires a Node object');
    }


  }
}

module.exports = BinarySearchTree;