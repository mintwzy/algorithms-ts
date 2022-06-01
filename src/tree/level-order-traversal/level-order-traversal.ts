import Tree from "../Tree";
import TreeNode from "../TreeNode";

class LevelOrderTraversal<T>{
  tree: Tree<T>

  result: T[][]

  constructor(tree: Tree<T>) {
    this.tree = tree
    this.result = []
  }

  exec() {
    if(this.tree.root === null) {
      return
    }
    const queue: (TreeNode<T> | null)[] = [this.tree.root]

    while(queue.length > 0){
      const temp: T[] = []
      const LEN: number = queue.length;

      for(let i = 0; i < LEN; i++){
        // @ts-ignore
        const front: TreeNode<T> = queue.shift()
        if(front !== null){
          // @ts-ignore
          temp.push(front.value)
          queue.push(front.left)
          queue.push(front.right)
        }
      }

      if(temp.length > 0){
        this.result.push(temp)
      }
    }
  }
}


export default LevelOrderTraversal
