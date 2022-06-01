import {describe, it} from "mocha";
import {expect} from "chai";
import TreeNode from "../../../src/Tree/TreeNode";
import Tree from "../../../src/Tree/Tree";
import LevelOrderTraversal from "../../../src/Tree/LevelOrderTraversal/LevelOrderTraversal";

describe('level order traversal', () => {
  describe('exec', () => {
    it('should return correct result', () => {
      const root: TreeNode<number> = new TreeNode<number>(3)
      const node9: TreeNode<number> = new TreeNode<number>(9)
      const node20: TreeNode<number> = new TreeNode<number>(20)
      const node15: TreeNode<number> = new TreeNode<number>(15)
      const node7: TreeNode<number> = new TreeNode<number>(7)

      root.left = node9
      root.right = node20
      node20.left = node15
      node20.right = node7
      const tree: Tree<number> = new Tree<number>(root)

      const levelOrderTraversal = new LevelOrderTraversal<number>(tree)
      levelOrderTraversal.exec()

      expect(levelOrderTraversal.result).deep.equal([[3], [9, 20], [15, 7]])
    })
  })
})
