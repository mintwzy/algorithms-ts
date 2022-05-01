import Graph from "../Graph";
import GraphNode from "../GraphNode";

class TopologicalSort<T> {
  graph: Graph<T>;

  resultT: T[];

  constructor(graph: Graph<T>) {
    this.graph = graph;
    this.resultT = []
  }

  execKahnBFS(){
    // node queue that has no incoming edge
    const queue: GraphNode<T>[] = []
    for(const node of this.graph.getNodeKeys()){
      if(node.hasNoIncomeEdge()){
        queue.push(node)
      }
    }

    while(queue.length > 0){
      // @ts-ignore
      const frontNode: GraphNode<T> = queue.shift();
      this.resultT.push(frontNode.value)

      for(const neighbourNode of this.graph.getNeighbours(frontNode)){
        neighbourNode.decreaseIncomeEdge();
        if(neighbourNode.hasNoIncomeEdge()){
          queue.push(neighbourNode);
        }
      }
    }
  }
}

export default TopologicalSort;
