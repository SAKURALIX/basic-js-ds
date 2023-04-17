const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots
  }

  add(data) {
    const newNode = new Node(data)
    if(!this.roots) {
      this.roots = newNode;
      return;
    }

    let currentNode = this.roots;

    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let node = this.roots;
    while(node != null) {
      if(node.data === data) {
        return true;
      } else if(data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }

  find(data) {
      let node = this.roots;
      while(node != null) {
        if(node.data === data) {
          return node;
        } else if(data < node.data) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
      return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};