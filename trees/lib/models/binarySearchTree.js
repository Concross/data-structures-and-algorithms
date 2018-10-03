'use strict';

const Node = require('./node');
const Queue = require('../../../stacks-and-queues/lib/queue');

const _insertNode = Symbol('insertNode');
const _inOrderWalk = Symbol('inOrderWalk');
class BinarySearchTree {
  constructor(root) {
    this.root = root || null;
  }

  /***********************************
  *     INSERT                       *
  ************************************/
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

  /***********************************
  *     FIZZBUZZ TREE                *
  ************************************/
  static fizzBuzz(tree) {
    if (tree.constructor !== BinarySearchTree) {
      throw new Error('InputError: argument must be a BinarySearchTree');
    }

    let _fizzBuzzNode = (node) => {
      if (node.value % 15 === 0) {
        node.value = 'fizzbuzz';
      } else if (node.value % 5 === 0) {
        node.value = 'buzz';
      } else if (node.value % 3 === 0) {
        node.value = 'fizz';
      }
    };

    this.prototype[_inOrderWalk](tree.root, _fizzBuzzNode);
  }

  [_inOrderWalk](node, cb) {
    if (node.left) {
      this[_inOrderWalk](node.left, cb);
    }

    cb(node);

    if (node.right) {
      this[_inOrderWalk](node.right, cb);
    }
  }

  /***********************************
  *      BREADTH FIRST TRAVERSAL     *
  ************************************/
  breadthFirstTraversal() {
    if (!this.root) {
      throw new Error('Error: Cannot traverse a tree without a root');
    }

    let printQueue = new Queue();
    let result = [];

    result.push(this.root.value);

    return result;
  }

  /***********************************
  *    FIND MAX NODE ANY BIN TREE    *
  ************************************/
  static findMaxBinaryTree(tree) {
    let max = tree.root.value;

    let compare = (node) => {
      if (node.value > max) {
        max = node.value;
      }
    };

    this.prototype[_inOrderWalk](tree.root, compare);

    return max;
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