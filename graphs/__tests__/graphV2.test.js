'use strict';

const Graph = require('../lib/graphV2');

describe('Graph 2.0 tests', () => {

  describe('Graph 2.0 constructor tests', () => {

    test('should instantiate an object as an instance of Graph', () => {
      let graph = new Graph();

      expect(graph).toBeInstanceOf(Graph);
    });
  });
});