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
  *      REMOVE VALUE FROM TREE      *
  ************************************/
  remove(node) {
    if (node.constructor !== Node) {
      throw new Error('InputError: passed argument must be of type Node');
    }

    let value = node.value;
    let parentNode = this.root;

    let _find = (value, currentNode) => {
      if (value === currentNode.value) {
        return currentNode;
      }

      if (value < currentNode.value) {
        if (currentNode.left) {
          parentNode = currentNode;
          currentNode = currentNode.left;
          return _find(value, currentNode);
        } else {
          throw new Error('Error: remove(value) value not found in tree');
        }
      }

      if (value > currentNode.value) {
        if (currentNode.right) {
          parentNode = currentNode;
          currentNode = currentNode.right;
          return _find(value, currentNode);
        } else {
          throw new Error('Error: remove(value) value not found in tree');
        }
      }
    };

    if (!this.root) {
      return;
    } else if (!this.root.right && !this.root.left) {
      this.root = null;
      return;
    }

    node = _find(value, this.root);

    if (!node.left && !node.right) {
      let value = node.value;
      node = null;
      if (value === parentNode.left.value) {
        parentNode.left = node;
      } else if (value === parentNode.right.value) {
        parentNode.right = node;
      }

      // node to remove has one right child
    } else if (!node.left && node.right) {
      if (node.value === parentNode.left.value) {
        parentNode.left = node.right;
        node = null;
      } else if (node.value === parentNode.right.value) {
        parentNode.right = node.right;
        node = null;
      }

      // node to remove has one left child
    } else if (node.left && !node.right) {
      if (node.value === parentNode.left.value) {
        parentNode.left = node.left;
        node = null;
      } else if (node.value === parentNode.right.value) {
        parentNode.right = node.left;
        node = null;
      }

      // node to remove has two children
    } else if (node.left && node.right) {
      let minNode = _find(BinarySearchTree.findMin(node.right).value, this.root);
      node.value = minNode.value;

      if (minNode.right) {
        if (minNode.value === parentNode.left.value) {
          parentNode.left = minNode.right;
        } else if (minNode.value === parentNode.right.value) {
          parentNode.right = minNode.right;
        }

      }

      minNode = null;
    }
  }

  /***********************************
  *            SERIALIZE             *
  ************************************/
  serialize() {
    return Buffer.from(this.breadthFirstTraversal());
  }

  static deserialize(serializedTree) {
    let tree = new BinarySearchTree();
    Array.from(serializedTree).forEach(node => tree.insert(new Node(node)));
    return tree;
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

    printQueue.enqueue(this.root);

    while (printQueue.size) {
      let node = printQueue.dequeue();
      result.push(node.value);

      if (node.left) printQueue.enqueue(node.left);
      if (node.right) printQueue.enqueue(node.right);
    }

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