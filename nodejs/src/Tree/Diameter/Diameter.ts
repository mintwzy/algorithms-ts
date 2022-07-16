import BaseTreeAlgorithm from "../BaseTreeAlgorithm";
import TreeNode from "../TreeNode";

class Diameter<T> extends BaseTreeAlgorithm<T>{
  exec(): number{

    let res: number = 0;

    const height = (node: TreeNode<T> | null): number => {
      if(node === null) return 0;
      const left: number = height(node.left)
      const right: number = height(node.right)
      res = Math.max(left + right, res)

      return Math.max(left, right) + 1
    }

    height(this.tree.root)

    return res
  }
}

export default Diameter;
