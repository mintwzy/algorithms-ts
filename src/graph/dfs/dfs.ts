import GraphType from "../GraphType";
import GraphNode from "../GraphNode";

class DFS<T>{
  graph: GraphType;
  startNode: GraphNode<T>

  visited: Set<GraphNode<T>>
  stack: GraphNode<T>[];

  resultT: T[];

  constructor(graph: GraphType, startNode: GraphNode<T>) {
    this.graph = graph;
    this.startNode = startNode;
    this.visited = new Set<GraphNode<T>>();
    this.stack = []
    this.resultT = []
  }

  execRecursive(node: GraphNode<T>){
    this.visited.add(node)
    this.resultT.push(node.value)

    for(let neighbourNode of this.graph.get(node) || []){
      if(!this.visited.has(neighbourNode)){
        this.execRecursive(neighbourNode)
      }
    }
  }

  execIterative(){
    this.stack.push(this.startNode)

    while(this.stack.length > 0){
      // @ts-ignore
      const topNode: GraphNode<T> = this.stack.pop()

      if(!this.visited.has(topNode)){
        this.resultT.push(topNode.value)
        this.visited.add(topNode)
        for(let neighbourNode of this.graph.get(topNode) || []){
          this.stack.push(neighbourNode)
        }
      }
    }
  }
}

export default DFS;
