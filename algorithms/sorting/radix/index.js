const radixsort = (unsorted, base) => {
  if (unsorted.length === 1) {
    return unsorted;
  }

  let hashOne = new Map();
  let hashTwo = new Map();

  for (let i = 0; i < base; i++) {
    hashOne.set(i, []);
    hashTwo.set(i, []);
  }

  unsorted.forEach(item => {
    hashOne.get(item % base).push(item);
  });

  const range = (Math.max(...unsorted) - Math.min(...unsorted));
  let count = 0;

  while (range / Math.pow(base, count) >= 1) {
    for (let [key, bucket] of hashOne) {
      while (bucket.length) {
        let current = bucket.shift();
        hashTwo.get(getBucket(current, base, count)).push(current);
      }
    }
    [hashOne, hashTwo] = [hashTwo, hashOne];
    count++;
  }

  for (let [key, bucket] of hashOne) {
    if (key > 0) {
      while (bucket.length) {
        let current = bucket.shift();
        hashOne.get(0).push(current);
      }
    }
  }

  return hashOne.get(0);
};

const getBucket = (n, base, count) => {
  return Math.floor(n / Math.pow(base, count)) % base;
};

module.exports = radixsort;