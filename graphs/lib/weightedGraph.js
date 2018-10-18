'use strict';

class WeightedGraph {
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

  getEdge(src, dest) {
    if (!src || !dest) {
      throw new Error('Input Error: source vertex must be defined in getEdge(src, dest)');
    }

    let hasEdge = this.adjList.get(src) && this.adjList.get(src).has(dest);
    if (hasEdge) {
      return this.adjList.get(src).get(dest);
    } else {
      throw new Error('Input Error: destination vertex is not a direct neighbor of source neigbhor');
    }
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

module.exports = WeightedGraph;