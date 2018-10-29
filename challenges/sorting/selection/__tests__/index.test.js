'use strict';

const selectionSort = require('../index');

describe('Tests for selection sort', () => {
  test('should return a sorted array', () => {
    const actual = selectionSort([42, 35, 17, 23, 999]);
    const expected = [17, 23, 35, 42, 999];
    expect(actual).toEqual(expected);
  });

  test('should take an unsorted array return in an order based on comparator', () => {
    const testArr = [42, 35, 17, 23, 999];
    const comparator = (a, b) => a > b;
    const actual = selectionSort(testArr, comparator);
    const expected = [999, 42, 35, 23, 17];
    expect(actual).toEqual(expected);
  });

  test('should return a sorted array of strings', () => {
    const testArr = ['connor', 'alex', 'sharon'];
    const actual = selectionSort(testArr);
    expect(actual).toEqual(['alex', 'connor', 'sharon']);
  });
});