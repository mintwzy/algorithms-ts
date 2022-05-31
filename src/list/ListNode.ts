class ListNode<T> {
  value: T | undefined
  next: ListNode<T> | null

  constructor(value?: T, next?: ListNode<T> | null) {
    this.value = value
    this.next = (next === undefined ? null : next)
  }
}

export default ListNode;
