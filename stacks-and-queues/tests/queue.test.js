'use strict';

const Queue = require('../lib/queue');
const LinkedList = require('../../linked-lists/lib/linkedList');

describe('Queue constructor tests', () => {
  let queue = new Queue();
  it('should construct an instance of class Queue', () => {
    expect(queue).toBeInstanceOf(Queue);
  });

  it('should instantiate with an initial size of 0', () => {
    let actual = queue.size;
    let expected = 0;
    expect(actual).toBe(expected);
  });

  it('should instantiate a storage as an instance of LinkedList', () => {
    let actual = queue.storage;
    expect(actual).toBeInstanceOf(LinkedList);
  });
});

/***********************************
*     ENQUEUE     *
************************************/
describe('Queue enqueue(val) tests', () => {
  it('should throw an error if no value is provided', () => {
    let queue = new Queue();
    expect(() => {
      queue.enqueue();
    }).toThrowError('InputError: <Queue>.enqueue() requires a value');
  });

  it('should succesfully enqueue an item into an empty queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    let actual = queue.storage.tail.value;
    let expected = 1;
    expect(actual).toBe(expected);

  });

  it('should enqueue an item into a queue of any size, maintaining storage head and tail', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let front = queue.storage.head.value;
    let expected = 1;
    expect(front).toBe(expected);

    let back = queue.storage.tail.value;
    expected = 3;
    expect(back).toBe(expected);
  });

  it('should increment the size of the queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let actual = queue.size;
    let expected = 3;
    expect(actual).toBe(expected);
  });
});