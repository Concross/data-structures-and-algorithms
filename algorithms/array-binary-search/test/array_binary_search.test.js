'use strict';

const binarySearch = require('../lib/array_binary_search');

const testOdd = [1, 2, 3, 4, 5, 6, 7];
const testEven = [1, 2, 3, 4, 5, 6, 7, 8];

describe('Binary search algorithm base tests', () => {
  test('Should return -1 if target value is not in the array', () => {
    let actual = binarySearch(testOdd, 10);
    let expected = -1;
    expect(actual).toBe(expected);

    actual = binarySearch(testEven, 10);
    expected = -1;
    expect(actual).toBe(expected);
  });

  test('Should return the index if target value is in the array', () => {
    let actual = binarySearch(testOdd, 3);
    let expected = 2;
    expect(actual).toBe(expected);

    actual = binarySearch(testEven, 3);
    expected = 2;
    expect(actual).toBe(expected);

  });
});

describe('Binary search algorithm edge cases', () => {
  test('Should return 0 if target is first element in the array', () => {
    let actual = binarySearch(testOdd, 1);
    let expected = 0;
    expect(actual).toBe(expected);

  });

  test('Should return last index if element is last in the array', () => {
    let lastIndex = testOdd.length - 1;
    let actual = binarySearch(testOdd, testOdd[lastIndex]);
    let expected = lastIndex;
    expect(actual).toBe(expected);

    lastIndex = testEven.length - 1;
    actual = binarySearch(testEven, testEven[lastIndex]);
    expected = lastIndex;
    expect(actual).toBe(expected);

  });

});

describe('Binary search algorithm benchmarks', () => {
  test('Benchmark for an array of 100, target value at last index', () => {
    let test = [...Array(100).keys()];
    let actual = binarySearch(test, test[test.length - 1]);
    let expected = test.length - 1;
    expect(actual).toBe(expected);

  });

  test('Benchmark for an array of 1000, target value at last index', () => {
    let test = [...Array(1000).keys()];
    let actual = binarySearch(test, test[test.length - 1]);
    let expected = test.length - 1;
    expect(actual).toBe(expected);

  });

  test('Benchmark for an array of 10000, target value at last index', () => {
    let test = [...Array(10000).keys()];
    let actual = binarySearch(test, test[test.length - 1]);
    let expected = test.length - 1;
    expect(actual).toBe(expected);

  });

  test('Benchmark for an array of 100000, target value at last index', () => {
    let test = [...Array(100000).keys()];
    let actual = binarySearch(test, test[test.length - 1]);
    let expected = test.length - 1;
    expect(actual).toBe(expected);

  });

  test('Benchmark for an array of 1,000,000: target value at last index', () => {
    let test = [...Array(1000000).keys()];
    let actual = binarySearch(test, test[test.length - 1]);
    let expected = test.length - 1;
    expect(actual).toBe(expected);

  });

  test('Benchmark for an array of 10,000,000: target value at last index', () => {
    let test = [...Array(10000000).keys()];
    let actual = binarySearch(test, test[test.length - 1]);
    let expected = test.length - 1;
    expect(actual).toBe(expected);

  });

});