module.exports = (book) => {
  if (typeof book !== 'string') {
    throw new Error('Input Error: input must be a string');
  }
};
