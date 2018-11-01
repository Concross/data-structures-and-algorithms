'use strict';

let insertionSort = (array, compare) => {
  compare = compare ? compare : (a, b) => a < b;

  for (let i = 0; i < array.length; i++) {
    let tempIndex = array[i];
    let j = i - 1;

    while (j >= 0 && compare(tempIndex, array[j])) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = tempIndex;
  }

  return array;
};

module.exports = insertionSort;