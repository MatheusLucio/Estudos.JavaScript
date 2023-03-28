
//Nível fácil
// Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números pares.

function numerosPares(lista) {

  const numerosPares = lista.filter(num => num % 2 == 0)

  return 'Exercício 1 = ' + numerosPares

}


// Crie uma função que recebe um array de palavras e retorna um novo array contendo apenas as palavras com mais de cinco letras.

function arrayPalavras(lista) {

  const palavraGrande = lista.filter(palavra => palavra.length > 5)

  return 'Exercício 2 = ' + palavraGrande

}

//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números maiores que 10.

function numeroMaiorQue10(lista) {

  const total = lista.filter(numero => numero > 10)

  return 'Exercício 3 = ' + total

}

//Crie uma função que recebe um array de números e retorna a soma dos números positivos.

function somaPositivos(lista) {

  const listaPositivos = lista.filter(numero => numero > 0)
  const total = listaPositivos.reduce((acc, current) => acc + current)

  return 'Exercício 4 = ' + total

}

//Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings que contém a letra "a".

function textoA(lista) {
  const letraA = lista.filter(palavra => palavra.indexOf('a') !== -1)

  return 'Exercício 5 = ' + letraA
}

//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números ímpares.

function numerosImpares(lista) {

  const numerosImpares = lista.filter(numero => numero % 2 !== 0)

  return 'Exercício 6 = ' + numerosImpares

}
//Crie uma função que recebe um array de palavras e retorna um novo array contendo apenas as palavras que começam com a letra "a".

function inicioA(lista) {

  const letraA = lista.filter(palavra => palavra.substr(0, 1) == 'a')
  return 'Exercicio 7 =' + letraA
}

//Crie uma função que recebe um array de números e retorna o maior número presente nele.

function maiorNumero (lista){

  return 'Exercicio 8 = ' + Math.max(...lista)
}
//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números positivos e múltiplos de 3.

function numeroPositivoMultiploDe3 (lista){

  const total = lista.filter(numero => numero > 0 && numero % 3 == 0)

  return 'Exercicio 9 = ' + total

}


//Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings que contém mais de uma palavra.

function maisDe1Palavra (lista){
  
  const palavraEspaço = lista.filter(palavra => palavra.indexOf(' ') != -1)
  return 'Exercício 10 = ' + palavraEspaço
}


//Nível intermediário
//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que são divisíveis por 3 e por 5.

function numerosDivisiveis (lista){

  const total = lista.filter(numero => numero % 3 ==0 && numero % 5 == 0)
  return 'Exercício 11 = ' + total 
}

//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que são primos.

function numerosPrimos (lista) { 
  
  const numerosPrimos = [];

  for (let i = 0; i < lista.length; i++) {
    const numeroAtual = lista[i];
    let primo = true;

    for (let x = 2; x < numeroAtual; x++) {
      if (numeroAtual % x === 0) {
        primo = false;
        break;
      }
    }

    if (primo && numeroAtual > 1) {
      numerosPrimos.push(numeroAtual)
    }
  }

  return 'Exercicio 12 = ' + numerosPrimos
}


//Crie uma função que recebe um array de palavras e retorna um novo array contendo apenas as palavras que terminam com a letra "o".

function palavrasComLetraOFinal (lista){

  const letraO = lista.filter(palavra => palavra.substr(-1) == 'o')
  
  return 'Exercício 13 = ' + letraO
}

//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que estão entre 10 e 20.

function entre10E20 (lista){

  const total = lista.filter(numero => numero >= 10 && numero <=20)

  return 'Exercício 14 = ' + total

}

//Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings que são palíndromos.

function stringPalindromos (lista) {
  
  let palindromos = lista.filter(palavra => palavra === palavra.split('').reverse().join(''))
  return 'Exercício 15 = ' + palindromos

  }

//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que são pares e maiores que 5.

function numerosParesMaioresQue5 (lista) {

  const total = lista.filter(numero => numero % 2 == 0 && numero > 5)
  return 'Exercício 16 = ' + total
}

//Crie uma função que recebe um array de palavras e retorna um novo array contendo apenas as palavras que possuem letras repetidas.

function letrasRepetidas (lista){}


//Crie uma função que recebe um array de números e retorna a média aritmética deles.

function mediaNumeros (lista){

 const total = lista.reduce((acc, current) => acc + current)

 return 'Exercício 18 = ' + total / lista.length

}

//Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings que possuem mais de uma vogal.

function maisDe1Vogal (lista){
  
  const vogais = lista.filter(palavra => palavra.indexOf('a', 'e', 'i', 'o', 'u') != -1 && palavra.indexOf('a', 'e', 'i', 'o', 'u') != -1 )

  return 'Exercício 19 =' + vogais
}



//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que são múltiplos de 4.

function multiplosDe4 (lista) { 

  const total = lista.filter(numero => numero % 4 == 0)
  return 'Exercício 20 = ' + total
}


//Nível difícil
//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que são a soma de números primos.

function somaDe2NumerosPrimos (lista){

  const numerosPrimos = [];

  for (let i = 0; i < lista.length; i++) {
    const numeroAtual = lista[i];
    let primo = true;

    for (let x = 2; x < numeroAtual; x++) {
      if (numeroAtual % x === 0) {
        primo = false;
        break;
      }
    }

    if (primo && numeroAtual > 1) {
      numerosPrimos.push(numeroAtual)
    }
  }

  const somaPrimos = numerosPrimos.reduce((acc, current) => acc + current)

  return 'Exercicio 21 = ' + somaPrimos

}

//Crie uma função que recebe um array de palavras e retorna um novo array contendo apenas as palavras que possuem as letras em ordem alfabética.

function ordemAlfabetica(lista) {
  return 'Exercício 22 = ' + lista.filter(palavra => { palavra.split('').join('') === palavra.toLowerCase().split('').sort().join('')})
}

//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que são a raiz quadrada de um número natural.

function raizQuadrada(lista){

  const raiz = lista.filter(numero => Math.sqrt(numero) % 1 === 0)

  return 'Exercício 23 = ' + raiz
}

//Crie uma função que recebe um array de palavras e retorna um novo array contendo apenas as palavras que possuem todas as vogais.

function todasVogais(lista){

  const aEIOU = lista.filter(palavra => palavra.indexOf('a') != -1 && palavra.indexOf('e') != -1 && palavra.indexOf('i') != -1 && palavra.indexOf('o') != -1 && palavra.indexOf('u') != -1)

  return 'Exercício 24 =' + aEIOU
}

//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que possuem os mesmos dígitos de outro número presente no array.

function numerosArrays(numeros) {
  return numeros.filter((num, i) => { 
    const mesmosNumeros = num.toString().split('').sort().join('')
  return numeros.slice(i + 1).some(lista => { 
    const outrosNumeros = lista.toString().split('').sort().join('')
  return mesmosNumeros === outrosNumeros})
})
}

//Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings que são anagramas de outra string presente no array.

function anagramas (lista) {
  return lista.filter((palavra, index) => { 
    let palavraOrdenada = palavra.toLowerCase().split('').sort().join('');
  return 'Exercicio 26 = ' + lista.slice(index + 1).some(item => palavraOrdenada === item.toLowerCase().split('').sort().join(''))
});
}

//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que são palíndromos.

function numerosPalindromos(lista){ 
  
  
  let palindromos = lista.filter(numero => { let novaLista = String(numero); 
  return novaLista === novaLista.split('').reverse().join(''); })
  return 'Exercicio 27 = ' + palindromos
}

//Crie uma função que recebe um array de palavras e retorna um novo array contendo apenas as palavras que não possuem nenhuma vogal.

function nenhumaVogal(lista){
  
  const nenhumaVogal = lista.filter(palavra => palavra.indexOf('a', 'e', 'i', 'o', 'u') != 0)
  return 'Exercício 28 = ' + nenhumaVogal
}

//Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números que são iguais ao seu índice no array.

function indiceIgual(lista){
  
    return 'Exercício 29 = ' + lista.filter((numero, indice) => numero === indice)
}

//Crie uma função que recebe um array de palavras e retorna um novo array contendo apenas as palavras que são anagramas de palavras que estão em uma posição diferente do array.

function indiceDiferente(lista){
  return 'Exercício 30 = ' + lista.filter((numero, indice) => numero !== indice)
}

module.exports = {
  numerosPares,
  arrayPalavras,
  numeroMaiorQue10,
  somaPositivos,
  textoA,
  numerosImpares,
  inicioA,
  maiorNumero,
  numeroPositivoMultiploDe3,
  maisDe1Palavra,
  numerosDivisiveis,
  numerosPrimos,
  palavrasComLetraOFinal,
  entre10E20,
  stringPalindromos,
  numerosParesMaioresQue5,
  letrasRepetidas,
  mediaNumeros,
  multiplosDe4,
  maisDe1Vogal,
  somaDe2NumerosPrimos,
  ordemAlfabetica,
  raizQuadrada,
  todasVogais,
  numerosArrays,
  numerosPalindromos,
  nenhumaVogal,
  indiceIgual,
  indiceDiferente,
  anagramas,
};
