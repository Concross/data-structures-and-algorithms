const insertionSort = require('../insertion/index.js');

const timsort = (arr) => {
  let runs = [];
  let sortedRuns = [];
  let sortedArray = [];
  let newRun = [arr[0]];
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    if (i === length - 1) {
      newRun.push(arr[i]);
      runs.push(newRun);
      break;
    }

    if (arr[i] < arr[i - 1]) {
      if (!newRun.length) {
        runs.push([arr[i - 1]]);
        newRun.push(arr[i]);
      } else {
        runs.push(newRun);
        newRun = [];
      }
    } else {
      newRun.push(arr[i]);
    }
  }

  runs.forEach(item => {
    sortedRuns.push(insertionSort(item));
  });

  sortedRuns.forEach(run => {
    sortedArray = merge(sortedArray, run);
  });

  return sortedArray;
};

const merge = (left, right) => {
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

    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted;
};

module.exports = timsort;