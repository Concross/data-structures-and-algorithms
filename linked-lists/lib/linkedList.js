'use strict';

const Node = require('./node');

const _removeFirst = Symbol('removeFirst');
const _removeLast = Symbol('removeLast');

class LinkedList {
  constructor(listObject) {

    try {
      if (listObject) {
        this.head = listObject.head;
        this.tail = listObject.tail;
        this.length = listObject.length;

      } else {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
    } catch (err) {
      throw new Error('LinkedList constructor unable to instantiate new LinkedList object');
    }
  }

  // append is O(1)
  append(value) {

    // if (typeof value !== 'number') {
    //   throw new TypeError('append(val) requires the parameter to be an integer');
    // }

    if (this.tail) {
      this.tail = this.tail.next = new Node(value, null);
    } else {
      this.head = this.tail = new Node(value, null);
    }

    this.length++;
  }

  // prepend is O(1)
  prepend(value) {
    this.head = new Node(value, this.head);
    if (!this.tail) {
      this.tail = this.head;
    }
    this.length++;
  }

  // reverse is O(n)
  reverse() {
    let curr = this.head;
    let prev = null;
    let next = curr.next;

    while (next) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = curr.next;

    }
    curr.next = prev;
    this.head = curr;
  }

  // remove is O(n)
  removeOffset(offset) {
    if (!this.length) {
      throw new Error('No nodes to remove');

    } else if (offset === 0) {
      return this[_removeFirst]();

    } else if (offset === this.length - 1) {
      return this[_removeLast]();

    } else {
      let curr = this.head;

      for (let i = 0; i < offset - 1; i++) {
        curr = curr.next;
      }

      let node = curr.next;
      curr.next = node.next;
      node.next = null;
      this.length--;

      return node;
    }
  }

  // private class methods for remove, using Symbols!
  [_removeFirst]() {
    let node = this.head;
    this.head = this.head.next || null;
    this.length--;
    return node;
  }

  [_removeLast]() {
    let curr = this.head;
    let prev = null;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    let node = curr;
    prev.next = null;
    this.tail = prev;
    this.length--;
    return node;
  }

  removeItem(targetValue) {
    if (!this.length) {
      throw new Error('No nodes to remove');
    } else {
      let curr = this.head;
      let next = curr.next;
      let offset = 0;

      while (next && curr.value !== targetValue) {
        curr = next;
        offset++;
      }

      if (curr.value === targetValue) {
        return this.removeOffset(offset);
      }
    }
  }

  // insertBefore() has Big O(n)
  insertBefore(referenceVal, newVal) {
    if (referenceVal === 0) {
      this.prepend(newVal);

    } else {
      let curr = this.head;
      let prev = null;

      while (referenceVal !== curr.value) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = new Node(newVal, curr);
    }

    this.length++;
  }

  // insertAfter() has Big O(n)
  insertAfter(referenceVal, newVal) {
    let curr = this.head;

    while (referenceVal !== curr.value) {
      curr = curr.next;
    }

    curr.next = new Node(newVal, curr.next);
    this.length++;
  }

  kthFromEnd(k) {
    if (k > this.length - 1) {
      throw new Error('out of bounds');
    }

    let curr = this.head;
    for (let i = 0; i < this.length - (k + 1); i++) {
      curr = curr.next;
    }

    return curr.value;
  }

  // serialize is O(1)
  serialize() {
    return JSON.stringify(this);
  }

  // deserialize is O(1)
  static deserialize(listObject) {
    let newList = JSON.parse(listObject);
    return new LinkedList(newList);
  }

  // merges list 2 into list 2, alternating values with list 1 starting the head
  static mergeLists(list1, list2) {

    if (!list1.length) { return list2.head; }
    if (!list2.length) { return list1.head; }

    let curr = list1.head.next;
    while (curr && list2.length) {
      list1.insertBefore(curr.value, list2.removeOffset(0).value);
      curr = curr.next;
    }

    while (list2.length) {
      list1.append(list2.removeOffset(0).value);
    }

    return list1.head;
  }

}

module.exports = LinkedList;