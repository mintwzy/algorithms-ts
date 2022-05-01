import {describe} from 'mocha'
import {expect} from 'chai'
import BFS from "../../../src/graph/bfs/bfs";
import GraphType from "../../../src/graph/GraphType";
import GraphNode from "../../../src/graph/GraphNode";

describe('demo', () => {
  const graph: GraphType = new Map<GraphNode<number>, GraphNode<number>[]>();

  const node1: GraphNode<number> = new GraphNode(1);
  const node2: GraphNode<number> = new GraphNode(2);
  const node3: GraphNode<number> = new GraphNode(3);
  const node4: GraphNode<number> = new GraphNode(4);
  const node5: GraphNode<number> = new GraphNode(5);
  const node6: GraphNode<number> = new GraphNode(6);
  const node7: GraphNode<number> = new GraphNode(7);
  const node8: GraphNode<number> = new GraphNode(8);
  const node9: GraphNode<number> = new GraphNode(9);
  const node10: GraphNode<number> = new GraphNode(10);

  graph.set(node1, [node2, node3, node4]);
  graph.set(node2, [node5])
  graph.set(node3, [node6, node7])
  graph.set(node4, [node8, node9, node10])
  graph.set(node5, [node6])
  graph.set(node6, [])
  graph.set(node7, [])
  graph.set(node8, [])
  graph.set(node9, [])
  graph.set(node10, [])

  const bfs = new BFS<number>(graph, node1);
  bfs.exec();

  expect(bfs.resultT).deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
