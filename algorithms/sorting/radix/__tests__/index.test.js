'use strict';

const radixsort = require('../index');

describe('Radix Sort', () => {
  test('should return a sorted array from an unsorted array', () => {
    const test = [24, 132, 17, 5, 72, 104];
    const actual = radixsort(test, 10);
    const expected = [5, 17, 24, 72, 104, 132];

    expect(actual).toEqual(expected);
  });

  test('should return a sorted array from an already sorted array', () => {
    const test = [5, 17, 24, 72, 104, 132];
    const actual = radixsort(test, 10);

    expect(actual).toEqual(test);
  });

  test('should return the array if it is empty', () => {
    const test = [];
    const actual = radixsort(test, 10);

    expect(actual).toEqual(test);
  });

  test('should return an array of a single value', () => {
    const test = [11];
    const actual = radixsort(test, 10);

    expect(actual).toEqual([11]);
  });

  test('should return a sorted array for an unsorted array with large N', () => {
    const test = [1, 234, 152, 53, 123, 13245, 64, 123, 534, 0, 32];
    const actual = radixsort(test, 10);
    const expected = [0, 1, 32, 53, 64, 123, 123, 152, 234, 534, 13245];

    expect(actual).toEqual(expected);
  });

  test('should return a sorted array from an unsorted array with large K (magnitude of range)', () => {
    const test = [7, 6, 3, 5, 2, 1, 23452345, 114523462346, 123412341, 123452345];
    const actual = radixsort(test, 10);
    const expected = [1, 2, 3, 5, 6, 7, 23452345, 123412341, 123452345, 114523462346];

    expect(actual).toEqual(expected);
  });
});
