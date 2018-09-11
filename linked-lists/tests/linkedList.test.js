'use strict';

const LinkedList = require('../lib/linkedList');

describe('LinkedList class constructor tests', () => {
  test('LinkedList class should instantiate with a reference to head being null', () => {
    let linkedList = new LinkedList();
    let actual = linkedList.head;

    expect(actual).toBeNull();
  });
});