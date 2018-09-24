'use strict';

const AnimalShelter = require('../lib/fifo_animal_shelter');

describe('AnimalShelter constructor', () => {
  let animalShelter = new AnimalShelter();

  test('should instantiate an AnimalShelter object', () => {
    expect(animalShelter).toBeInstanceOf(AnimalShelter);
  });

  test('should instantiate with a size of 0', () => {
    expect(animalShelter.size).toBe(0);
  });
});

describe('AnimalShelter enqueue tests', () => {
  let errorMsg = 'Input Error: enqueue requires a string "cat" or "dog"';

  test('should throw an input error if no value is given', () => {
    let animalShelter = new AnimalShelter();

    expect(() => {
      animalShelter.enqueue();
    }).toThrowError(errorMsg);
  });

  test('should throw an input error if value is not a string of "cat" or "dog"', () => {
    let animalShelter = new AnimalShelter();
    let badValueTypes = [null, undefined, true, 0, [], {}, '', 'lizard'];

    badValueTypes.forEach(value => {
      expect(() => {
        animalShelter.enqueue(value);
      }).toThrowError(errorMsg);
    });
  });

  test('should add a value to the queue', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('cat');

    let actual = animalShelter.storage.head.value;
    let expected = 'cat';
    expect(actual).toBe(expected);
  });

  test('should increment the size of the animalShelter', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('cat');

    let actual = animalShelter.size;
    expect(actual).toBe(1);
  });

});

describe('AnimalShelter dequeue(pref) test', () => {

  test('should throw an error if dog or cat pref value provided and none available', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('cat');

    expect(() => {
      animalShelter.dequeue('dog');
    }).toThrowError('Error: no dogs in the queue');

  });

  test('should return appropriate preferred animal if one is in the queue', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');

    let actual = animalShelter.dequeue('cat');
    let expected = 'cat';
    expect(actual).toBe(expected);
  });

  test('should return the animal in the front of the queue if no preference is given', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');

    let actual = animalShelter.dequeue();
    let expected = 'cat';
    expect(actual).toBe(expected);
  });

  test('should return animal at front of queue if preference given is not cat or dog', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('dog');

    let actual = animalShelter.dequeue('lizard');
    let expected = 'cat';
    expect(actual).toBe(expected);
  });
});