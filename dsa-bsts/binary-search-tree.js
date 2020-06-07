class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if root is null, insert value at root
    // else insert left or right
    if (this.root === null) {this.root = new Node(val);return this}
    let currentNode = this.root;
    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {currentNode.left = new Node(val); return this}
        else currentNode = currentNode.left;
      }
      else if (val > currentNode.val) {
        if (currentNode.right === null) {currentNode.right = new Node(val); return this}
        else currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    // insert at root for empty tree
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
    } else {
      if (currentNode.right === null) {
        currentNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.right);
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let found = false;

    if (val===current.val) return current;

    while (current && !found) {
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
      else found = true;
    }
    if (!found) return undefined;
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (currentNode === null) return undefined;

    // look left
    if (val < currentNode.val) return this.findRecursively(val, currentNode.left);
    // look right
    if (val > currentNode.val) return this.findRecursively(val, currentNode.right);

    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];
    let currentNode = this.root;

    const traverse = node => {
      // visiting first node
      visited.push(node.val);
      // go left if node exists
      if (node.left !== null) traverse(node.left);
      // go right if node exists
      if (node.right !== null) traverse(node.right);
    }

    traverse(currentNode);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    let currentNode = this.root;

    const traverse = node => {
      if (node.left !== null) traverse(node.left);
      visited.push(node.val);
      if (node.right !== null) traverse(node.right);
    }

    traverse(currentNode);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    let currentNode = this.root;

    const traverse = node => {
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
      visited.push(node.val);
    }

    traverse(currentNode);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let visited = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
