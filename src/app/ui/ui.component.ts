import { Component, OnInit } from '@angular/core';
import {calcularIMC} from '../hombre/hombre';
import {calcular} from '../hombre/hombre';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = 0;
  result2='';
  operator1 = 0;
  operator2 = 0;
  operator3 = 0;
  ngOnInit(): void {
  }

  calcularIMC(){
    let myresult = 0;
    myresult = calcularIMC(this.operator2, this.operator1);
    this.result = myresult;
  }

  calcular(){
    let myresult = '';
    myresult = calcular(this.operator3, calcularIMC(this.operator2, this.operator1));
    this.result2 = myresult;
  }
}
