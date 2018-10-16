'use strict';

const Graph = require('../../lib/models/graph');

describe('Graph constructor tests', () => {

  test('new graphs instantiated by Graph constructor should be of type Graph', () => {
    let graph = new Graph();

    expect(graph).toBeInstanceOf(Graph);
  });

  test('new graphs should have an empty object of vertices', () => {
    let graph = new Graph();

    let actual = graph.vertices;
    let expected = {};

    expect(actual).toEqual(expected);
  });
});

describe('Graph addVertex method tests', () => {

  test('should check that at least a value was passed as a parameter', () => {
    let graph = new Graph();

    expect(() => {
      graph.addVertex();
    }).toThrow();
  });

  test('should update the graph vertices with the new vertex', () => {
    let graph = new Graph();

    graph.addVertex('a');

    expect(graph.vertices).toHaveProperty('a');
  });

  test('vertices should have neighbors value if added', () => {
    let graph = new Graph();

    graph.addVertex('a', ['b', 'c', 'd']);

    expect(graph.vertices['a']).toEqual(['b', 'c', 'd']);
    expect(graph.vertices['a']).not.toEqual(['d', 'c', 'b']);
  });
});

describe('Graph breadthFirstTraversal tests', () => {

  test('should throw an error if now vertex was passed', () => {
    let graph = new Graph();

    expect(() => {
      graph.breadthFirstTraversal();
    }).toThrow();
  });

  test('should return an array', () => {
    let graph = new Graph();

    graph.addVertex('a', []);

    let actual = graph.breadthFirstTraversal('a');

    expect(actual).toBeInstanceOf(Array);
  });

  test('should return a breadth-first array of visited vertices', () => {
    let graph = new Graph();

    graph.vertices = {
      'a': ['b', 'c', 'd'],
      'b': ['a'],
      'c': ['a', 'd'],
      'd': ['a', 'c'],
    };

    let actual = graph.breadthFirstTraversal('a');

    expect(actual).toEqual(['a', 'b', 'c', 'd']);
  });

  test('should pass test graph', () => {
    let graph = new Graph();

    graph.vertices = {
      'pandora': ['arendelle'],
      'arendelle': ['metroville', 'monstropolis'],
      'metroville': ['narnia', 'naboo', 'monstropolis', 'arendelle'],
      'monstropolis': ['arendelle', 'metroville', 'naboo'],
      'narnia': ['naboo', 'metroville'],
      'naboo': ['narnia', 'metroville', 'monstropolis'],
    };

    let actual = graph.breadthFirstTraversal('pandora');
    let expected = ['pandora', 'arendelle', 'metroville', 'monstropolis', 'narnia', 'naboo'];

    expect(actual).toEqual(expected);
  });
});