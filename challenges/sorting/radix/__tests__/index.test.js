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
});
