'use strict';

const Node = require('../lib/node');

describe('Node class tests', () => {
  test('Node class should instantiate with a value and reference to next node', () => {
    let node = new Node(7, null);
    let actual = node.value;
    let expected = 7;
    expect(actual).toBe(expected);

    actual = node.next;
    expect(actual).toBeNull();
  });
});