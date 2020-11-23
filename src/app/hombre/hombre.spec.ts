import {calcularIMC} from './hombre';
import {calcular} from './hombre';

describe('Hombre - IMC - unit tests', () => {
  it('Should imc 75 / (170/100)^2 = 25.95 imc ', () => {
    //Arrangin
    let result =0;
    //Act
    result = calcularIMC(75.0,170.0);
    //Assert
    expect(result).toBe(25.95);
 });

 it('Should imc 55 / (160/100)^2 = 21.48 imc', () => {
   //Arrangin
   let result =0;
   //Act
   result = calcularIMC(55,160);
   //Assert
   expect(result).toBe(21.48);
 });
 
 it('Should imc 52 / (169/100)^2 = 18.20 imc', () => {
   //Arrangin
   let result =0;
   //Act
   result = calcularIMC(52,169);
   //Assert
   expect(result).toBe(18.21);
 });

 it('Should imc 50 / (180/100)^2 = 15.42 imc', () => {
  //Arrangin
  let result =0;
  //Act
  result = calcularIMC(50,180);
  //Assert
  expect(result).toBe(15.43);
});

it('Should imc 90 / (160/100)^2 = 35.16 imc', () => {
  //Arrangin
  let result =0;
  //Act
  result = calcularIMC(90,160);
  //Assert
  expect(result).toBe(35.16);
});
});

describe('Hombre - Text - unit tests', () => {
  it('Should print "Usted tiene bajo peso" when edad=5 and IMC=10', () => {
    //Arrangin
    let result ='';
    //Act
    result = calcular(5,10);
    //Assert
    expect(result).toBe("Usted tiene bajo peso");
 });

 it('Should print "Usted tiene obesidad tipo I" when edad=21 and IMC=32', () => {
  //Arrangin
  let result ='';
  //Act
  result = calcular(21,32);
  //Assert
  expect(result).toBe("Usted tiene obesidad tipo I");
});

it('Should print "Usted tiene sobrepeso" when edad=15 and IMC=21', () => {
  //Arrangin
  let result ='';
  //Act
  result = calcular(15,21);
  //Assert
  expect(result).toBe("Usted tiene sobrepeso");
});

it('Should print "Usted tiene sobrepeso" when edad=15 and IMC=21', () => {
  //Arrangin
  let result ='';
  //Act
  result = calcular(10,17);
  //Assert
  expect(result).toBe("Usted tiene un peso normal");
});


});