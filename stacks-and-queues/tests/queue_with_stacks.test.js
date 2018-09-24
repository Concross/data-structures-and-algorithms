'use strict';

const QueueWithStacks = require('../lib/queue_with_stacks');
const Stack = require('../lib/stack');

describe('QueueWithStacks constructor tests', () => {
  let queue = new QueueWithStacks();

  test('should instantiate an object of QueueWithStacks type', () => {
    expect(queue).toBeInstanceOf(QueueWithStacks);
  });

  test('should instantiate storage with an enqueue stack and a dequeue stack', () => {
    let actual = queue.enqueueStack;
    expect(actual).toBeInstanceOf(Stack);

    actual = queue.dequeueStack;
    expect(actual).toBeInstanceOf(Stack);
  });

  test('should instantiate with a size of 0', () => {
    let actual = queue.size;
    expect(actual).toBe(0);
  });
});

describe('QueueWithStacks enqueue(val) tests', () => {

  test('should enqueue a value into the enqueueStack', () => {
    let queue = new QueueWithStacks();
    queue.enqueue(1);
    let actual = queue.enqueueStack.pop();

    expect(actual).toBe(1);
  });

  test('should increment the size of the queue', () => {
    let queue = new QueueWithStacks();
    queue.enqueue(1);
    let actual = queue.size;

    expect(actual).toBe(1);
  });

  test('should throw input error if no value was provided for enqueue', () => {
    let queue = new QueueWithStacks();

    expect(() => {
      queue.enqueue();
    }).toThrowError('Input Error: enqueue() requires a value');
  });
});