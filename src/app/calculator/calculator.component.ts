import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  operation: Array<string> = ['', '', ''];
  display = '';
  activenumber = '';

  constructor() { }

  /**
  * Modifies the array and assign different values based on the existing values in the array
  * @param { string } - the number selected in the calculator
  */
  number(num: string): void {
    this.activenumber += num;

    if (this.operation[1].length) {
      this.operation[2] = this.activenumber;
      this.displaynumber(this.operation[2]);

    } else {
      this.operation[0] = this.activenumber;
      this.displaynumber(this.operation[0]);
    }
  }

  /** This is a method which clears everything */
  clear(): void {
    this.operation = ['', '', ''];
    this.activenumber = '';
    this.display = '';
  }

  /** displays the screen in DOM  */
  displaynumber(num: string): void {
    this.display = num;
  }

  /**
   * Assigns the operator into the array
   * @param {string} - operand comes in as string
   */
  operator(operand: string): void {
    if (this.operation[0].length) {
      this.operation[1] = operand;
    } else {
      this.display = 'error!';
    }
    this.activenumber = '';
  }

  /** Does Calculation based on the operator provided */
  calculate(): void {
    switch (this.operation[1]) {
      case 'x':
        this.display = (parseFloat(this.operation[0]) * parseFloat(this.operation[2])).toString();
        break;
      case '+':
        this.display = (parseFloat(this.operation[0]) + parseFloat(this.operation[2])).toString();
        break;
      case '-':
        this.display = (parseFloat(this.operation[0]) - parseFloat(this.operation[2])).toString();
        break;
      case '/':
        this.display = (parseFloat(this.operation[0]) / parseFloat(this.operation[2])).toString();
        break;
    }
  }


}
