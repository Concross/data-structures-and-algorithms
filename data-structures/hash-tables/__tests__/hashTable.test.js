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

  describe('set method', () => {
    test('should throw error if not passed both parameters', () => {
      const hash = new HashTable(5);

      expect(() => {
        hash.set();
      }).toThrow();

      expect(() => {
        hash.set('key');
      }).toThrow();

      expect(() => {
        hash.set(1);
      }).toThrow();
    });

    test('should throw error if key is not a string', () => {
      const hash = new HashTable(5);

      expect(() => {
        hash.set(1, 0);
      }).toThrow();
    });

    test('should NOT throw error if parameters are valid', () => {
      const hash = new HashTable(5);

      expect(() => {
        hash.set('connor', 1);
      }).not.toThrow();
    });

    test('should run hash method on key', () => {
      const hashTable = new HashTable(5);
      hashTable.hash = jest.fn();

      hashTable.set('connor', 1);

      expect(hashTable.hash).toHaveBeenCalled();
    });

    test('should place a value into a bucket', () => {
      const hashTable = new HashTable(5);

      hashTable.set('connor', 1);

      expect(hashTable.buckets[0]).toEqual({'connor': 1});
    });
  });

  describe('get method', () => {
    test('should throw error if passed key is not a string', () => {
      const hashTable = new HashTable(5);
      hashTable.buckets[0] = {'connor': 1};

      const badArgs = [[], {}, true, 0, null, undefined];

      badArgs.forEach(arg => {
        expect(() => {
          hashTable.get(arg);
        }).toThrow();
      });
    });

    test('should not throw an error if passed key is a string', () => {
      const hashTable = new HashTable(4);

      const goodArgs = ['1', 'true', 'connor', 'key'];
      goodArgs.forEach((arg, i) => {
        hashTable.buckets[i] = {[arg]: true};
      });


      goodArgs.forEach(arg => {
        expect(() => {
          hashTable.get(arg);
        }).not.toThrow();
      });
    });

    test('should return the value of the key in the bucket', () => {
      const hashTable = new HashTable(5);
      hashTable.buckets[0] = {'connor': 1};

      let actual = hashTable.get('connor');
      let expected = 1;

      expect(actual).toBe(expected);
    });
  });

  describe('remove method', () => {
    test('should throw error if passed key is not a string', () => {
      const hashTable = new HashTable(5);
      hashTable.buckets[0] = {'connor': 1};

      const badArgs = [[], {}, true, 0, null, undefined];

      badArgs.forEach(arg => {
        expect(() => {
          hashTable.remove(arg);
        }).toThrow();
      });
    });

    test('should not throw an error if passed key is a string', () => {
      const hashTable = new HashTable(4);

      const goodArgs = ['1', 'true', 'connor', 'key'];
      goodArgs.forEach((arg, i) => {
        hashTable.buckets[i] = {[arg]: true};
      });


      goodArgs.forEach(arg => {
        expect(() => {
          hashTable.remove(arg);
        }).not.toThrow();
      });
    });

    test('should remove the key-value pair from the bucket, replacing it with null', () => {
      const hashTable = new HashTable(5);
      hashTable.buckets[0] = {'connor': 1};

      hashTable.remove('connor');

      expect(hashTable.buckets[0]).toBeNull();
    });
  });

  describe('serialize method', () => {
    test('should return a string', () => {
      const hashTable = new HashTable(5);
      const stringified = hashTable.stringify();

      expect(typeof stringified).toBe('string');
    });

    test('should match a string version of the hash table', () => {
      const hashTable = new HashTable(5);
      const stringified = hashTable.stringify();
      const expected = '{"bucketCount":5,"buckets":[null,null,null,null,null]}';

      expect(stringified).toEqual(expected);
    });

    test('should match a more complex string version of the hash table', () => {
      const hashTable = new HashTable(5);
      hashTable.buckets[0] = {'connor': true};
      hashTable.buckets[1] = {'sharon': true};
      hashTable.buckets[3] = {'alex': 42};

      const stringified = hashTable.stringify();
      const expected = '{"bucketCount":5,"buckets":[{"connor":true},{"sharon":true},null,{"alex":42},null]}';

      expect(stringified).toEqual(expected);
    });
  });

  describe('deserialize method', () => {
    test('should throw an error if not passed a string', () => {
      const hashTable = new HashTable(5);
      const stringified = hashTable.stringify();

      const badArgs = [[], {}, true, 0, null, undefined];

      badArgs.forEach(arg => {
        expect(() => {
          HashTable.deserialize(arg);
        }).toThrow();
      });
    });

    test('should throw an error if unable to parse string back into a hash table', () => {
      const stringified = 'bad hash table';

      expect(() => {
        HashTable.deserialize(stringified);
      }).toThrow('unable to parse string into a hash table');
    });

    test('should return a properly deserialized hash table', () => {
      const hashTable = new HashTable(5);
      const stringified = hashTable.stringify();

      let newTable = HashTable.deserialize(stringified);
      expect(newTable).toBeInstanceOf(HashTable);
    });
  });
});
