class TreeNode<T> {
  value: T | undefined;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  leftAddedNull: boolean

  constructor(value?: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.value = value;
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.leftAddedNull = false;
  }

  setLeftAddedNull() {
    this.leftAddedNull = true;
  }


}

export default TreeNode;
