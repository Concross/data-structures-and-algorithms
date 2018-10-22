class HashTable {
  constructor(bucketCount) {
    this.bucketCount = bucketCount;
    this.buckets = Array(this.bucketCount).fill(null);
  }

  hash(key) {
    if (typeof key !== 'string') {throw new Error('hash(key) requires a string representing a key');}

    return key.split('').reduce((acc, char) => acc * char.charCodeAt(0), 1) % this.buckets.length;
  }

  set(key, value) {
    if (!key || !value) {
      throw new Error('set(key, value) requires both parameters to be passed');
    } else if (typeof key !== 'string') {
      throw new Error('set(key, value) requires key to be a string');
    }

    let hashKey = this.hash(key);
    this.buckets[hashKey] = {[key]: value};
  }

  get(key) {
    if (typeof key !== 'string') {throw new Error('get(key) requires a string representing a key');}

    const hashedKey = this.hash(key);

    const buckets = this.buckets;
    return buckets[hashedKey][key];
  }
}

module.exports = HashTable;
