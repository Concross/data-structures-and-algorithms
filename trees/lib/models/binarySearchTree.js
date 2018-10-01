'use strict';

const Node = require('./node');

const _walkAndInsert = Symbol('walk');

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
      this[_walkAndInsert](node, this.root);
    }
  }

  [_walkAndInsert](node, currentNode) {
    if (node.value <= currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = node;
      } else {
        this[_walkAndInsert](node, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = node;
      } else {
        this[_walkAndInsert](node, currentNode.right);
      }
    }
  }

  remove(node) {
    if (node.constructor !== Node) {
      throw new Error('InputError: insert method requires a Node object');
    }

    // if the nodeToRemove is the root and the root has no children
    if (this.root.value === node.value && !this.root.left && !this.root.right) {
      let nodeToRemove = this.root;
      this.root = null;
      return nodeToRemove;
    }

    let predecessor = this.root;
    let isRightChild = false;

    // walk to target node, keeping track of predecessor
    let _walk = (current, target) => {
      if (current.value === target.value) {
        return current;
      }

      if (current.left) {
        predecessor = current;
        current = current.left;
        isRightChild = false;
        _walk(current);
      } else if (current.right) {
        predecessor = current;
        current = current.left;
        isRightChild = true;
        _walk(current);
      }

      let nodeToRemove = _walk(this.root, node);
      let nodeParent = predecessor;

      // if nodeToRemove is a leaf
      if (!nodeToRemove.left && !nodeToRemove.right) {
        if (isRightChild) {
          nodeParent.right = null;
          return nodeToRemove;
        } else {
          nodeParent.left = null;
          return nodeToRemove;
        }
        // intent is to reassign the node to be removed the max value of the leftmost tree, then delete that leftmost max node
      } else if (nodeToRemove.left && !nodeToRemove.right) {
        nodeToRemove.value = BinarySearchTree.findMax(nodeToRemove.left).value;

      }


    };
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