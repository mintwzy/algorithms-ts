# algorithms-ts

This project has algorithms in TypeScript with test. The graph/tree/list are drawn using
Graphviz for easy visualization.

## Test

```shell
yarn install
yarn test
```

OR

```shell
docker-compose up
```

## Algorithms

- [Graph](https://github.com/mintwzy/algorithms-ts/tree/main/src/Graph)
  - [BFS](https://github.com/mintwzy/algorithms-ts/tree/main/src/Graph/BFS)
  - [DFS](https://github.com/mintwzy/algorithms-ts/tree/main/src/Graph/DFS)
  - [Topological Sort](https://github.com/mintwzy/algorithms-ts/tree/main/src/Graph/TopologicalSort)
- [List](https://github.com/mintwzy/algorithms-ts/tree/main/src/List)
- [Tree](https://github.com/mintwzy/algorithms-ts/tree/main/src/Tree)
  - [Construct from level order traversal](https://github.com/mintwzy/algorithms-ts/tree/main/src/Tree/ConstructFromLevelOrder)
  - [Level order traversal](https://github.com/mintwzy/algorithms-ts/tree/main/src/Tree/LevelOrderTraversal)

## Graphviz

To generate `.dot` graph to `.png` file

```shell
dot -Tpng demo.dot -o image.png
```

## References

- [Introduction to Algorithms](https://en.wikipedia.org/wiki/Introduction_to_Algorithms)
- [Graphviz](https://graphviz.org/)
- [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
