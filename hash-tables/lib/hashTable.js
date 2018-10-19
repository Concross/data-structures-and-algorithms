class HashTable {
  constructor(bucketCount) {
    this.bucketCount = bucketCount;
    this.buckets = Array(this.bucketCount).fill(null);
  }
}

module.exports = HashTable;
