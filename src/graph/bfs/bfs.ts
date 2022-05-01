import GraphNode from "../GraphNode";
import Graph from "../Graph";

class BFS<T> {
  graph: Graph<T>;
  startNode: GraphNode<T>

  resultT: T[];
  
  constructor(graph: Graph<T>, startNode: GraphNode<T>) {
    this.graph = graph;
    this.startNode = startNode;
    this.resultT = []
  }

  exec() {
    const visited: Set<GraphNode<T>> = new Set<GraphNode<T>>();
    const queue: GraphNode<T>[] = []

    // start with startNode
    queue.push(this.startNode)
    visited.add(this.startNode)

    // loop until the queue is empty
    while(queue.length > 0) {
      // process front
      // @ts-ignore
      const frontNode: GraphNode<T> = queue.shift()
     visited.add(frontNode)
      this.resultT.push(frontNode.value)

      // process front neighbour
      for(let neighbourNode of this.graph.getNeighbours(frontNode)) {
        if(!visited.has(neighbourNode)){
          visited.add(neighbourNode)
          queue.push(neighbourNode)
        }
      }
    }
  }
}


export default BFS;
