'use strict';

const quicksort = require('../index');

describe('quick sort', () => {
  test('should sort an array in numerical order', () => {
    let test = [42, 35, 17, 23, 999];
    expect(quicksort(test)).toEqual([17, 23, 35, 42, 999]);
  });

  test('should return the original array if there is only one item', () => {
    let test = [42];
    let actual = quicksort(test);
    expect(actual).toEqual([42]);
  });

  test('should sort an array of strings', () => {
    let test = ['hello', 'friend', 'again'];
    let actual = quicksort(test);
    expect(actual).toEqual(['again', 'friend', 'hello']);
  });
});
