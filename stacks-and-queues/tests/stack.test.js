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

describe('Stack push tests', () => {
  it('should throw an error if no value is provided', () => {
    let stack = new Stack();
    expect(() => {
      stack.push();
    }).toThrowError('InputError: <Stack>.push() requires a value');
  });

  it('should succesfully push an item to the top of an empty stack', () => {
    let stack = new Stack();
    stack.push(1);
    let actual = stack.storage.head.value;
    let expected = 1;

    expect(actual).toBe(expected);
  });

  it('should push an item to the top of a stack of any size, maintaining head and tail', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    let top = stack.storage.head.value;
    let expected = 3;
    expect(top).toBe(expected);

    let bottom = stack.storage.tail.value;
    expected = 1;
    expect(bottom).toBe(expected);
  });

  it('should increment the size of the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    let actual = stack.size;
    let expected = 3;
    expect(actual).toBe(expected);
  });
});