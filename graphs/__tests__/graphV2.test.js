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

    test('should set the value of a vertex to be an empty array of edges', () => {
      let graph = new Graph();

      graph.addVertex('b');

      let actual = graph.adjList.get('b');
      let expected = new Map();

      expect(actual).toEqual(expected);
    });
  });

  describe('Graph 2.0 addEdge tests', () => {

    test('should add a weighted edge to the src and dest vertexes in the adjacency list', () => {
      let graph = new Graph();

      graph.adjList.set('a', new Map());
      graph.adjList.set('b', new Map());

      graph.addEdge('a', 'b', 1);

      graph.printAdjList();
      let actual = graph.adjList.get('a').get('b');

      expect(actual).toBe(1);

      actual = graph.adjList.get('b').get('a');
      expect(actual).toBe(1);
    });
  });
});