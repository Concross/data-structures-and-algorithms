'use strict';

const Graph = require('../../lib/models/graph');

describe('Graph constructor tests', () => {

  test('new graphs instantiated by Graph constructor should be of type Graph', () => {
    let graph = new Graph();

    expect(graph).toBeInstanceOf(Graph);
  });
});