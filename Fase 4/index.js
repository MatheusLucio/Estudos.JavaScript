// Testes das listas

const listas = require('./listas.function.js');

// Exercicio 1
console.log(listas.numerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(listas.numerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercicio 2
console.log(listas.arrayPalavras(['gato', 'letra', 'casa', 'animal', 'programação', 'caderno'])); 

console.log('\n --------------------------------\n')

// Exercicio 3
console.log(listas.numeroMaiorQue10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(listas.numeroMaiorQue10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercicio 4
console.log(listas.somaPositivos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10])); 
console.log(listas.somaPositivos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -20]));

console.log('\n --------------------------------\n')

// Exercicio 5
console.log(listas.textoA(['gato', 'letra', 'casa', 'animal', 'programação', 'caderno'])); 

console.log('\n --------------------------------\n')

// Exercício 6
console.log(listas.numerosImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10])); 

console.log('\n --------------------------------\n')

// Exercicio 7
console.log(listas.inicioA(['gato', 'letra', 'casa', 'animal', 'programação', 'caderno'])); 

console.log('\n --------------------------------\n')

// Exercício 8
console.log(listas.maiorNumero([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10])); 

console.log('\n --------------------------------\n')

// Exercício 9
console.log(listas.numeroPositivoMultiploDe3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10])); 

console.log('\n --------------------------------\n')

// Exercicio 10
console.log(listas.maisDe1Palavra(['gato', 'letra', 'casa', 'animal', 'programação', 'caderno', 'guarda chuva'])); 

console.log('\n --------------------------------\n')

// Exercício 11
console.log(listas.numerosDivisiveis([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercício 12
console.log(listas.numerosPrimos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercicio 13
console.log(listas.palavrasComLetraOFinal(['gato', 'letra', 'casa', 'animal', 'programação', 'caderno', 'guarda chuva', 'onibus'])); 

console.log('\n --------------------------------\n')

// Exercício 14
console.log(listas.entre10E20([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercício 15
console.log(listas.stringPalindromos(['ana', 'letra', 'arara', 'asa']));

console.log('\n --------------------------------\n')

// Exercício 16
console.log(listas.numerosParesMaioresQue5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercicio 17
console.log(listas.letrasRepetidas(['gato', 'letra', 'casa', 'animal', 'programação', 'caderno', 'guarda chuva', 'onibus', 'asa'])); 

console.log('\n --------------------------------\n')

// Exercício 18
console.log(listas.mediaNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercicio 19
console.log(listas.maisDe1Vogal(['gato', 'letra', 'casa', 'animal', 'programação', 'caderno', 'tem', 'onibus', 'asa'])); 

console.log('\n --------------------------------\n')

// Exercício 20
console.log(listas.multiplosDe4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercício 21
console.log(listas.somaDe2NumerosPrimos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercicio 22
console.log(listas.ordemAlfabetica(['gato', 'letra', 'casa', 'animal', 'caderno', 'guarda', 'onibus', 'asa'])); 

console.log('\n --------------------------------\n')

// Exercício 23
console.log(listas.raizQuadrada([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercicio 24
console.log(listas.todasVogais(['sequoia','gato', 'eudialogo', 'letra', 'casa', 'animal', 'programação', 'caderno', 'guarda chuva', 'onibus', 'asa'])); 

console.log('\n --------------------------------\n')

// Exercício 25
console.log(listas.numerosArrays([1, 21, 123, 4, 5, 6, 321, 8, 12, 45, 11, 54, 13, 14, 15]));

console.log('\n --------------------------------\n')

// Exercício 26
console.log(listas.anagramas(['amor', 'roma', 'mar', 'car', 'arc', 'rosa']));

console.log('\n --------------------------------\n')

// Exercício 27
console.log(listas.numerosPalindromos([12, 34, 56, 121, 12321, 12345, 9889, 123454321, 1001]))
console.log('\n --------------------------------\n')

// Exercicio 28
console.log(listas.nenhumaVogal(['ccx','wwt', 'att', 'ph'])); 

console.log('\n --------------------------------\n')

// Exercício 29
console.log(listas.indiceIgual([0, 2, 2, 4, 4, 6, 5]));

console.log('\n --------------------------------\n')

// Exercício 30
console.log(listas.indiceDiferente([0, 2, 2, 4, 4, 6, 5]));

console.log('\n --------------------------------\n')