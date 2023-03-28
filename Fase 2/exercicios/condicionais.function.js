/*
    Arquivo dos exercicios de condicionais
    Todos os exercicios devem ser funções que recebem um parametro e retornam um valor
*/

// Exercicio 1
// Escreva uma função que recebe um número e retorna se ele é par ou não

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Exercicio 2
// Escreva uma função que recebe um número e retorna se ele é maior que 100 ou não

function isBiggerThan100(number) {
  if (number > 100) {
    return true;
  } else {
    return false;
  }
}

// Exercicio 3
// Escreva uma função que recebe um número e retorna se ele é menor que 10 ou não

function isSmallerThan10(number) {
  if (number < 10) {
    return true;
  } else {
    return false;
  }
}

// Exercicio 4
// Escreva uma função que recebe um número e retorna se ele é maior que 10 e menor que 100 ou não

function isBetween10And100(number) {
  if (number > 10 && number < 100) {
    return true;
  } else {
    return false;
  }
}

/*
Exercicio 5
Faça um script que lê as duas notas parciais obtidas por um 
aluno numa disciplina ao longo de um semestre, e calcule a 
sua média. A atribuição de conceitos obedece à tabela abaixo:

    Média de Aproveitamento  Conceito
    Entre 9.0 e 10.0                      A
    Entre 7.5 e 9.0                        B
    Entre 6.0 e 7.5                        C
    Entre 4.0 e 6.0                        D
    Entre 4.0 e zero                      E
O algoritmo deve mostrar numa janela de alert as notas, 
a média, o conceito correspondente e a 
mensagem “APROVADO” se o conceito for A, B ou C ou 
“REPROVADO” se o conceito for D ou E.
*/

function aprovacaoAluno (nota1, nota2){
  
  let notaFinal = ((nota1 + nota2) / 2) 

  if (notaFinal >= 9 && notaFinal <=10){
      return ("Sua nota final é: " + notaFinal + '. Você tirou A e está APROVADO!' )
  }

  if (notaFinal >= 7.5 && notaFinal <=8.9){
    return ("Sua nota final é: " + notaFinal + '. Você tirou B e está APROVADO!' ) 
  }

  if (notaFinal >= 6 && notaFinal <=7.4){
    return ("Sua nota final é: " + notaFinal + '. Você tirou C e está APROVADO!' )
  }

  if (notaFinal >= 4 && notaFinal <5.9){
    return ("Sua nota final é: " + notaFinal + '. Você tirou D e está REPROVADO!' )
  }

  if (notaFinal <=3.9){
    return ("Sua nota final é: " + notaFinal + '. Você tirou E e está REPROVADO!' )
  }
  }
  
/*
Exercicio 6
Faça um script que peça os 3 lados de um triângulo. O script 
deverá informar se os valores podem ser um triângulo. 
Indique, caso os lados formem um triângulo, se o mesmo é: 
equilátero, isósceles ou escaleno.

    Dicas:
    Três lados formam um triângulo quando a soma de quaisquer dois 
    lados for maior que o terceiro;
    Triângulo Equilátero: três lados iguais;
    Triângulo Isósceles: quaisquer dois lados iguais;
    Triângulo Escaleno: três lados diferentes;
*/

function triangulo (lado1, lado2, lado3){

  if (lado1 == lado2 && lado1 == lado3){
    return 'Esse triângulo é Equilatéro'
  }

  else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    return 'Esse triângulo é Isósceles'
  }
  
  else
    return 'Esse triângulo é Escaleno'
  
}

/*
Exercicio 7
Faça um script que calcule as raízes de uma equação do segundo grau, 
na forma ax² + bx + c. O script deverá pedir os valores de a, 
b e c e fazer os testes necessários.
*/

function equaçãoSegundoGrau (num1, num2, num3){
  
let a = num1;
let b = num2;
let c = num3;

let equação = (b * b) - 4 * a * c;

if (equação > 0){
  raiz1 = (-b + Math.sqrt(equação)) / (2 * a);
  raiz2 = (-b - Math.sqrt(equação)) / (2 * a);
  return 'Raiz 1 é: ' + raiz1 + ' e a Raiz 2 é: ' + raiz2 + '.'
}

else {
  if (equação == 0){
    raiz = (-b + Math.sqrt(equação)) / (2 * a);
    return 'Raiz 1 é: ' + raiz + '.'
  }
}
}
  
/*
Exercicio 8
Faça um script que leia um número inteiro menor que 1000 e 
imprima a quantidade de centenas, dezenas e unidades do mesmo.
Observando os termos no plural a colocação do "e", da vírgula 
entre outros. Exemplo:

326 = 3 centenas, 2 dezenas e 6 unidades
12 = 1 dezena e 2 unidades 
Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 
111, 25, 20, 10, 21, 11, 1, 7 e 16
*/

function lerNumeros (){
  
}

/*
Exercicio 9
Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    Álcool: até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro

    Gasolina:
    até 20 litros, desconto de 4% por litro
    acima de 20 litros, desconto de 6% por litro 

Escreva um algoritmo que leia o número de litros vendidos, 
o tipo de combustível (codificado da seguinte forma: A-álcool, 
G-gasolina), calcule e imprima o valor a ser pago pelo cliente 
sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do 
litro do álcool é R$ 1,90.
*/

/*
Exercicio 10

Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                          Até 5 Kg                 Acima de 5 Kg
    Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
    Maçã              R$ 1,80 por Kg          R$ 1,50 por Kg


Se o cliente comprar mais de 8 Kg em frutas ou o valor total da 
compra ultrapassar R$ 25,00, receberá ainda um desconto de 
10% sobre este total. Escreva um algoritmo para ler a quantidade
(em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e
escreva o valor a ser pago pelo cliente.
*/

module.exports = {
  isEven,
  isBiggerThan100,
  isSmallerThan10,
  isBetween10And100,
  aprovacaoAluno,
  triangulo, 
  equaçãoSegundoGrau,
  lerNumeros,
  
  sumList,
  average,
  max,
  min,

};
