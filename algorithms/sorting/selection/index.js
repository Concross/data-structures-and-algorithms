'use strict';

let selectionSort = (array, compare) => {
  compare = compare ? compare : (a, b) => a < b;

  for (let wall = 0; wall < array.length; wall++) {
    let i = wall;

    for (let j = i + 1; j < array.length; j++) {
      if (!compare(array[i], array[j])) {
        i = j;
      }
    }

    if (i !== wall) {
      [array[wall], array[i]] = [array[i], array[wall]];
    }
  }
  return array;
};

module.exports = selectionSort;