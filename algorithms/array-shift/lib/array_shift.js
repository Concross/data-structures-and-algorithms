'use strict';

module.exports = (arr, item) => {

  if (_isArray(arr)) {
    let middleIndex = Math.ceil(arr.length / 2);
    _insertMiddleItem(arr, middleIndex, item);

    return arr;
  }

  throw new TypeError('insertShiftArray requires an array as its first argument');
};

function _isArray(arr) {
  return arr instanceof Array;
}

function _insertMiddleItem(arr, middleIndex, item) {
  for (let i = arr.length - 1; i >= middleIndex; i--) {
    arr[i + 1] = arr[i];
  }

  arr[middleIndex] = item;
}