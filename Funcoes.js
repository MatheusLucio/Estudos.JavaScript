// Utilidades Simples de Funções e Prototypes:
.map // alterar todos os itens de uma lista - colocar uma condição
lista.map(function (numero) {
    return numero * 2; })

.reduce // fazer soma
const total = listaPositivos.reduce((acc, current) => acc + current)

.forEach // passa por todos os numeros ou strings de uma lista
lista.forEach(function (numero))

.filter // fazer filtros 
const numerosPares = lista.filter(num => num % 2 == 0)
const palavraGrande = lista.filter(palavra => palavra.length > 5)
const total = lista.filter(numero => numero > 10)

.findIndex // procurar um index específico
lista.findIndex((numero) => numero < 0);

.indexOf // procurar uma palavra, letra, numero
palavra.indexOf('a') !== -1
palavra.indexOf(' ') !== -1
palavra.indexOf('a', 'e', 'i', 'o', 'u') != -1 

.splice

.slice

.Math.max // pegar maior numero da lista
Math.max(...lista)

.Math.min // pegar o minimo
Math.min(...lista)

.substr //
palavra.substr(0, 1) == 'a'
palavra.substr(-1) == 'o'

.split


.join


.reverse


.sqrt // descobrir a raiz quadrada do numero
Math.sqrt(numero) % 1 === 0

.sort // ordena a lista 
lista.sort()

.toString() //
lista.toString()

.some //
.some()

.toUpperCase // colocar todas as palavras da lista com letra maiscula
lista.toUpperCase()

.toLowerCase // colocar todas as palavras da lista com letra minuscula
palavra.toLowerCase()

.concat // concatenar ou adicionar no meio de listas ou palavras 
listas.concat(' ', lista1);
