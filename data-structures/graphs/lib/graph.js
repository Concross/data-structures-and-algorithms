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

  depthFirstTraversal(vertex) {

    let visited = [];
    let stack = [];

    stack.push(vertex);

    while (stack.length > 0) {
      let top = stack[stack.length - 1];

      if (!visited.includes(top)) {
        visited.push(top);
      }

      let hasUnvisitedChildren = false;

      this.vertices[top].forEach(neighbor => {
        if (!visited.includes(neighbor)) {
          hasUnvisitedChildren = true;
          stack.push(neighbor);
        }
      });

      if (!hasUnvisitedChildren) {
        stack.pop();
      }
    }

    return visited;
  }
}

module.exports = Graph;