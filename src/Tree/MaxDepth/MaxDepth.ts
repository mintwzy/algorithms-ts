import BaseTreeAlgorithm from "../BaseTreeAlgorithm";
import TreeNode from "../TreeNode";

/**
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 */
class MaxDepth<T> extends BaseTreeAlgorithm<T>{

  exec(): number {

    const height = (node: TreeNode<T> | null): number => {
      if(node === null) return 0;
      // left depth or right depth + 1
      return Math.max(height(node.left), height(node.right)) + 1
    }

    return height(this.tree.root)
  }
}

export default MaxDepth;
