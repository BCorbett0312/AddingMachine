import {Component, OnInit} from '@angular/core';
import {Evaluator} from '../../../evaluator';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  result: number;
  priorCalculations: string = '';

  private eval: Evaluator = new Evaluator();

  constructor() {}


  ngOnInit() {
  }

  runCalc(toParse: string) {
    this.priorCalculations += '>' + toParse + '\n';
    this.result = this.eval.calculate(toParse);
    this.priorCalculations += '>>' + this.result + '\n';


  }

}
