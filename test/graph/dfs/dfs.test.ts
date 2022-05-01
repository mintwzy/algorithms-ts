import {describe} from 'mocha'
import {expect} from 'chai'
import GraphType from "../../../src/graph/GraphType";
import GraphNode from "../../../src/graph/GraphNode";
import DFS from "../../../src/graph/dfs/dfs";

describe('execRecursive', () => {
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

  graph.set(node1, [node2, node5, node9]);
  graph.set(node2, [node3])
  graph.set(node3, [node4])
  graph.set(node4, [node7])
  graph.set(node5, [node6, node8])
  graph.set(node6, [node7])
  graph.set(node7, [])
  graph.set(node8, [])
  graph.set(node9, [node10])
  graph.set(node10, [])

  const dfs = new DFS<number>(graph, node1)
  dfs.execRecursive(node1)

  expect(dfs.resultT).deep.equal([1, 2, 3, 4, 7, 5, 6, 8, 9, 10])
})

describe('execIterative', () => {
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

  graph.set(node1, [node2, node5, node9]);
  graph.set(node2, [node3])
  graph.set(node3, [node4])
  graph.set(node4, [node7])
  graph.set(node5, [node6, node8])
  graph.set(node6, [node7])
  graph.set(node7, [])
  graph.set(node8, [])
  graph.set(node9, [node10])
  graph.set(node10, [])

  const dfs = new DFS<number>(graph, node1)
  dfs.execIterative()

  expect(dfs.resultT).deep.equal( [ 1, 9, 10, 5, 8, 6, 7, 2, 3, 4 ])
})
