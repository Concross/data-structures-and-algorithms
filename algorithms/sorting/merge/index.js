'use strict';

let mergeSort = (items, compare) => {
  compare = compare ? compare : (a, b) => a < b;

  if (items.length < 2) return items;

  const middle = Math.floor(items.length / 2);

  const left = items.slice(0, middle);
  const right = items.slice(middle);

  return merge(mergeSort(left, compare), mergeSort(right, compare), compare);

};

const merge = (left, right, compare) => {
  const sorted = [];

  while (left.length || right.length) {
    if (!left.length) {
      sorted.push(right.shift());
      continue;
    }

    if (!right.length) {
      sorted.push(left.shift());
      continue;
    }

    if (compare(left[0], right[0])) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted;
};

module.exports = mergeSort;