import Tree from "./Tree";

class BaseTreeAlgorithm<T> {
  tree: Tree<T>

  result: T[][]

  constructor(tree: Tree<T>) {
    this.tree = tree
    this.result = []
  }
}

export default BaseTreeAlgorithm;
