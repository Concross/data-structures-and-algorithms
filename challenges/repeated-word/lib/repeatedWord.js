module.exports = (book) => {
  if (typeof book !== 'string') {
    throw new Error('Input Error: input must be a string');
  }
  // remove unnecessary punctuation. 
  let parsedBook = book.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  parsedBook = parsedBook.replace(/\s{2,}/g, ' ');

  const words = parsedBook.split(' ');
  const result = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (result[word]) {
      return word;
    }

    result[word] = 1;
  }
};
