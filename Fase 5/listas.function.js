// Reduce

// Fácil
// 1. Dado um array de números, retorne a soma de todos os números.

function somaNumeros(lista){
  const soma = lista.reduce((acc, current) => acc + current)
  return 'Facil 1 = ' + soma
}

// 2. Dado um array de strings, retorne uma string única contendo todas as strings concatenadas.

function stringConcatenada(listas){

    let lista1 = ['tudo bem?']
    const concatenada = listas.concat(' ', lista1)
     return 'Facil 2 = ' + concatenada
}

// 3. Dado um array de números, retorne a soma de todos os números maiores que um determinado valor.

function maiorNumeroComDeterminacao(lista){

  let valor = 5
  const soma =   lista.filter(numero => numero > valor )
                  .reduce((acc, current) => acc + current)
 
return 'Facil 3 = ' + soma
}

//Médio
// 4. Dado um array de números, encontre o maior número.

function maiorNumero(lista) {
  
  return 'Medio 4 = ' + Math.max(...lista)
}
// 5. Dado um array de números, retorne um novo array contendo a soma de dois elementos específicos de todos os números.

function soma2NumerosEspecificos(lista) {
  let indice1 = 3;
  let indice2 = 5;
  const soma = lista[indice1] + lista[indice2];
  return 'Medio 5 = ' + [soma];
}

// Difícil
// 6. Dado um array de números, retorne a média de todos os números.

function mediaNumeros(lista){

  const total = lista.reduce((acc, current) => acc + current)
  return 'Dificil 6 = ' + total / lista.length
}

// 7. Dado um array de números, identifique se há no array e retorne a soma dos dois elementos específicos escolhidos.

function soma2NumerosArray(lista, num1, num2){

  const verificar = lista.filter(numero => numero === num1 || numero === num2)
  if (verificar.length === 2){
    const soma =  verificar[0] + verificar[1]
    return soma
  }
else {
  return 'Os numeros não foram identificados!'
}
}

// Muito difícil
// 8. Dado um array de números, retorne o número que aparece com mais frequência.

function numeroFrequencia(lista){
  
  let contagem = {};
  let maxContagem = 0;
  let numeroMaisFrequente;

    lista.filter(function(numero) {
    contagem[numero] = (contagem[numero] || 0) + 1;
    if (contagem[numero] > maxContagem) {
      maxContagem = contagem[numero];
      numeroMaisFrequente = numero;
    }
  });

  return 'Muito Dificl 8 = ' + numeroMaisFrequente;
}

// 9. Dado um array de números, retorne um novo array contendo a média de dois elementos específicos de todos os números, onde o valor de um elemento é maior que um determinado valor.

function media2Elementos(lista, valorMinimo, indice1, indice2){
  
  if (lista[indice1] > valorMinimo || lista[indice2] > valorMinimo) {
    const media = (lista[indice1] + lista[indice2]) / 2;
    return 'Muito Dificl 9 = ' + [media];
  } else {
    return 'Não há elementos no array maiores que o valor mínimo';
  }
}

// Map

// Fácil
// 1. Dado um array de números, retorne um novo array contendo o dobro de cada número.

function dobroArray(lista){
  const dobro = lista.map(function(numero) {
    return numero * 2;
  });
  return 'Facil 1 = ' + dobro;
}


// 2. Dado um array de strings, retorne um novo array contendo todas as strings em letra maiúscula.

function letraMaiscula(lista){

const maiuscula = lista.map(function(palavra){
  return palavra.toUpperCase()
})
return 'Facil 2 = ' + maiuscula
}

// 3. Dado um array de números, retorne um novo array contendo apenas os números pares.

function numerosPares(lista) {
  
  const pares = lista.map(function(numero) {
    if (numero % 2 === 0) {
      return numero;
    } else {
      return null;
    }
  })
  .filter(function(numero) {
    return numero !== null;
  });
  return 'Facil 3 = ' + pares;
}


// Médio
// 4. Dado um array de números, retorne um novo array contendo apenas os números ímpares.

function numerosImpares(lista){

  const numeroImpar = lista.map(function(numero){
    if (numero % 2 !== 0){
      return numero
    }
    else {
      return null
    }
  })

  .filter(function(numero){
return numero !== null
  })
  return 'Medio 4 = ' + numeroImpar 
}

// 5. Dado um array de números, retorne um novo array contendo apenas os números que são primos.

function numerosPrimos(lista){
  
    const primos = lista.filter(function(numero) {
      if (numero < 2) return false; 
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false; 
        }
      }
      return true; 
    });
    return 'Medio 5 = ' + primos;
  }


// Difícil
// 6. Dado um array de números, retorne um novo array contendo apenas os números que são divisíveis por 3.



// 7. Dado um array de números, retorne um novo array contendo apenas os números que são divisíveis por pelo menos um dos dois números especificados.

// Muito difícil
// 8. Dado um array de números, retorne um novo array contendo apenas os números que são primos.
// 9. Dado um array de strings, retorne um novo array contendo apenas as strings que possuem um número especificado de caracteres.

// FindIndex

// Fácil
// 1. Dado um array de números, encontre o índice do primeiro número que é divisível por 3.
// 2. Dado um array de strings, encontre o índice da primeira string que contém a letra "a".
// 3. Dado um array de números, encontre o índice do primeiro número que é negativo.

// Médio
// 4. Dado um array de números, encontre o índice do maior número.
// 5. Dado um array de números, encontre o índice do segundo menor número.

// Difícil
// 6. Dado um array de números, encontre o índice do número que aparece com mais frequência.
// 7.Dado um array de números, encontre o índice do primeiro número que é primo.

// Muito difícil
// 8. Dado um array de números, encontre o índice do primeiro número que é um número primo.
// 9. Dado um array de strings, encontre o índice da primeira string que contém apenas vogais.

// Splice

// Fácil
// 1. Dado um array de números, remova o último número do array.
// 2. Dado um array de strings, remova a primeira string do array.
// 3. Dado um array de números, remova o último número do array e retorne-o.

//Médio
// 4. Dado um array de números, remova todos os números menores que um determinado valor.
// 5. Dado um array de números, remova todos os números maiores que um determinado valor.

// Difícil
// 6. Dado um array de números, remova todos os números que não são primos.
// 7. Dado um array de números, remova todos os números que possuem pelo menos um fator comum.

// Muito difícil
// 8. Dado um array de números, remova todos os números duplicados do array.
// 9. Dado um array de números, remova todos os números duplicados do array mantendo apenas a primeira ocorrência de cada número.
module.exports = {
  somaNumeros,
  stringConcatenada,
  maiorNumero,
  maiorNumeroComDeterminacao,
  soma2NumerosEspecificos,
  mediaNumeros,
  soma2NumerosArray,
  numeroFrequencia,
  media2Elementos,
  dobroArray,
  letraMaiscula,
  numerosPares,
  numerosImpares,
  numerosPrimos,
};
