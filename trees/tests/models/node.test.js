'use strict';

const Node = require('../../lib/models/node');

describe('Node constructor tests', () => {

  test('should instantiate as a Node object', () => {
    let node = new Node();
    expect(node).toBeInstanceOf(Node);
  });
});