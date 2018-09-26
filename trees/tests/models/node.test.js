'use strict';

const Node = require('../../lib/models/node');

describe('Node constructor tests', () => {

  test('should instantiate as a Node object', () => {
    let node = new Node();
    expect(node).toBeInstanceOf(Node);
  });

  test('should instantiate with a given value', () => {
    let node = new Node(5);
    let actual = node.value;
    let expected = 5;

    expect(actual).toBe(expected);
  });

  test('should instantiate with null reference values to left and right if not given', () => {
    let node = new Node(5);
    let actual = node.left;
    expect(actual).toBeNull();

    actual = node.right;
    expect(actual).toBeNull();
  });

  test('should instantiate a reference to left or right node if given', () => {
    let node = new Node(5, new Node('left'), new Node('right'));
    let actual = node.left.value;
    let expected = 'left';

    expect(actual).toBe(expected);

    actual = node.right.value;
    expected = 'right';
    expect(actual).toBe(expected);
  });

  test('should throw err if left/right is not a reference to a node', () => {
    expect(() => {
      let node = new Node(0, 1, 2);
    }).toThrow();
  });

  test('should not throw error if left/right is a reference to a node', () => {
    expect(() => {
      let node = new Node(0, new Node(1), new Node(2));
    }).not.toThrow();
  });
});