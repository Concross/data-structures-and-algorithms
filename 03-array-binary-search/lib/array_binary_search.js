'use-strict';

module.exports = exports = (arr, target) => {
  let begin = 0;
  let end = arr.length - 1;
  console.log('called');
  let mid = (begin + end) / 2;
  while (arr[mid] !== target || begin < end) {
    if (target > arr[mid]) {
      begin = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else if (arr[begin] > target || target < arr[end]) {
      return - 1;
    } else {
      return mid;
    }
  }
};