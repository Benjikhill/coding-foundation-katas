class SumApp {
  numbers = [];

  addNumber(n) {
    this.numbers.push(n);
  }
  getSum() {
    let sum = 0;
    for (let n of this.numbers) {
      sum += n;
    }
    return sum;
  }
  reset() {
    this.numbers.length = 0;
  }
}
