import BaseTreeAlgorithm from "../BaseTreeAlgorithm";
import TreeNode from "../TreeNode";

class InvertBinaryTree<T> extends BaseTreeAlgorithm<T>{

  exec(node: TreeNode<T> | null): TreeNode<T> | null{
    if(node === null){
      return null;
    }

    const temp: TreeNode<T> | null = node.left;
    node.left = node.right;
    node.right = temp;

    this.exec(node.left)
    this.exec(node.right)

    return node;
  }
}

export default InvertBinaryTree
