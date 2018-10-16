'use strict';

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(value, neighbors) {

    if (!value) {
      throw new Error('Input Error: addVertex(value [, neighbors]) requires a value');
    }

    this.vertices[value] = neighbors;
  }

  breadthFirstTraversal(vertex) {
    if (!vertex) {
      throw new Error('Input Error: a starting vertex must be passed as an argument');
    }

    let visited = [];

    return visited;
  }
}

module.exports = Graph;