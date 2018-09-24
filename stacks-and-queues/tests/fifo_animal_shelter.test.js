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

});