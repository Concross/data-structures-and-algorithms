'use strict';

class Graph {
  constructor() {

    this.adjList = new Map();
  }

  addVertex(value) {
    this.adjList.set(value, []);
  }
}

module.exports = Graph;