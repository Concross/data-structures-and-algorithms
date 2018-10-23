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

  test('should not throw an error if input is a string', () => {
    const goodArgs = ['this is such a great book!', 'test', ''];

    goodArgs.forEach(arg => {
      expect(() => {
        repeatedWord(arg);
      }).not.toThrow('Input Error: input must be a string');
    });
  });

  test('should return the first repeated word in a book', () => {
    const book = 'Once upon a time, there was a brave princess who...';

    const actual = repeatedWord(book);

    expect(actual).toBe('a');
  });

  test('should return the first repeated word in test books', () => {
    const book = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

    const actual = repeatedWord(book);

    expect(actual).toBe('it');
  });

  test('should return the first repeated word in test books', () => {
    const book = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    const actual = repeatedWord(book);
    expect(actual).toBe('summer');
  });
});
