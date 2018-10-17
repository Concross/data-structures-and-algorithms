'use strict';

class Graph {
  constructor() {

    this.adjList = new Map();
  }

  addVertex(value) {
    this.adjList.set(value, new Map());

  }

  addEdge(src, dest, weight) {
    this.adjList.get(src).set(dest, weight);
    this.adjList.get(dest).set(src, weight);

  }

  printAdjList() {
    let msg = ``;
    for (let [vertex, value] of this.adjList) {
      msg += `${vertex}: `;
      for (let [key, value] of this.adjList.get(vertex)) {
        msg += `[${key}, ${value}] `;
      }

      msg += '\n';
    }

    console.log(msg);
  }
}

module.exports = Graph;