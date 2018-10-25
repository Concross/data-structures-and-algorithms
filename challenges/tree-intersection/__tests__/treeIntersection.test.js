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

  test('Should return an array of intersecting values', () => {
    const tree1 = new BinaryTree(new Node(4));
    const tree2 = new BinaryTree(new Node(4));

    const actual = treeIntersection(tree1, tree2);

    expect(actual).toEqual([4]);
  });

  test('should return an array of intersecting values for larger tree', () => {
    const tree1 = new BinaryTree(new Node(4));
    tree1.insert(new Node(9));
    tree1.insert(new Node(10));
    tree1.insert(new Node(1));
    tree1.insert(new Node(3));

    const tree2 = new BinaryTree(new Node(4));
    tree2.insert(new Node(10));
    tree2.insert(new Node(11));
    tree2.insert(new Node(2));

    const actual = treeIntersection(tree1, tree2);
    const expected = [4, 10];

    expect(actual).toEqual(expected);
  });

  test('should return an empty array for larger trees with now shared values', () => {
    const tree1 = new BinaryTree(new Node(4));
    tree1.insert(new Node(9));
    tree1.insert(new Node(10));
    tree1.insert(new Node(7));
    tree1.insert(new Node(5));

    const tree2 = new BinaryTree(new Node(1));

    const actual = treeIntersection(tree1, tree2);
    const expected = [];

    expect(actual).toEqual(expected);
  });
});
