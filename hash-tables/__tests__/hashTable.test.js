const HashTable = require('../lib/hashTable');

describe('HashTable tests', () => {
  describe('constructor', () => {
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
  });

  describe('hash method', () => {
    test('hash should throw an error if not passed a string', () => {
      const hashTable = new HashTable(5);

      const hash = hashTable.hash;
      const badArgs = [[], {}, false, 0, undefined, null];

      badArgs.forEach(arg => {
        expect(() => {
          hash(arg);
        }).toThrow();
      });
    });

    test('hash should return 0 if passed key of "connor"', () => {
      const hashTable = new HashTable(5);
      let actual = hashTable.hash('connor');
      let expected = 0;

      expect(actual).toBe(expected);
    });

    test('hash should always return 0 if passed key of "connor"', () => {
      const hashTable = new HashTable(5);

      for (let i = 0; i < 2; i++) {
        let actual = hashTable.hash('connor');
        let expected = 0;

        expect(actual).toBe(expected);
      }
    });
  });
});
