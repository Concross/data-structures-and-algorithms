'use strict';

const Stack = require('../lib/stack');
const LinkedList = require('../../linked-lists/lib/linkedList');

describe('Stack constructor tests', () => {
  it('should construct an instance of the Stack class', () => {
    let stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });

  it('should instantiate with a size of 0', () => {
    let stack = new Stack();
    let actual = stack.size;
    let expected = 0;
    expect(actual).toBe(expected);
  });

  it('should use LinkedList structure as storage type', () => {
    let stack = new Stack();
    let actual = stack.storage;
    expect(actual).toBeInstanceOf(LinkedList);
  });
});