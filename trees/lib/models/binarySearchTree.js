'use strict';

const Node = require('./node');

const _insertNode = Symbol('insertNode');
class BinarySearchTree {
  constructor(root) {
    this.root = root || null;
  }

  insert(node) {
    if (node.constructor !== Node) {
      throw new Error('InputError: insert method requires a Node object');
    }

    if (!this.root) {
      this.root = node;
    } else {
      this[_insertNode](node, this.root);
    }
  }

  [_insertNode](node, currentNode) {
    if (node.value <= currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = node;
      } else {
        this[_insertNode](node, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = node;
      } else {
        this[_insertNode](node, currentNode.right);
      }
    }
  }

  static fizzBuzz(tree) {
    if (tree.constructor !== BinarySearchTree) {
      throw new Error('InputError: argument must be a BinarySearchTree');
    }
  }

  static findMin(node) {

    while (node.left) {
      node = node.left;
    }

    return node;
  }

  static findMax(node) {

    while (node.right) {
      node = node.right;
    }

    return node;
  }
}

module.exports = BinarySearchTree;