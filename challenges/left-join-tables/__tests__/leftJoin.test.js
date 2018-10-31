const leftJoin = require('../lib/leftJoin');

describe('left join', () => {
  const synonym = {
    'fond': 'enamored',
    'wrath': 'anger',
    'diligent': 'employed',
    'outfit': 'garb',
    'guide': 'usher',
  };

  const antonym = {
    'fond': 'averse',
    'wrath': 'delight',
    'diligent': 'idle',
    'guide': 'follow',
    'flow': 'jam',
  };

  test('should combine collisions during join', () => {
    const actual = leftJoin(synonym, antonym).fond;
    const expected = ['enamored', 'averse'];

    expect(actual).toEqual(expected);
  });

  test('should append null if key exists in left table and not in right', () => {
    const actual = leftJoin(synonym, antonym).outfit;
    const expected = ['garb', null];

    expect(actual).toEqual(expected);
  });

  test('should exclude keys that exist in right table and NOT in left table', () => {
    const actual = leftJoin(synonym, antonym).flow;
    expect(actual).toBeUndefined();
  });
});
