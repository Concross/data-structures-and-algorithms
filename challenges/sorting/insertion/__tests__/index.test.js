'use strict';

/***********************************
* Testing supplied by Sharon Miller 
*  https://github.com/SharonMiller 
************************************/

const insertionSort = require('../index');

describe('Tests for insertion sort', () => {
  const testArr = [42, 35, 17, 23, 999];

  test('should take an unsorted array and return a sorted array', () => {
    expect(insertionSort(testArr)).toEqual([17, 23, 35, 42, 999]);
  });

  test('should take an unsorted array return the search in reverse order based on second arg', () => {
    const newCompare = (a, b) => a > b;
    const actual = insertionSort(testArr, newCompare);
    expect(actual).toEqual([999, 42, 35, 23, 17]);

  });
  test('should take an unsorted array of strings and return them in alphebetical order', () => {
    const actual = insertionSort(['hello', 'friend', 'again']);
    expect(actual).toEqual(['again', 'friend', 'hello']);
  });
});