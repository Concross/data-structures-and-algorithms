const timsort = require('../index');

describe('timsort tests', () => {

  test('should return a sorted array', () => {
    const test = [42, 35, 17, 23, 999];
    const expected = [17, 23, 35, 42, 999];
    expect(timsort(test)).toEqual(expected);
  });

  test('should return an already sorted array', () => {
    const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(timsort(test)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('should return the reverse of a reverse sorted array', () => {
    const test = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(timsort(test)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});