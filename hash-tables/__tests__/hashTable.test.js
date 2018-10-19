const HashTable = require('../lib/hashTable');

describe('HashTable tests', () => {
  test('an instance created by HashTable should be of type HashTable', () => {
    const hashTable = new HashTable(5);

    expect(hashTable).toBeInstanceOf(HashTable);
  });

  test('constructor should create a bucket storage array of the given length', () => {
    const bucketCount = 5;
    const hashTable = new HashTable(bucketCount);

    let actual = hashTable.buckets.length;

    expect(actual).toBe(bucketCount);
  });

  test('bucket should contain null values when instantiated', () => {
    const bucketCount = 5;
    const hashTable = new HashTable(bucketCount);

    hashTable.buckets.forEach(bucket => {
      expect(bucket).toBeNull();
    });
  });

  test('hash method tests', () => {
    const hashTable = new HashTable(5);
    const hash = hashTable.hash;
    let actual = hash('connor');
    let expected = 0;

    expect(actual).toBe(expected);
  });
});
