'use strict';

const selectSort = require('./selection/index.js');
const mergeSort = require('./merge/index.js');
const insertionSort = require('./insertion/index.js');
const timsort = require('./timsort/index.js');
const radixsort = require('./radix/index.js');

let sorted = selectSort([42, 35, 17, 23, 999]);
console.log(sorted);

sorted = mergeSort([42, 35, 17, 23, 999]);
console.log(sorted);

sorted = insertionSort([42, 35, 17, 23, 999]);
console.log(sorted);

sorted = timsort([42, 35, 17, 23, 999]);
console.log(sorted);

sorted = radixsort([42, 35, 17, 23, 999]);
console.log(sorted);