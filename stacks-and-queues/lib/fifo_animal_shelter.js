'use strict';

const Queue = require('../lib/queue');

const _validate = Symbol('validate');

class AnimalShelter extends Queue {
  constructor() {
    super();
  }

  enqueue(value) {
    this[_validate](value);

    super.enqueue(value);
  }

  [_validate](value) {
    if (typeof value !== 'string') {
      throw new Error('Input Error: enqueue requires a string "cat" or "dog"');
    }

    value.toLowerCase();
    if (value === 'dog' || value === 'cat') {
      return;

    } else {
      throw new Error('Input Error: enqueue requires a string "cat" or "dog"');
    }

    /* 
    * Any ideas why this condition would resolve to true and throw my error
    * with value 'cat'?
    * 
    * if (value !== 'dog' || value !== 'cat') {
    *   throw new Error('Input Error: enqueue requires a string "cat" or "dog"');
    * }
    * 
    */
  }

  dequeue(pref) {
    if (pref === 'cat' || pref === 'dog') {
      let item = this.storage.removeItem(pref);

      if (!item) {
        throw new Error(`Error: no ${pref}s in the queue`);
      } else {
        return item.value;
      }

    } else {
      return super.dequeue();
    }
  }
}

module.exports = AnimalShelter;