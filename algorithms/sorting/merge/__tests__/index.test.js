'use strict';

const mergeSort = require('../index');

describe('merge sort', () => {
  test('should sort an array in numerical order', () => {
    let test = [42, 35, 17, 23, 999];
    expect(mergeSort(test)).toEqual([17, 23, 35, 42, 999]);

  });

  test('should sort an array based on a provided comparator', () => {
    let test = [42, 35, 17, 23, 999];
    let comparator = (a, b) => a > b;
    let actual = mergeSort(test, comparator);
    expect(actual).toEqual([999, 42, 35, 23, 17]);

  });
  test('should sort an array of strings', () => {
    let test = ['hello', 'friend', 'again'];
    let actual = mergeSort(test);
    expect(actual).toEqual(['again', 'friend', 'hello']);
  });
});
