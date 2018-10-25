module.exports = (tree1, tree2) => {
  if (!tree2) {
    throw new Error('INPUT ERROR: must pass two trees into treeIntersection(tree1, tree2)');
  }
  const result = [];
  const intersection = {};

  const treeMapper = (node) => {
    intersection[node.value] = node.value;
  };

  const checkIntersect = (node) => {
    if (intersection[node.value]) {
      result.push(node.value);
    }
  };

  tree1.inOrderWalk(tree1.root, treeMapper);
  tree2.inOrderWalk(tree2.root, checkIntersect);

  return result;
};
