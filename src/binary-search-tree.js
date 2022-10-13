const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  rootNode = null;

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data);

    function addData(node, data) {
      if (!node) return new Node(data);
      else if (node.data === data) return node;
      else if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.rootNode, data);

    function hasData(node, data) {
      if (!node) return false;
      else if (node.data === data) return true;
      else {
        return data < node.data
          ? hasData(node.left, data)
          : hasData(node.right, data);
      }
    }
  }

  find(data) {
    return findData(this.rootNode, data);

    function findData(node, data) {
      if (!node) return null;
      else if (node.data === data) return node;
      else {
        return data < node.data
          ? findData(node.left, data)
          : findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.root = removeData(this.rootNode, data);

    function removeData(node, data) {
      if (!node) return null;
      else if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        // return null instead of element
        if (!node.left && !node.right) return null;

        if (!node.left) {
          // set the right child instead of element
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set the left child instead of element
          node = node.left;
          return node;
        }

        // if both children exist for this element
        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeData(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) return;

    let node = this.rootNode;

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) return;

    let node = this.rootNode;

    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
