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

describe('BinarySearchTree findMin(node) tests', () => {

  test('should throw an error if passed a value other than a node', () => {
    let bst = new BST(new Node(10));

    expect(() => {
      bst.findMin(1);
    });
  });

  test('should return the node with the minimum value in the tree', () => {
    let bst = buildTestTree();

    let actual = BST.findMin(bst.root).value;
    let expected = 1;
    expect(actual).toBe(expected);
  });

  test('should return the proper minimum for any subtree', () => {
    let bst = buildTestTree();

    let actual = BST.findMin(bst.root.right).value;
    let expected = 6;
    expect(actual).toBe(expected);
  });
});

describe('BinarySearchTree remove(node) tests', () => {

  test('should throw an error if passed a value other than a node', () => {
    let bst = new BST(new Node(10));

    expect(() => {
      bst.findMin(1);
    });
  });

  test('should set root to null if removing the root node with no children', () => {
    let bst = new BST(new Node(1));
    let nodeToRemove = new Node(1);
    let actual = bst.remove(nodeToRemove);
    let expected = new Node(1);

    expect(actual).toEqual(expected);
  });
});

let buildTestTree = () => {
  let bst = new BST(new Node(5));
  bst.insert(new Node(3));
  bst.insert(new Node(6));
  bst.insert(new Node(1));
  bst.insert(new Node(4));
  bst.insert(new Node(2));
  bst.insert(new Node(8));
  bst.insert(new Node(7));
  bst.insert(new Node(9));

  return bst;
};