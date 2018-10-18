'use strict';

const WeightedGraph = require('../lib/weightedGraph');

describe('WeightedGraph tests', () => {

  describe('WeightedGraph constructor tests', () => {

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

  describe('WeightedGraph addVertex tests', () => {

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

  describe('WeightedGraph addEdge tests', () => {

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

  describe('WeightedGraph getEdge method tests', () => {

    test('should verify that a src vertex is defined and throw an error if not', () => {
      let graph = new WeightedGraph();

      expect(() => {
        graph.getEdge();
      }).toThrow();
    });

    test('should verify that a dest vertex is defined and throw an error if not', () => {
      let graph = new WeightedGraph();

      graph.adjList.set('a', new Map());
      graph.adjList.set('b', new Map());
      graph.addEdge('a', 'b', 1);

      expect(() => {
        graph.getEdge('a');
      }).toThrow();
    });

    test('should return undefined if dest vertex is not a direct neighbor of the src vertex', () => {
      let graph = new WeightedGraph();

      graph.adjList.set('a', new Map());
      graph.adjList.set('b', new Map());
      graph.addEdge('a', 'b', 1);

      let actual = graph.getEdge('a', 'z');
      expect(actual).toBeUndefined();
    });

    test('should return the weight of an edge if it exists', () => {
      let graph = new WeightedGraph();

      graph.adjList.set('a', new Map());
      graph.adjList.set('b', new Map());
      graph.addEdge('a', 'b', 1);

      let actual = graph.getEdge('a', 'b');
      expect(actual).toBe(1);
    });
  });

  describe('WeightedGraph getEdges tests', () => {

    test('should return an array with [bool, string]', () => {
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

      let actual = graph.getEdges(['a', 'f', 'c']);
      let expected = [true, '$14'];

      expect(actual).toEqual(expected);
    });

    test('should return an array with [false, "$0"] if a direct flight cannot be made', () => {
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

      let actual = graph.getEdges(['a', 'e', 'g']);
      let expected = [false, '$0'];

      expect(actual).toEqual(expected);
    });
  });
});