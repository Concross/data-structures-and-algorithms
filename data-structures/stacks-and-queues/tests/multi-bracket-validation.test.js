'use strict';

const multiBracketValidation = require('../lib/multi-bracket-validation');

describe('multiBracketValidation tests', () => {

  test('should return true for an empty case', () => {
    let testString = '';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(true);
  });

  test('should return false for any single bracket string', () => {
    let testStrings = ['[', '(', '{', ']', ')', '}'];

    testStrings.forEach(string => {
      expect(multiBracketValidation(string)).toBe(false);
    });
  });

  test('should return true for a balanced pair of brackets', () => {
    let testString = '()';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(true);
  });

  test('should return true for a more complex balanced set of brackets', () => {
    let testString = '([{}])';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(true);
  });

  test('should return false for more complex unbalanced set of brackets', () => {
    let testString = '([}])';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(false);
  });
});

describe('Example cases', () => {

  test('"{}(){}" should evaluate to true', () => {
    let testString = '{}(){}';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(true);
  });

  test('"()[[Extra Characters]]" should evaluate to true', () => {
    let testString = '()[[Extra Characters]]';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(true);
  });

  test('"(){}[[]]" should evaluate to true', () => {
    let testString = '(){}[[]]';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(true);
  });

  test('"{}{Code}[Fellows](())" should evaluate to true', () => {
    let testString = '{}{Code}[Fellows](())';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(true);
  });

  test('"[({}]" should evaluate to false', () => {
    let testString = '[({}]';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(false);
  });

  test('"(](" should evaluate to false', () => {
    let testString = '(](';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(false);
  });

  test('"{(})" should evaluate to false', () => {
    let testString = '{(})';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(false);
  });

  test('"(}" should evaluate to false', () => {
    let testString = '(}';
    let actual = multiBracketValidation(testString);

    expect(actual).toBe(false);
  });
});