const treeIntersection = require('../lib/treeIntersection');
const BinaryTree = require('../../../trees/lib/models/binarySearchTree');
const Node = require('../../../trees/lib/models/node');

describe('tree intersection', () => {
  test('should throw an error if only one tree is passed', () => {
    let tree = new BinaryTree(new Node(4));

    expect(() => {
      treeIntersection(tree);
    }).toThrow();
  });

  test('Should return an empty array if no intersection exists', () => {
    let tree1 = new BinaryTree(new Node(4));
    let tree2 = new BinaryTree(new Node(5));

    let actual = treeIntersection(tree1, tree2);

    expect(actual).toEqual([]);
  });
});
