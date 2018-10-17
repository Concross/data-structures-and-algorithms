'use strict';

const WeightedGraph = require('../lib/weightedGraph');

describe('WeightedGraph 2.0 tests', () => {

  describe('WeightedGraph 2.0 constructor tests', () => {

    test('should instantiate an object as an instance of WeightedGraph', () => {
      let graph = new WeightedGraph();

      expect(graph).toBeInstanceOf(WeightedGraph);
    });

    test('should instantiate an adjacency list as a map', () => {
      let graph = new WeightedGraph();

      let actual = graph.adjList;

      expect(actual).toBeInstanceOf(Map);
    });
  });

  describe('WeightedGraph 2.0 addVertex tests', () => {

    test('should add a vertex to the adjacency list', () => {
      let graph = new WeightedGraph();

      graph.addVertex('a');

      expect(graph.adjList.has('a')).toBe(true);
    });

    test('should set the value of a vertex to be an empty array of edges', () => {
      let graph = new WeightedGraph();

      graph.addVertex('b');

      let actual = graph.adjList.get('b');
      let expected = new Map();

      expect(actual).toEqual(expected);
    });
  });

  describe('WeightedGraph 2.0 addEdge tests', () => {

    test('should add a weighted edge to the src and dest vertexes in the adjacency list', () => {
      let graph = new WeightedGraph();

      graph.adjList.set('a', new Map());
      graph.adjList.set('b', new Map());

      graph.addEdge('a', 'b', 1);

      graph.printAdjList();
      let actual = graph.adjList.get('a').get('b');

      expect(actual).toBe(1);

      actual = graph.adjList.get('b').get('a');
      expect(actual).toBe(1);
    });

    test('should add a weighted edge when other edges already exist', () => {
      let graph = new WeightedGraph();

      let vertices = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

      vertices.forEach(vertex => {
        graph.adjList.set(vertex, new Map());
      });

      graph.addEdge('a', 'd', 1);
      graph.addEdge('d', 'e', 2);
      graph.addEdge('e', 'g', 3);
      graph.addEdge('d', 'f', 4);
      graph.addEdge('e', 'f', 5);
      graph.addEdge('a', 'f', 6);
      graph.addEdge('f', 'b', 7);
      graph.addEdge('f', 'c', 8);
      graph.addEdge('c', 'b', 9);
      graph.addEdge('a', 'b', 10);

      graph.printAdjList();
    });
  });
});