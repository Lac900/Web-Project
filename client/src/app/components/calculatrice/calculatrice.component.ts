import { Component, OnInit } from '@angular/core';
import { BEGIN_OUTPUT } from '../Component.constant';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  output = BEGIN_OUTPUT;
  number1: string;

  constructor() { }

  ngOnInit(): void {
  }

  click(label: string): void {
    console.log(label);
    if (this.output === BEGIN_OUTPUT) {
      this.output = label;
    } else {
      this.output += label;
    }
  }

  calcul(): void {
    const indexOfPlus: number = this.output.indexOf('+');
    const indexOfMinus: number = this.output.indexOf('-');
    const indexOfDivide: number = this.output.indexOf('/');
    const indexOfMultiple: number = this.output.indexOf('*');

    if (indexOfPlus > 0) {
      const arrayOfElement = this.output.split('+');
      this.output = (parseFloat(arrayOfElement[0]) +  parseFloat(arrayOfElement[1])).toString(10);
    } else if (indexOfMinus > 0) {
      const arrayOfElement = this.output.split('-');
      this.output = (parseFloat(arrayOfElement[0]) -  parseFloat(arrayOfElement[1])).toString(10);
    } else if (indexOfDivide > 0) {
      const arrayOfElement = this.output.split('/');
      this.output = (parseFloat(arrayOfElement[0]) /  parseFloat(arrayOfElement[1])).toString(10);
    } else if (indexOfMultiple > 0) {
      const arrayOfElement = this.output.split('*');
      this.output = (parseFloat(arrayOfElement[0]) *  parseFloat(arrayOfElement[1])).toString(10);
    } else {
      this.output = BEGIN_OUTPUT;
    }
  }

  clear(): void {
    this.output = BEGIN_OUTPUT;
  }

}
