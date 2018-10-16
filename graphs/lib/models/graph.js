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
}

module.exports = Graph;