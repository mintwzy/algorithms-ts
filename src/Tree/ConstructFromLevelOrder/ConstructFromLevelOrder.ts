import Tree from "../Tree";

class ConstructFromLevelOrder<T>{
  tree: Tree<T>

  result: T[][]

  constructor(tree: Tree<T>) {
    this.tree = tree
    this.result = []
  }
}

export default ConstructFromLevelOrder;
