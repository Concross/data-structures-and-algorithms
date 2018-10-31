'use strict';

const quicksort = (unsorted, comparator) => {
  const compare = comparator ? comparator : (a, b) => a < b;

  if (unsorted.length <= 1) {
    return unsorted;
  }

  let pivot = unsorted.pop();
  let left = [];
  let right = [];
  let result = [];

  unsorted.forEach(item => {
    if (compare(item, pivot)) {
      left.push(item);
    } else {
      right.push(item);
    }
  });

  return [...quicksort(left), pivot, ...quicksort(right)];
};

module.exports = quicksort;