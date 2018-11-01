module.exports = (book) => {
  if (typeof book !== 'string') {
    throw new Error('Input Error: input must be a string');
  }

  // remove unnecessary punctuation and then remove extra spaces.
  const parsedBook = book.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ');

  const words = parsedBook.split(' ');
  const result = {};

  for (let word of words) {
    word = word.toLowerCase();

    if (result[word]) {
      return word;
    }

    result[word] = 1;
  }
};
