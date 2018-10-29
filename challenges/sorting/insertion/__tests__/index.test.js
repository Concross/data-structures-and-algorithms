'use strict';

/***********************************
* Testing supplied by Sharon Miller 
*  https://github.com/SharonMiller 
************************************/

const insertionSort = require('../index');

describe('insertion sort', () => {
  const testArr = [42, 35, 17, 23, 999];

  test('should sort an array in numerical order', () => {
    expect(insertionSort(testArr)).toEqual([17, 23, 35, 42, 999]);
  });

  test('should sort an array based on a given comparator', () => {
    const comparator = (a, b) => a > b;
    const actual = insertionSort(testArr, comparator);
    expect(actual).toEqual([999, 42, 35, 23, 17]);

  });
  test('should sort an array of strings', () => {
    const actual = insertionSort(['connor', 'sharon', 'tim', 'alex']);
    expect(actual).toEqual(['alex', 'connor', 'sharon', 'tim']);
  });
});