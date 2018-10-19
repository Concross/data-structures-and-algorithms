const HashTable = require('../lib/hashTable');

describe('HashTable tests', () => {
  test('an instance created by HashTable should be of type HashTable', () => {
    const hashTable = new HashTable(5);

    expect(hashTable).toBeInstanceOf(HashTable);
  });

  test('hash method tests', () => {
    const hashTable = new HashTable(5);
    const hash = hashTable.hash;
    let actual = hash('connor');
    let expected = 0;

    expect(actual).toBe(expected);
  });
});
