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
    console.log(visited);
    return visited;
  }
}

module.exports = Graph;