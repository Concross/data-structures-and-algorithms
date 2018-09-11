'use strict';

const LinkedList = require('../lib/linkedList');
const Node = require('../lib/node');

describe('LinkedList class constructor tests', () => {
  let linkedList = new LinkedList();

  test('should instantiate with a reference to head being null', () => {
    let actual = linkedList.head;
    expect(actual).toBeNull();
  });

  test('should instantiate with a length property set to 0', () => {
    let actual = linkedList.length;
    let expected = 0;
    expect(actual).toBe(expected);
  });
});

describe('LinkedList class append method tests', () => {
  let linkedList = new LinkedList();

  test('should add head if list is empty', () => {
    linkedList.append(1);
    let actual = linkedList.head.value;
    let expected = 1;
    expect(actual).toBe(expected);

    actual = linkedList.length;
    expect(actual).toBe(expected);
  });

  test('should add new node reference to head', () => {
    linkedList.append(2);
    let appendedNode = linkedList.head.next;
    let actual = appendedNode.value;
    let expected = 2;

    expect(actual).toBe(expected);
  });

  test('should increment the list length', () => {
    let actual = linkedList.length;
    let expected = 2;

    expect(actual).toBe(expected);
  });
});

describe('LinkedList class prepend method tests', () => {
  let linkedList = new LinkedList();
  linkedList.append(1);

  test('should prepend a node to the head of the list', () => {
    linkedList.prepend(2);
    let actual = linkedList.head.value;
    let expected = 2;
    expect(actual).toBe(expected);
  });

  test('should prepend a node to the head of an EMPTY list', () => {
    let emptyLinkedList = new LinkedList();
    emptyLinkedList.prepend(2);
    let actual = emptyLinkedList.head.value;
    let expected = 2;
    expect(actual).toBe(expected);
  });
});

describe('LinkedList class behavior tests', () => {
  let linkedList = new LinkedList();

  test('should contain a reference to head when containing a single node', () => {
    let node = new Node(1, null);
    linkedList.head = node;
    let actual = linkedList.head;
    expect(actual).toBeInstanceOf(Node);
  });
});