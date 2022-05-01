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

  /*
   1  procedure BFS(G, root) is
   2      let Q be a queue
   3      label root as explored
   4      Q.enqueue(root)
   5      while Q is not empty do
   6          v := Q.dequeue()
   7          if v is the goal then
   8              return v
   9          for all edges from v to w in G.adjacentEdges(v) do
  10              if w is not labeled as explored then
  11                  label w as explored
  12                  Q.enqueue(w)
   */
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
