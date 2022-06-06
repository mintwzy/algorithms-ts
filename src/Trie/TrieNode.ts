class TrieNode {
  children: Map<string, TrieNode>
  isEnd: boolean

  constructor() {
    this.children = new Map<string, TrieNode>()
    this.isEnd = false;
  }
}

export default TrieNode;
