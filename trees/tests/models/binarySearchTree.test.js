'use strict';

const BST = require('../../lib/models/binarySearchTree');
const Node = require('../../lib/models/node');

describe('BinarySearchTree constructor', () => {

  test('should instantiate as a BinarySearchTree object', () => {
    let bst = new BST();

    expect(bst).toBeInstanceOf(BST);
  });

  test('should instantiate with a reference to the root of the tree if given', () => {
    let bst = new BST(new Node(1));
    let actual = bst.root.value;
    let expected = 1;

    expect(actual).toBe(expected);
  });
});

describe('BinarySearchTree insert(node) tests', () => {

  test('should throw error if anything other than a node is passed into the method', () => {
    let bst = new BST();
    expect(() => {
      bst.insert(1);
    }).toThrow();
  });

  test('should set the root reference to be the new node if tree is previously empty', () => {
    let bst = new BST();
    bst.insert(new Node(1));

    let actual = bst.root.value;
    let expected = 1;
    expect(actual).toBe(expected);
  });

  test('should insert a new node to the left if node value is less than root value', () => {
    let bst = new BST(new Node(10));
    bst.insert(new Node(1));

    let actual = bst.root.left.value;
    let expected = 1;
    expect(actual).toBe(expected);
  });

  test('should insert a new node to the right if node value is greater than root value', () => {
    let bst = new BST(new Node(1));
    bst.insert(new Node(10));

    let actual = bst.root.right.value;
    let expected = 10;
    expect(actual).toBe(expected);
  });

  test('should insert a new node to the left if node value is less than any parent value', () => {
    let bst = new BST(new Node(10));
    bst.insert(new Node(9));
    bst.insert(new Node(8));

    let actual = bst.root.left.left.value;
    let expected = 8;

    expect(actual).toBe(expected);
  });

  test('should insert a new node to the right if node value is less than any parent value', () => {
    let bst = new BST(new Node(10));
    bst.insert(new Node(11));
    bst.insert(new Node(12));

    let actual = bst.root.right.right.value;
    let expected = 12;

    expect(actual).toBe(expected);
  });
});

describe('BinarySearchTree remove(node) tests', () => {

  test('should throw an error if passed value is not a Node object', () => {
    let bst = new BST(new Node(1));

    expect(() => {
      bst.remove(1);
    }).toThrow();
  });

  test('should return undefined if no nodes are present in the tree', () => {
    let bst = new BST();
    let node = new Node(1);
    let actual = bst.remove(node);

    expect(actual).toBeUndefined();
  });
});

describe('BinarySearchTree find(node) tests', () => {

  test('should throw an error if passed value is not a Node object', () => {
    let bst = new BST(new Node(1));

    expect(() => {
      bst.find(1);
    }).toThrow();
  });

  test('should return true if the node has been found in the tree', () => {
    let bst = new BST(new Node(1));
    let node = new Node(1);

    let actual = bst.find(node);
    expect(actual).toBe(true);
  });

  test('should return false if the node has not been found in the tree', () => {
    let bst = new BST(new Node(1));
    let node = new Node(2);

    let actual = bst.find(node);
    expect(actual).toBe(false);
  });
});