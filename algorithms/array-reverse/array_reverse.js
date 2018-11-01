'use strict';

module.exports = (arr) => {
  const reversedArr = arr;

  for (let i = 0, j = (arr.length - 1); i < j; i++ , j--) {
    [reversedArr[i], reversedArr[j]] = [reversedArr[j], reversedArr[i]];
  }

  return reversedArr;
};
