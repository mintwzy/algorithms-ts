import ListNode from "./ListNode";

class List<T> {
  head: ListNode<T> | null

  constructor() {
    this.head = null;
  }
}

export default List;
