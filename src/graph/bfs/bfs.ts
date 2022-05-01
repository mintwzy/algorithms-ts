import GraphType from "../GraphType";
import GraphNode from "../GraphNode";

class BFS<T> {
  graph: GraphType;
  startNode: GraphNode<T>

  visited: Set<GraphNode<T>>
  queue: GraphNode<T>[];

  resultT: T[];
  
  constructor(graph: GraphType, startNode: GraphNode<T>) {
    this.graph = graph;
    this.startNode = startNode;
    this.visited = new Set<GraphNode<T>>();
    this.queue = []
    this.resultT = []
  }

  exec() {
    // start with startNode
    this.queue.push(this.startNode)
    this.visited.add(this.startNode)

    // loop until the queue is empty
    while(this.queue.length > 0) {
      // process front
      // @ts-ignore
      const frontNode: GraphNode<T> = this.queue.shift()
      this.visited.add(frontNode)
      this.resultT.push(frontNode.value)

      // process front neighbour
      for(let neighbourNode of this.graph.get(frontNode) || []) {
        if(!this.visited.has(neighbourNode)){
          this.visited.add(neighbourNode)
          this.queue.push(neighbourNode)
        }
      }
    }
  }
}


export default BFS;
