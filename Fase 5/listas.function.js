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

function numerosDivisiveis(lista, num1, num2) {
  return lista.filter(function(numero) {
    return 'Dificil 16 = ' + numero % num1 === 0 || numero % num2 === 0;
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

function maiorFrequencia(lista) {
  let contagem = {};
  let maxContagem = 0;
  let numeroMaisFrequente;

  lista.forEach(function(numero) {
    contagem[numero] = (contagem[numero] || 0) + 1;
    if (contagem[numero] > maxContagem) {
      maxContagem = contagem[numero];
      numeroMaisFrequente = numero;
    }
  });

  let indiceMaisFrequente;
  let maxContagemIndice = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numeroMaisFrequente) {
      maxContagemIndice++;
      if (maxContagemIndice === maxContagem) {
        indiceMaisFrequente = i;
        break;
      }
    }
  }

  return 'Muito Dificl 24 = ' + indiceMaisFrequente;
}

// 25.Dado um array de números, encontre o índice do primeiro número que é primo.

function numerosPrimos3(lista){
  
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
  return 'Dificil 25 = ' + lista.indexOf(primos[0]);
}

// Muito difícil
// 26. Dado um array de números, encontre o índice do terceiro número que é um número primo.

function numerosPrimos4(lista){
  
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
  return 'Muito Dificil 26 = ' + lista.indexOf(primos[2]);
}

// 27. Dado um array de strings, encontre o índice da primeira string que contém apenas vogais.

function todasVogais(lista){

  const aEIOU = lista.filter(palavra => palavra.indexOf('a') != -1 && palavra.indexOf('e') != -1 && palavra.indexOf('i') != -1 && palavra.indexOf('o') != -1 && palavra.indexOf('u') != -1)
  return 'muito Dificil 27 = ' + lista.indexOf(aEIOU[0])

 }
// Splice

// Fácil
// 28. Dado um array de números, remova o último número do array.

function removerUltimo(lista){
const array = lista.splice(-1, 1)
return 'Facil 28 = ' + array

}

// 29. Dado um array de strings, remova a primeira string do array.

function primeiraString(lista){
const array = lista.splice(1, 1)
return 'Facil 29 = ' + array

}

// 30. Dado um array de números, remova o último número do array e retorne-o.

function removerUltimoRetornar(lista){
  const array = lista.splice(-1, 1)
  return 'Facil 30 = ' + array[0]
  
  }

//Médio
// 31. Dado um array de números, remova todos os números menores que um determinado valor.

function removendoNumerosMenores(lista, valor) {
  const novaLista = lista.filter(numero => numero >= valor);
  return 'Medio 31 = ' + novaLista;
}

// Dificil
// 32. Dado um array de números, remova todos os números maiores que um determinado valor.

function removendoNumerosMaiores(lista, valor) {
  const novaLista = lista.filter(numero => numero <= valor);
  return 'Medio 32 = ' + novaLista;
}

// Difícil
// 33. Dado um array de números, remova todos os números que não são primos.

function removerNaoPrimos(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (!auxiliarPrimo(lista[i])) {
      lista.splice(i, 1);
      i--;
    }
  }
  return 'Dificil 33 = ' + lista;
}

function auxiliarPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// Muito Dificil 
// 34. Dado um array de números, remova todos os números que possuem pelo menos um fator comum.

function removendoFatorComum(lista) {
  return lista.filter(function(numero) {
    let fatores = [];

    for (let i = 2; i <= numero; i++) {
      if (numero % i === 0) {
        fatores.push(i);
      }
    }

    return fatores.length < 2;
  });
}

// Muito difícil
// 35. Dado um array de números, remova todos os números duplicados do array.

function removendoFrequencia(lista){
  return lista.filter(function(numero, indice) {
  return lista.indexOf(numero) === indice;
  });
}

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
  maiorFrequencia,
  numerosPrimos3,
  numerosPrimos4,
  todasVogais,
  removerUltimo,
  primeiraString,
  removerUltimoRetornar,
  removendoNumerosMaiores,
  removendoNumerosMenores,
  removerNaoPrimos,
  removendoFatorComum,
  removendoFrequencia,
};
