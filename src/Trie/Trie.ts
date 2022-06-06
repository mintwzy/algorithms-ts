import TrieNode from "./TrieNode"

class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let cur: TrieNode = this.root;
    for(let c of word) {
      if(!cur.children.has(c)) cur.children.set(c, new TrieNode())
      // @ts-ignore
      cur = cur.children.get(c)
    }
    cur.isEnd = true;
  }

  search(word: string): boolean {
    let cur: TrieNode = this.root;
    for(let c of word) {
      if(!cur.children.has(c)) return false
      // @ts-ignore
      cur = cur.children.get(c)
    }
    return cur.isEnd;
  }

  startsWith(word: string): boolean {
    let cur: TrieNode = this.root;
    for(let c of word) {
      if(!cur.children.has(c)) return false
      // @ts-ignore
      cur = cur.children.get(c)
    }
    return true
  }
}

export default Trie
