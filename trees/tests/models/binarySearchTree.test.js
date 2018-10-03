'use strict';

const BST = require('../../lib/models/binarySearchTree');
const Node = require('../../lib/models/node');

describe('BinarySearchTree constructor', () => {

  test('should instantiate as a BinarySearchTree object', () => {
    let bst = new BST();

    expect(bst).toBeInstanceOf(BST);
  });

  test('should instantiate with a reference to the root of the tree if given', () => {
    let bst = new BST(new Node(1));
    let actual = bst.root.value;
    let expected = 1;

    expect(actual).toBe(expected);
  });
});

/***********************************
*              INSERT              *
************************************/
describe('BinarySearchTree insert(node) tests', () => {

  test('should throw error if anything other than a node is passed into the method', () => {
    let bst = new BST();
    expect(() => {
      bst.insert(1);
    }).toThrow();
  });

  test('should set the root reference to be the new node if tree is previously empty', () => {
    let bst = new BST();
    bst.insert(new Node(1));

    let actual = bst.root.value;
    let expected = 1;
    expect(actual).toBe(expected);
  });

  test('should insert a new node to the left if node value is less than root value', () => {
    let bst = new BST(new Node(10));
    bst.insert(new Node(1));

    let actual = bst.root.left.value;
    let expected = 1;
    expect(actual).toBe(expected);
  });

  test('should insert a new node to the right if node value is greater than root value', () => {
    let bst = new BST(new Node(1));
    bst.insert(new Node(10));

    let actual = bst.root.right.value;
    let expected = 10;
    expect(actual).toBe(expected);
  });

  test('should insert a new node to the left if node value is less than any parent value', () => {
    let bst = new BST(new Node(10));
    bst.insert(new Node(9));
    bst.insert(new Node(8));

    let actual = bst.root.left.left.value;
    let expected = 8;

    expect(actual).toBe(expected);
  });

  test('should insert a new node to the right if node value is less than any parent value', () => {
    let bst = new BST(new Node(10));
    bst.insert(new Node(11));
    bst.insert(new Node(12));

    let actual = bst.root.right.right.value;
    let expected = 12;

    expect(actual).toBe(expected);
  });
});

/***********************************
*           findMin Node           *
************************************/
describe('BinarySearchTree findMin(node) tests', () => {

  test('should throw an error if passed a value other than a node', () => {
    let bst = new BST(new Node(10));

    expect(() => {
      bst.findMin(1);
    });
  });

  test('should return the node with the minimum value in the tree', () => {
    let bst = buildTestTree();

    let actual = BST.findMin(bst.root).value;
    let expected = 1;
    expect(actual).toBe(expected);
  });

  test('should return the proper minimum for any subtree', () => {
    let bst = buildTestTree();

    let actual = BST.findMin(bst.root.right).value;
    let expected = 6;
    expect(actual).toBe(expected);
  });
});

/***********************************
*     FIND MAX ANY BINARY TREE     *
************************************/

describe('BinarySearchTree static method findMax', () => {

  test('should return the max value of a tree with a single node', () => {
    let bst = new BST(new Node(1));
    let actual = BST.findMaxBinaryTree(bst);
    let expected = 1;

    expect(actual).toBe(expected);
  });

  test('should return the max value of a balanced tree', () => {
    let bst = buildBalancedTree();
    let actual = BST.findMaxBinaryTree(bst);
    let expected = 9;

    expect(actual).toBe(expected);
  });

  test('should return the max value of an imbalanced tree', () => {
    let bst = buildImbalancedTree();
    let actual = BST.findMaxBinaryTree(bst);
    let expected = 9;

    expect(actual).toBe(expected);
  });
});
/***********************************
*             FIZZBUZZ             *
************************************/
describe('BinarySearchTree FizzBuzz algorithm', () => {

  test('should only accept a tree as an argument', () => {

    let badArgs = [[], {}, '', 1, false];

    badArgs.forEach(arg => {
      expect(() => {
        BST.fizzBuzz(1);
      }).toThrow();
    });
  });

  test('should convert nodes divisible by 15 to "fizzbuzz"', () => {
    let bst = buildFizzBuzzTree();
    /*
            30
           /  \
          3    5
         /    / \
        9    2   8
    */
    BST.fizzBuzz(bst);
    let actual = bst.root.value;
    let expected = 'fizzbuzz';

    expect(actual).toBe(expected);
  });

  test('should convert nodes divisible by 5 to "buzz"', () => {
    let bst = buildFizzBuzzTree();
    /*
            30
           /  \
          3    5
         /    / \
        9    2   8
    */
    BST.fizzBuzz(bst);
    let actual = bst.root.right.value;
    let expected = 'buzz';

    expect(actual).toBe(expected);
  });

  test('should convert nodes divisible by 3 to "fizz"', () => {
    let bst = buildFizzBuzzTree();
    /*
            30
           /  \
          3    5
         /    / \
        9    2   8
    */
    BST.fizzBuzz(bst);
    let actual = bst.root.left.value;
    let expected = 'fizz';

    expect(actual).toBe(expected);

    actual = bst.root.left.left.value;
    expect(actual).toBe(expected);
  });
});

/***********************************
*     BREADTH FIRST TRAVERSAL      *
************************************/
describe('BinarySearchTree breadthFirstTraversal tests', () => {

  test('should throw an error if root is null', () => {
    let bst = new BST();

    expect(() => {
      bst.breadthFirstTraversal();
    }).toThrow();
  });

  test('should properly traverse a tree of height 1, returning an array containing the single node value', () => {
    let bst = new BST(new Node(1));

    let actual = bst.breadthFirstTraversal();
    let expected = [1];

    expect(actual).toEqual(expected);
  });

  test('should properly traverse a balanced tree, returning an array containing the proper values', () => {
    let bst = buildBalancedTree();
    /*
                5
              /   \
             /     \
            3       7
           / \     / \
          2   4   6   8
         /             \
        1               9
    */

    let actual = bst.breadthFirstTraversal();
    let expected = [5, 3, 7, 2, 4, 6, 8, 1, 9];

    expect(actual).toEqual(expected);
  });

  test('should properly traverse an imbalanced tree, returning an array containing the proper values', () => {
    let bst = buildImbalancedTree();
    /*
            5
           / \
          /   \
         /     \
        7       9
         \     /
          1   2
         / \   \
        4   6   8
             \
              3
    */
    let actual = bst.breadthFirstTraversal();
    let expected = [5, 7, 9, 1, 2, 4, 6, 8, 3];

    expect(actual).toEqual(expected);
  });
});
/***********************************
*        Helper Functions          *
************************************/

let buildTestTree = () => {

  /*
                  5
                /   \
               /     \
              3       6
             / \       \
            1   4       8
             \         / \
              2       7   9
  */
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  let eight = new Node(8);
  let nine = new Node(9);

  five.left = three;
  five.right = six;

  three.left = one;
  three.right = four;

  one.right = two;
  six.right = eight;

  eight.left = seven;
  eight.right = nine;

  let bst = new BST(five);

  return bst;
};

let buildBalancedTree = () => {

  /*
                5
              /   \
             /     \
            3       7
           / \     / \
          2   4   6   8
         /             \
        1               9
*/
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  let eight = new Node(8);
  let nine = new Node(9);

  five.left = three;
  five.right = seven;

  three.left = two;
  three.right = four;

  seven.left = six;
  seven.right = eight;

  two.left = one;

  eight.right = nine;

  let bst = new BST(five);

  return bst;
};

let buildImbalancedTree = () => {

  /*
          5
         / \
        /   \
       /     \
      7       9
       \     /
        1   2
       / \   \
      4   6   8
           \
            3
  */
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  let eight = new Node(8);
  let nine = new Node(9);

  five.left = seven;
  seven.right = one;
  one.left = four;
  one.right = six;
  six.left = three;
  five.right = nine;
  nine.left = two;
  two.right = eight;

  let bst = new BST(five);

  return bst;
};

let buildDegenerateTree = () => {
  /*
    1
     \
      2
       \
        3 .. etc
  */
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  let eight = new Node(8);
  let nine = new Node(9);

  one.right = two;
  two.right = three;
  three.right = four;
  four.right = five;
  five.right = six;
  six.right = seven;
  seven.right = eight;
  eight.right = nine;

  let bst = new BST(one);

  return bst;
};

let buildFizzBuzzTree = () => {
  let thirty = new Node(30);
  let five = new Node(5);
  let three = new Node(3);
  let two = new Node(2);
  let eight = new Node(8);
  let nine = new Node(9);

  /*
          30
         /  \
        3    5
       /    / \
      9    2   8
  */
  thirty.right = five;
  thirty.left = three;
  five.left = two;
  five.right = eight;
  three.left = nine;

  let bst = new BST(thirty);

  return bst;
};