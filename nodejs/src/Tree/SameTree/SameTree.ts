import BaseTreeAlgorithm from "../BaseTreeAlgorithm";
import Tree from "../Tree";
import TreeNode from "../TreeNode";

class SameTree<T> extends BaseTreeAlgorithm<T>{
  tree2: Tree<T>

  constructor(tree1: Tree<T>, tree2: Tree<T>) {
    super(tree1);
    this.tree2 = tree2
  }

  exec(): boolean {
    let res: boolean = true;

    const travel = (node1: TreeNode<T> | null, node2: TreeNode<T> | null) => {
      if(res === false) return;
      if(node1 === null && node2 === null) return

      if(node1 === null || node2 === null || node1.value !== node2.value) {
        res = false;
        return
      }

      travel(node1.left, node2.left)
      travel(node1.right, node2.right)
    }

    travel(this.tree.root, this.tree2.root)

    return res
  }
}

export default SameTree;
