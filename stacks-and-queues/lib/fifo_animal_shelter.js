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

    if (value.toLowerCase() !== 'dog' || value.toLowerCase() !== 'cat') {
      throw new Error('Input Error: enqueue requires a string "cat" or "dog"');
    }
  }
}

module.exports = AnimalShelter;