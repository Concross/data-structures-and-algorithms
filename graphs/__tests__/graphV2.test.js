'use strict';

const Graph = require('../lib/graphV2');

describe('Graph 2.0 tests', () => {

  describe('Graph 2.0 constructor tests', () => {

    test('should instantiate an object as an instance of Graph', () => {
      let graph = new Graph();

      expect(graph).toBeInstanceOf(Graph);
    });

    test('should instantiate an adjacency list as a map', () => {
      let graph = new Graph();

      let actual = graph.adjList;

      expect(actual).toBeInstanceOf(Map);
    });
  });

  describe('Graph 2.0 addVertex tests', () => {

    test('should add a vertex to the adjacency list', () => {
      let graph = new Graph();

      graph.addVertex('a');

      expect(graph.adjList.has('a')).toBe(true);
    });
  });
});