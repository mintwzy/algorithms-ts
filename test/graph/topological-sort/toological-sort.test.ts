import {describe} from "mocha";
import Graph from "../../../src/graph/Graph";
import GraphNode from "../../../src/graph/GraphNode";
import {expect} from "chai";
import TopologicalSort from "../../../src/graph/topological-sort/topological-sort";

describe('topological sort Kahn BFS', () => {
  const graph: Graph<number> = new Graph<number>();

  const node2: GraphNode<number> = new GraphNode(2);
  const node3: GraphNode<number> = new GraphNode(3);
  const node5: GraphNode<number> = new GraphNode(5);
  const node7: GraphNode<number> = new GraphNode(7);
  const node8: GraphNode<number> = new GraphNode(8);
  const node9: GraphNode<number> = new GraphNode(9);
  const node10: GraphNode<number> = new GraphNode(10);
  const node11: GraphNode<number> = new GraphNode(11);

  graph.setAdjacencyList(node2, [])
  graph.setAdjacencyList(node3, [node8, node10])
  graph.setAdjacencyList(node5, [node11])
  graph.setAdjacencyList(node7, [node8, node11])
  graph.setAdjacencyList(node8, [node9])
  graph.setAdjacencyList(node9, [])
  graph.setAdjacencyList(node10, [])
  graph.setAdjacencyList(node11, [node2, node9, node10])

  const topologicalSort = new TopologicalSort<number>(graph);
  topologicalSort.execKahnBFS()

  expect(topologicalSort.resultT).deep.equal( [3, 5, 7, 8, 11, 2, 9, 10])
})
