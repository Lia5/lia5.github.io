'use strict';

class Calculator {
  constructor(value1, value2) {
    this.result = 0;
    this.value1 = value1;
    this.value2 = value2;
  }
  add(value1, value2 = this.result) {
    this.result = value1 + value2;
    return this.result;
  }
  subtract(value1, value2) {
    if (value2 === undefined) [value1, value2] = [this.result, value1];
    this.result = value1 - value2;
    return this.result;
  }
  multiply(value1, value2 = this.result) {
    this.result = value1 * value2;
    return this.result;
  }
  divide(value1, value2) {
    if (value2 === undefined) [value1, value2] = [this.result, value1];
    if (value2 === 0) throw new Error('Division by zero is not allowed.');
    this.result = value1 / value2;
    return this.result;
  }
  displayResult() {
    console.log(this.result);
  }
}

let calc = new Calculator(0, 0);
calc.add(5);
calc.displayResult();
calc.subtract(2);
calc.displayResult();
calc.multiply(3);
calc.displayResult();
calc.divide(2);
calc.displayResult();