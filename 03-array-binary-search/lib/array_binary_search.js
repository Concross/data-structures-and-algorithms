'use-strict';

module.exports = exports = (arr, target) => {
  let begin = 0;
  let end = arr.length - 1;
  let mid;
  while (begin <= end) {
    mid = Math.floor((begin + end) / 2);
    if (target > arr[mid]) {
      begin = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};