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