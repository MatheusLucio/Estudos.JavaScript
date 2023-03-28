/*
Exercicio 1

Escreva uma função que some todos os itens de uma lista
*/

function sumList(list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

/*
Exercicio 2

Escreva uma função que receba uma lista de números e retorne a média aritmética entre eles
*/

function average(lista) {
  var soma = 0;
  for (var i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma / lista.length;
}

/*
Exercicio 3

Escreva uma função que receba uma lista de números e retorne o maior número da lista
*/

function max(lista) {

  var soma = 0

  for (var i = 0; i < lista.length; i++) {
    if (soma < lista[i])
      soma = lista[i];
  }
  return soma
}
/*
Exercicio 4

Escreva uma função que receba uma lista de números e retorne o menor número da lista
*/

function min(lista) {

  var numero = 0

  for (var i = 0; i < lista.length; i++) {
    if (numero < lista[i])
      numero = lista[i];
  }
  return numero
}

/*
Exercicio 5

Escreva uma função que receba uma lista de números e retorne uma nova lista com todos os números multiplicados por 2
*/

function multiplicaPorDois(lista) {

  let resultado = [];
  for (let i of lista) {
    resultado.push(i * 2);
  }
  return resultado;
}

/*
Execicio 6

Escreva uma função que receba uma lista de nomes e retorne uma nova lista com a string "Sr. " adicionada no início de cada nome
*/

function listaSr(lista) {

  let resultado = [];
  for (let i of lista) {
    resultado.push('Sr' + i);
  }
  return resultado;
}
/*
Exercicio 7

Escreva uma função que receba uma lista de números e retorne somente os números pares
*/

function listaPares(lista) {
  let numerosPares = [];
  for (let i = 0; i < lista.length; i++) {
    if (i % 2 == 0) {
      numerosPares.push(i)
    }
  }
  return numerosPares;
}

/*
Exercicio 8

Escreva uma função que receba uma lista de números e retorne somente os números ímpares
*/

function listaImpares(lista) {
  let numerosImpares = [];
  for (let i = 0; i < lista.length; i++) {
    if (i % 2 !== 0) {
      numerosImpares.push(i)
    }
  }
  return numerosImpares;
}

/*
Exercicio 9

Escreva uma função que receba uma lista de números e retorne somente os números positivos
*/

function listaPositivos(lista) {
  let numerosPositivos = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 0) {
      numerosPositivos.push(lista[i])
    }
  }
  return numerosPositivos;
}

/*
Exercicio 10

Escreva uma função que receba uma lista de números e retorne somente os números negativos
*/
function listaNegativos(lista) {
  let numerosNegativos = [];
  for (let contador = 0; contador < lista.length; contador++) {
    if (lista[contador] < 0) {
      numerosNegativos.push(lista[contador])
    }

  }
  return numerosNegativos;
}

/*
Exercicio 11

Escreva uma função que receba uma lista de números e retorne a soma de todos os números pares
*/

function numerosPares1(lista) {
  // Iniciar a soma
  let soma = 0;

  for (let contador = 0; contador < lista.length; contador++) {
    const elemento = lista[contador];

    // Verificar se o numero é par

    // Descobrir o resto
    const resto = elemento % 2; // 0 ou 1
    // Verificar se meu resto é igual a 0
    if (resto == 0) {
      // Somar o numero no total
      soma = soma + elemento

    }
  }
  return soma
}
function numerosPares(lista) {
  return lista.filter(e => e % 2 == 0).reduce((accumulator, currentValue, index) => accumulator + currentValue)
}

/*
Exercicio 12

Escreva uma função que receba uma lista de números e retorne a soma de todos os números ímpares
*/

function somaImpares(lista) {

  let soma = 0;

//console.log('teste 2', lista)

  for (let contador = 0; contador < lista.length; contador++) {
    const elemento = lista[contador];

//console.log ('teste 1 ', lista[contador])

    let restoDivisao = elemento % 2;

    if (restoDivisao >= 1) {

      soma = soma + elemento
    }
    
  }
  return soma

}

/*
Exercicio 13

Escreva uma função que receba uma lista de números e retorne a soma de todos os números negativos
*/
 
function somaNegativos(lista){

  let soma = 0

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];
    
    let negativos = elemento < 0;

    if (negativos < 0){

      soma = soma + negativos

    }
  }
return soma
}

/*
Exercicio 14

Escreva uma função que receba uma lista de números e retorne a soma de todos os números positivos
*/

function somaPositivos (lista){

  let soma = 0  
  
  for (let i = 0; i < lista.length; i++) {
    const elemento = lista [i];

    let positivos = elemento > 0;

    console.log('teste 1 ', elemento)

    if (positivos > 0){

      soma = soma + positivos;
    } 
  }

  return soma

}

/*
Exercicio 15

Escreva uma funcao que organize uma lista de numeros em ordem crescente
*/

function ordemCrescente (lista){

  for (let i = 0; i < lista.length; i++) { 
    lista.sort()
  }
  return lista
}

/*
Exercicio 16

Escreva uma funcao que retorne o index do maior valor de uma lista de numeros
*/

/*
Exercicio 17

Escreva uma função que receba uma array e retorna o tamanho dele
*/

function arrayTamanho (){
  
}

module.exports = {
  sumList,
  average,
  max,
  min,
  multiplicaPorDois,
  listaSr,
  listaPares,
  listaImpares,
  listaPositivos,
  listaNegativos,
  numerosPares,
  somaImpares,
  somaNegativos,
  somaPositivos,
  ordemCrescente,
  arrayTamanho,
};
