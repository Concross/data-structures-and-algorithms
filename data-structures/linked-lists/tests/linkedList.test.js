'use strict';

const LinkedList = require('../lib/linkedList');
const Node = require('../lib/node');

/***********************************
*     Constructor Tests            *
************************************/
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

/***********************************
*     Append Method Tests          *
************************************/
describe('LinkedList class append method tests', () => {
  let linkedList = new LinkedList();

  // test('should throw error if input cannot be parsed into a number', () => {
  //   let badArgs = [null, undefined, true, 'two', [], {}];
  //   badArgs.forEach(arg => {
  //     expect(() => {
  //       linkedList.append(arg);
  //     }).toThrowError(TypeError);
  //   });
  // });

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

/***********************************
*     Prepend Method Tests         *
************************************/
describe('LinkedList class prepend method tests', () => {
  let linkedList = new LinkedList();
  linkedList.append(1);

  test('should prepend a node to the head of the list', () => {
    linkedList.prepend(2);
    let actual = linkedList.head.value;
    let expected = 2;
    expect(actual).toBe(expected);
  });

  test('should increment the length of the list', () => {
    let actual = linkedList.length;
    let expected = 2;
    expect(actual).toBe(expected);
  });

  test('should prepend a node to the head of an EMPTY list and maintain tail', () => {
    let emptyLinkedList = new LinkedList();
    emptyLinkedList.prepend(2);
    let actual = emptyLinkedList.head.value;
    let expected = 2;
    expect(actual).toBe(expected);

    actual = emptyLinkedList.tail.value;
    expect(actual).toBe(expected);
  });

  test('should maintain an existing tail', () => {
    linkedList.prepend(2);
    let actual = linkedList.tail.value;
    let expected = 1;
    expect(actual).toBe(expected);
  });

});

/***********************************
*     Reverse Method Tests         *
************************************/
describe('LinkedList class reverse method tests', () => {
  let linkedList = new LinkedList();
  for (let i = 0; i < 4; i++) {
    linkedList.append(i);
  }
  linkedList.reverse();

  test('should reverse a list', () => {
    let actual = linkedList.head.value;
    let expected = 3;
    expect(actual).toBe(expected);

    let next = linkedList.head.next;
    actual = next.value;
    expected = 2;
    expect(actual).toBe(expected);

    next = next.next;
    actual = next.value;
    expected = 1;
    expect(actual).toBe(expected);

    next = next.next;
    actual = next.value;
    expected = 0;
    expect(actual).toBe(expected);
  });
});

/***********************************
*     Remove Offset Method Tests   *
************************************/
describe('LinkedList class removeOffset(offset) method tests', () => {

  test('should throw an error if the linked list is empty', () => {
    let linkedList = new LinkedList();
    expect(() => {
      linkedList.removeOffset(0);
    }).toThrowError();
  });

  test('should remove a node from the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.append(7);
    linkedList.removeOffset(0);
    let actual = linkedList.head;

    expect(actual).toBeNull();
  });

  test('should return the node getting removed', () => {
    let linkedList = new LinkedList();
    linkedList.append(10);
    let actual = linkedList.removeOffset(0);

    expect(actual.value).toBe(10);
  });

  test('should decrement the length property of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.removeOffset(1);

    let actual = linkedList.length;
    let expected = 1;
    expect(actual).toBe(expected);
  });
});

/***********************************
*     Remove Item Method Tests     *
************************************/
describe('LinkedList class removeItem(item) tests', () => {

  test('should throw an error if the linked list is empty', () => {
    let linkedList = new LinkedList();
    expect(() => {
      linkedList.removeItem(0);
    }).toThrowError();
  });

  test('should remove a node from the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.append(7);
    linkedList.removeItem(7);
    let actual = linkedList.head;

    expect(actual).toBeNull();
  });

  test('should return the node getting removed', () => {
    let linkedList = new LinkedList();
    linkedList.append(10);
    let actual = linkedList.removeItem(10);

    expect(actual.value).toBe(10);
  });

  test('should return undefined if target value is not in list', () => {
    let linkedList = new LinkedList();
    linkedList.append(1);
    let actual = linkedList.removeItem(2);

    expect(actual).toBeUndefined();
  });

  test('should decrement the length property of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.removeItem(2);

    let actual = linkedList.length;
    let expected = 1;
    expect(actual).toBe(expected);
  });
});

/***********************************
*     Serialize Method Tests       *
************************************/
describe('LinkedList class serialize method tests', () => {
  test('should return a buffer', () => {
    let linkedList = new LinkedList();
    linkedList.append(1);

    let actual = linkedList.serialize();
    expect(typeof actual).toBe('string');
  });
});

/***********************************
*     Deserialize Method Tests     *
************************************/
describe('LinkedList class deserialize method tests', () => {
  test('should return a new instance of LinkedList', () => {
    let linkedList = new LinkedList();
    linkedList.append(2);
    linkedList.append(3);
    let stringyList = linkedList.serialize();
    let actual = LinkedList.deserialize(stringyList);

    expect(actual).toBeInstanceOf(LinkedList);
  });

  test('should return correct head and tail', () => {
    let linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    let stringyList = linkedList.serialize();
    let actual = LinkedList.deserialize(stringyList);
    let expected = 1;

    expect(actual.head.value).toBe(expected);
    expected = 2;
    expect(actual.tail.value).toBe(expected);
  });
});

/***********************************
*     insertBefore Method Tests    *
************************************/
describe('LinkedList class insertBefore method tests', () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.insertBefore(2, 5);

  test('should increase the length property by one', () => {
    let actual = linkedList.length;
    let expected = 3;
    expect(actual).toBe(expected);
  });

  test('inserted node should have proper next value', () => {
    let actual = linkedList.head.next.next.value;
    let expected = 2;
    expect(actual).toBe(expected);
  });

  test('previous node should have reference to new node', () => {
    let actual = linkedList.head.next.value;
    let expected = 5;
    expect(actual).toBe(expected);
  });
});

/***********************************
*     insertAfter Method Tests     *
************************************/
describe('LinkedList class insertAfter method tests', () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.insertAfter(2, 5);

  test('should increase the length property by one', () => {
    let actual = linkedList.length;
    let expected = 4;
    expect(actual).toBe(expected);
  });

  test('inserted node should have proper next value', () => {
    let actual = linkedList.head.next.next.next.value;
    let expected = 3;
    expect(actual).toBe(expected);
  });

  test('previous node should have reference to new node', () => {
    let actual = linkedList.head.next.next.value;
    let expected = 5;
    expect(actual).toBe(expected);
  });
});

/***********************************
*     kthFromEnd Method Tests      *
************************************/
describe('LinkedList class kthFromEnd method tests', () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);

  test('should return value of node at k-offset from the end', () => {
    let actual = linkedList.kthFromEnd(1);
    let expected = 1;
    expect(actual).toBe(expected);
  });
});

/***********************************
*     mergeLists Tests             *
************************************/
describe('LinkedList static method mergeLists tests', () => {
  it('should zip second list into first with values alternating', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    for (let i = 0; i < 3; i++) {
      list1.append(i);
      list2.append(i + 3);
    }
    LinkedList.mergeLists(list1, list2);
    let actual = list1.head.next.value;
    let expected = 3;
    expect(actual).toBe(expected);
    actual = list1.tail.value;
    expected = 5;
    expect(actual).toBe(expected);
  });

  it('should be able to handle a longer second list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    for (let i = 0; i < 3; i++) {
      list1.append(i);
      list2.append(i + 3);
    }
    list2.append(6);
    list2.append(7);

    LinkedList.mergeLists(list1, list2);
    let actual = list1.tail.value;
    let expected = 7;

    expect(actual).toBe(expected);
  });

  it('should be able to handle a longer first list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    for (let i = 0; i < 3; i++) {
      list1.append(i); // 0, 1, 2
      list2.append(i + 3); // 3, 4, 5
    }
    list1.append(6);
    list1.append(7);

    LinkedList.mergeLists(list1, list2); // 0, 3, 1, 4, 2, 5, 6, 7
    let actual = list1.tail.value;
    let expected = 7;
    expect(actual).toBe(expected);
  });

  it('should be able to handle an empty first list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    for (let i = 0; i < 3; i++) {
      list2.append(i);
    }

    LinkedList.mergeLists(list1, list2);
    let actual = list1.head.value;
    let expected = 0;

    expect(actual).toBe(expected);

    actual = list1.tail.value;
    expected = 2;
    expect(actual).toBe(expected);
  });

  it('should be able to handle an empty second list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    for (let i = 0; i < 3; i++) {
      list1.append(i);
    }

    LinkedList.mergeLists(list1, list2);
    let actual = list1.head.value;
    let expected = 0;

    expect(actual).toBe(expected);

    actual = list1.tail.value;
    expected = 2;
    expect(actual).toBe(expected);
  });
});

/***********************************
*     Class Behavior Tests     *
************************************/
describe('LinkedList class behavior tests', () => {
  let linkedList = new LinkedList();

  test('should contain a reference to head when containing a single node', () => {
    let node = new Node(1, null);
    linkedList.head = node;
    let actual = linkedList.head;
    expect(actual).toBeInstanceOf(Node);
  });
});