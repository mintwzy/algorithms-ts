import TreeNode from "./TreeNode";

class Tree<T> {
  root: TreeNode<T> | null

  constructor(root?: TreeNode<T>) {
    this.root = (root === undefined ? null : root)
  }
}

export default Tree;
