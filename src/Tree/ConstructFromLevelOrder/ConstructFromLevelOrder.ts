import BaseTreeAlgorithm from "../BaseTreeAlgorithm";
import TreeNode from "../TreeNode";

class ConstructFromLevelOrder<T> extends BaseTreeAlgorithm<T>{
  exec(values: (T | null)[]){
    const queue: (TreeNode<T> | null)[] = []

    const insertValue = (value: T | null) => {
      const node: (TreeNode<T> | null) = (value === null ? null : new TreeNode<T>(value))

      if(this.tree.root === null) {
        this.tree.root = node
      } else {
        if(queue[0] === null){
          queue.shift()
        } else {
          if(queue[0].left === null && queue[0]?.leftAddedNull === false){
            queue[0].left = node
            queue[0]?.setLeftAddedNull()
          } else{
            queue[0].right = node
            queue.shift()
          }
        }
      }

      queue.push(node)
    }

    values.forEach(value => insertValue(value))

  }
}

export default ConstructFromLevelOrder;
