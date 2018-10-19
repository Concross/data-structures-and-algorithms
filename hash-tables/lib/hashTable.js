class HashTable {
  constructor(bucketCount) {
    this.bucketCount = bucketCount;
    this.buckets = Array(this.bucketCount).fill(null);
  }

  hash(key) {
    if (typeof key !== 'string') { throw new Error('hash(key) requires a string representing a key'); }

    return key.split('').reduce((acc, char) => acc * char.charCodeAt(0), 1) % this.buckets.length;
  }
}

module.exports = HashTable;
