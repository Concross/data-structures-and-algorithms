'use strict';

const array_shift = require('../lib/array_shift');

describe('insertShiftArray tests', () => {
  test('insertShiftArray(testArr, 3) should insert 3 in the middle of the array to complete the sequence', () => {
    let testArr = [0, 1, 2, 4, 5, 6];
    let actual = array_shift(testArr, 3);
    let expected = [0, 1, 2, 3, 4, 5, 6];

    expect(actual).toEqual(expected);
  });

  test('insertShiftArray([], 1) should insert the item into the array', () => {
    let actual = array_shift([], 3);
    let expected = [3];

    expect(actual).toEqual(expected);
  });

  test('insertShiftArray should throw a TypeError if first arg is not an array', () => {

    expect(() => {
      array_shift(true, 0);
    }).toThrow(TypeError);

    expect(() => {
      array_shift(1, 0);
    }).toThrow(TypeError);

    expect(() => {
      array_shift({}, 0);
    }).toThrow(TypeError);

    expect(() => {
      array_shift('[]', 0);
    }).toThrow(TypeError);

    expect(() => {
      array_shift(undefined, 0);
    }).toThrow(TypeError);

    expect(() => {
      array_shift(null, 0);
    }).toThrow(TypeError);

  });
});
