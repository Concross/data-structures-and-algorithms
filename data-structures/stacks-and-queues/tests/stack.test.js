'use strict';

const Stack = require('../lib/stack');
const LinkedList = require('../../linked-lists/javascript/lib/linkedList');

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

/***********************************
*     PUSH     *
************************************/
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

/***********************************
*     POP     *
************************************/
describe('Stack pop test', () => {
  it('should return undefined for an empty stack', () => {
    let emptyStack = new Stack();
    let actual = emptyStack.pop();
    expect(actual).toBeUndefined();
  });

  it('should return the value off the top of the stack', () => {
    let stack = new Stack();
    stack.push(1);
    let actual = stack.pop();
    let expected = 1;
    expect(actual).toBe(expected);
  });

  it('should decrement the size of the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();

    let actual = stack.size;
    let expected = 1;
    expect(actual).toBe(expected);
  });

  it('should pop values off the stack in the proper order', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });
});

/***********************************
*     SERIALIZE/DESERIALIZE     *
************************************/
describe('Stack serialize tests', () => {
  it('should return a string', () => {
    let stack = new Stack();
    let actual = stack.serialize();
    expect(typeof actual).toBe('string');
  });
});

describe('Stack deserialize tests', () => {
  it('should create an instance of a Stack', () => {
    let stringyStack = new Stack();
    stringyStack = stringyStack.serialize();
    let stack = Stack.deserialize(stringyStack);
    expect(stack).toBeInstanceOf(Stack);
  });

  it('should have the same values and methods as before', () => {
    let stringyStack = new Stack();
    stringyStack.push(1);
    stringyStack.push(2);
    stringyStack.push(3);
    stringyStack = stringyStack.serialize();

    let stack = Stack.deserialize(stringyStack);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('should maintain storage as a LinkedList', () => {
    let stringyStack = new Stack();
    stringyStack = stringyStack.serialize();
    let stack = Stack.deserialize(stringyStack);

    expect(stack.storage).toBeInstanceOf(LinkedList);
  });
});