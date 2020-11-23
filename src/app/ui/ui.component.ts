import { Component, OnInit } from '@angular/core';
import {calcularIMC} from '../hombre/hombre';
import {diagnosticoHombre} from '../hombre/hombre';
import {diagnosticoMujer} from '../mujer/mujer';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = '';
  result2='';
  operator1 = 0;
  operator2 = 0;
  operator3 = 0;
  operator4='';
  ngOnInit(): void {
  }

  calcularIMC(){
    let Resultado = '';
    let myresult = 0;
    let myresultTxt = '';
    myresult = calcularIMC(this.operator2, this.operator1);
    if(this.operator4=='hombre'){
      myresultTxt = diagnosticoHombre(this.operator3, myresult);
    }else if (this.operator4=='mujer'){
      myresultTxt = diagnosticoMujer(this.operator3, myresult);
    }else{
      myresultTxt='INVALIDO';
    }
    Resultado = `IMC: ${myresult.toFixed(2)} 
     Diagnostico: ${myresultTxt}`
    this.result = Resultado;
  }

}
