import GraphNode from "./GraphNode";

class Graph<T>{
  adjacencyList: Map<GraphNode<T>, GraphNode<T>[]>;

  constructor() {
    this.adjacencyList = new Map<GraphNode<T>, GraphNode<T>[]>();
  }

  setAdjacencyList(key: GraphNode<T>, list: GraphNode<T>[]){
    this.adjacencyList.set(key, list)
  }

  getNeighbours(node: GraphNode<T>): GraphNode<T>[]{
    return this.adjacencyList.get(node) || [];
  }

  getNodeKeys(): IterableIterator<GraphNode<T>> {
    return this.adjacencyList.keys();
  }


}

export default Graph;
