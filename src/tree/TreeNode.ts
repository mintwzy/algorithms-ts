class TreeNode<T> {
  value: T | undefined;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value?: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.value = value;
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }


}

export default TreeNode;
