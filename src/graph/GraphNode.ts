class GraphNode<T> {
  value: T;
  incomeEdge: number;

  constructor(value: T) {
    this.value = value;
    this.incomeEdge = 0;
  }

  setIncomeEdge(num: number){
    this.incomeEdge = num;
  }

  hasNoIncomeEdge(): boolean {
    return this.incomeEdge === 0;
  }

  decreaseIncomeEdge(): void {
    this.incomeEdge--;
  }

  increaseIncomeEdge(): void {
    this.incomeEdge++;
  }
}

export default GraphNode;
