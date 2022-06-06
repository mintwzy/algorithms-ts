class CombinationSum {
  candidates: number[]
  target: number

  constructor(candidates: number[], target: number) {
    this.candidates = candidates
    this.target = target
  }

  exec(): number[][]{
    const LEN: number = this.candidates.length;
    const res: number[][] = []

    const candidate: number[] = []
    const dfs = (i: number, remain: number): void => {
      if(i === LEN || remain < 0) return;
      if(remain === 0){
        res.push([...candidate])
      }

      // using current number & stay
      candidate.push(this.candidates[i])
      dfs(i, remain - this.candidates[i])

      // not using current number & move to next
      candidate.pop()
      dfs(i + 1, remain - this.candidates[i])
    }

    dfs(0, this.target)

    return res;
  }
}

export default CombinationSum;
