'use strict';

// TODO(connor): Rewrite graph to be extendable for weighted graph
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
    let traversalQueue = [];

    traversalQueue.push(vertex);

    while (traversalQueue.length) {
      let visitedVertex = traversalQueue.shift();

      if (!visited.includes(visitedVertex)) {
        visited.push(visitedVertex);
      }

      this.vertices[visitedVertex].forEach(neighbor => {

        if (!visited.includes(neighbor)) {
          traversalQueue.push(neighbor);
        }
      });
    }
    return visited;
  }
}

module.exports = Graph;