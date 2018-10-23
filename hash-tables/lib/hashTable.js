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

  remove(key) {
    if (typeof key !== 'string') {throw new Error('remove(key) requires a string representing a key');}

    const hashedKey = this.hash(key);

    this.buckets[hashedKey] = null;
  }

  stringify() {
    return JSON.stringify(this);
  }

  static deserialize(hTable) {
    if (typeof hTable !== 'string') {throw new Error('deserialize(hTable) requires a string representing a stringified hash table');}

    try {
      let temp = JSON.parse(hTable);

      const result = new HashTable(temp.bucketCount);
      result.buckets = temp.buckets;

      return result;
    } catch (e) {
      throw new Error('unable to parse string into a hash table');
    }
  }
}

module.exports = HashTable;
