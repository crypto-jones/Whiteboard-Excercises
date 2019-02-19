// Balanced Binary Tree
// Given a binary tree class that looks like this:

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}
// Write a function that checks to see if a given binary tree is perfectly balanced,
// meaning all leaf nodes are located at the same depth.
// Your function should return true if the tree is perfectly balanced and false otherwise.
// Analyze the time and space complexity of your function.

// BT is balanced if
// 1) Left subtree of T is balanced
// 2) Right subtree of T is balanced
// 3) The difference between depths of left subtree and right subtree is not more than 1

function checkBalanced(rootNode) {
  // Case for empty tree
  if (!rootNode) return true;

  // helper function to check the min depth of tree
  function minDepth(node) {
    if (!node) return 0;
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
  }

  function maxDepth(node) {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
  }

  return maxDepth(rootNode) - minDepth(rootNode) === 0;
}

const root = new BinaryTreeNode(5);
console.log(checkBalanced(root)); // should print true

root.insertLeft(10);
console.log(checkBalanced(root)); // should print false

root.insertRight(11);
console.log(checkBalanced(root)); // should print true;
