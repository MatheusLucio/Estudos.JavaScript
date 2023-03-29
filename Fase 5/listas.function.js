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
// 10. Dado um array de números, retorne um novo array contendo o dobro de cada número.

function dobroArray(lista){
  const dobro = lista.map(function(numero) {
    return numero * 2;
  });
  return 'Facil 10 = ' + dobro;
}


// 11. Dado um array de strings, retorne um novo array contendo todas as strings em letra maiúscula.

function letraMaiscula(lista){

const maiuscula = lista.map(function(palavra){
  return palavra.toUpperCase()
})
return 'Facil 11 = ' + maiuscula
}

// 12. Dado um array de números, retorne um novo array contendo apenas os números pares.

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
  return 'Facil 12 = ' + pares;
}


// Médio
// 13. Dado um array de números, retorne um novo array contendo apenas os números ímpares.

function numerosImpares(lista){

  const numeroImpar = lista.map(function(numero){
    if (numero % 2 !== 0){
      return numero
    } else {
      return null}
  })

  .filter(function(numero){
return numero !== null
  })
  return 'Medio 13 = ' + numeroImpar 
}

// 14. Dado um array de números, retorne um novo array contendo apenas os números que são primos.

function numerosPrimos(lista){
  
    const primos = lista.filter(function(numero) {
      if (numero < 2) 
      return false; 
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false; 
        }
      }
      return true; 
    });
    return 'Medio 14 = ' + primos;
  }


// Difícil
// 15. Dado um array de números, retorne um novo array contendo apenas os números que são divisíveis por 3.

function divisiveisPor3(lista){

  const divisiveis = lista.map(function(numero){
    if (numero % 3 === 0){
      return numero 
    } else {
      return null }
   })

    .filter(function(numero){
      return numero !== null
    })
    return 'Dificil 15 = ' + divisiveis
  }

// 16. Dado um array de números, retorne um novo array contendo apenas os números que são divisíveis por pelo menos um dos dois números especificados.

function numerosDivisiveis(lista, divisor1, divisor2) {
  return lista.filter(function(numero) {
    return 'Dificil 16 = ' + numero % divisor1 === 0 || numero % divisor2 === 0;
  });
}

// Muito difícil

// 17. Dado um array de números, retorne um novo array contendo apenas os números que são primos.

function numerosPrimos2(lista){
  
  const primos = lista.filter(function(numero) {
    if (numero < 2) 
    return false; 
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false; 
      }
    }
    return true; 
  });
  return 'Medio 17 = ' + primos;
}

// 18. Dado um array de strings, retorne um novo array contendo apenas as strings que possuem um número especificado de caracteres.

function arrayStrings(lista, tamanho) {
  const novaLista = lista.filter(function(palavra) {
    return palavra.length === tamanho
  })
  return 'Medio 18 = ' + novaLista
}

// FindIndex

// Fácil
// 19. Dado um array de números, encontre o índice do primeiro número que é divisível por 3.

function indiceDivisivel3(lista){

  /*  const num = lista.filter(numero => numero % 3 === 0 && numero > 0)
                    .slice(0, 1)
  return 'Facil 19 = ' + num */

  
    const index = lista.findIndex(numero => numero % 3 === 0);
    return 'Facil 19 = ' + index;
  } 


// 20. Dado um array de strings, encontre o índice da primeira string que contém a letra "a".

function stringA(lista){
  const index = lista.findIndex(palavra => palavra.includes('a'));
  return 'Facil 20 = ' + index;
}

// 21. Dado um array de números, encontre o índice do primeiro número que é negativo.

function numeroNegativo(lista){
  const num = lista.findIndex(numero => numero < 0)
  return 'Facil 21 = ' + num
}

// Médio
// 22. Dado um array de números, encontre o índice do maior número.

function maiorNumeroIndex(lista){
  let valor = 0
  const num = lista.filter(function(numero) {
    if (numero > valor){
      valor = numero
    }
    return true
  }).findIndex(function(numero) {
    return numero === valor
  })
  return 'Medio 22 = ' + num
}


// 23. Dado um array de números, encontre o índice do segundo menor número.

function segundoMenorIndex(lista) {
  const copiaeOrdena = lista.slice().sort((a, b) => a - b) 
  const segundoMenor = copiaeOrdena[1] 
  return 'Medio 23 = ' + lista.indexOf(segundoMenor) 
}


// Difícil
// 24. Dado um array de números, encontre o índice do número que aparece com mais frequência.



// 25.Dado um array de números, encontre o índice do primeiro número que é primo.

// Muito difícil
// 26. Dado um array de números, encontre o índice do primeiro número que é um número primo.
// 27. Dado um array de strings, encontre o índice da primeira string que contém apenas vogais.

// Splice

// Fácil
// 28. Dado um array de números, remova o último número do array.
// 29. Dado um array de strings, remova a primeira string do array.
// 30. Dado um array de números, remova o último número do array e retorne-o.

//Médio
// 31. Dado um array de números, remova todos os números menores que um determinado valor.
// 32. Dado um array de números, remova todos os números maiores que um determinado valor.

// Difícil
// 33. Dado um array de números, remova todos os números que não são primos.
// 34. Dado um array de números, remova todos os números que possuem pelo menos um fator comum.

// Muito difícil
// 35. Dado um array de números, remova todos os números duplicados do array.
// 36. Dado um array de números, remova todos os números duplicados do array mantendo apenas a primeira ocorrência de cada número.
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
  divisiveisPor3,
  numerosDivisiveis,
  numerosPrimos2,
  arrayStrings,
  indiceDivisivel3,
  stringA,
  numeroNegativo,
  maiorNumeroIndex,
  segundoMenorIndex,
};
