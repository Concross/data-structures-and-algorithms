const repeatedWord = require('../lib/repeatedWord');

describe('repeatedWord teste', () => {
  test('should throw an error if input is not a string', () => {
    const badArgs = [null, undefined, true, 0, [], {}];

    badArgs.forEach(arg => {
      expect(() => {
        repeatedWord(arg);
      }).toThrow();
    });
  });
});
