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

/***********************************
*     DEQUEUE     *
************************************/
describe('Queue dequeue() tests', () => {
  it('should return undefined for an empty queue', () => {
    let emptyQueue = new Queue();
    let actual = emptyQueue.dequeue();
    expect(actual).toBeUndefined();
  });

  it('should return the value in the front of the queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    let actual = queue.dequeue();
    let expected = 1;
    expect(actual).toBe(expected);
  });

  it('should decrement the size of the queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();

    let actual = queue.size;
    let expected = 1;
    expect(actual).toBe(expected);
  });

  it('should dequeue values from the queue in the proper order', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeUndefined();
  });
});

/***********************************
*     SERIALIZE/DESERIALIZE     *
************************************/
describe('Queue serialize tests', () => {
  it('should return a string', () => {
    let queue = new Queue();
    let actual = queue.serialize();
    expect(typeof actual).toBe('string');
  });
});

describe('Queue deserialize tests', () => {
  it('should create an instance of a Queue', () => {
    let stringyQueue = new Queue();
    stringyQueue = stringyQueue.serialize();
    let queue = Queue.deserialize(stringyQueue);
    expect(queue).toBeInstanceOf(Queue);
  });

  it('should have the same values and methods as before', () => {
    let stringyQueue = new Queue();
    stringyQueue.enqueue(1);
    stringyQueue.enqueue(2);
    stringyQueue.enqueue(3);
    stringyQueue = stringyQueue.serialize();

    let queue = Queue.deserialize(stringyQueue);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it('should maintain storage as a LinkedList', () => {
    let stringyQueue = new Queue();
    stringyQueue = stringyQueue.serialize();
    let queue = Queue.deserialize(stringyQueue);

    expect(queue.storage).toBeInstanceOf(LinkedList);
  });
});