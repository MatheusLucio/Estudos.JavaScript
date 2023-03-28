const {eUmOueDois, maiorQue10, parOuImpar, encontrarMedia, elevarCubo, textoRecebido, mediaAritmetica, letraMaiscula, descontoAplicado, genero, estadosBrasileiros, vogalConsoante, numeroMaior, maiorEMenor, ordemDecrescente, turnosEscola, reajusteSalario, calculoAluno} = require('./estudos/condicionais.funcion')

// É um ou é dois

console.log('Exercicio 1')

console.log('teste 1', eUmOueDois(1))
console.log('teste 2', eUmOueDois(2))
console.log('teste 3', eUmOueDois(3))

console.log('\n --------------------------------\n')

console.log('teste 1', maiorQue10(4))
console.log('teste 1', maiorQue10(10))
console.log('teste 1', maiorQue10(15))

console.log('\n --------------------------------\n')

console.log('teste 2', parOuImpar(6))
console.log('teste 2', parOuImpar(11.5))
console.log('teste 2', parOuImpar(15))

console.log('\n --------------------------------\n')

console.log('teste 3', encontrarMedia(5,7))
console.log('teste 3', encontrarMedia(10,15))
console.log('teste 3', encontrarMedia(-3,-9.5))

console.log('\n --------------------------------\n')

console.log('teste 4', elevarCubo(7))
console.log('teste 4', elevarCubo(-3))
console.log('teste 4', elevarCubo(5.8))

console.log('\n --------------------------------\n')

console.log('teste 5', textoRecebido('um presente'))

console.log('\n --------------------------------\n')

console.log('teste 6', mediaAritmetica(4, 8, 12, 20))
console.log('teste 6', mediaAritmetica(1.2, 7.2, 21.8, 30.6))
console.log('teste 6', mediaAritmetica(-6, -2, -8, 4))

console.log('\n --------------------------------\n')

console.log('teste 9', letraMaiscula('começando a programação'))

console.log('\n --------------------------------\n')

console.log('teste 1', descontoAplicado(120))
console.log('teste 1', descontoAplicado(90))
console.log('teste 1', descontoAplicado(240))
console.log('teste 1', descontoAplicado(35))

console.log('\n --------------------------------\n')

console.log('teste 2', genero('M', 'M', 'F', 'F', 'M'))

console.log('\n --------------------------------\n')

console.log('teste 3', estadosBrasileiros('RJ'))
console.log('teste 3', estadosBrasileiros('MG'))
console.log('teste 3', estadosBrasileiros('ES'))
console.log('teste 3', estadosBrasileiros('SP'))
console.log('teste 3', estadosBrasileiros('BA'))
console.log('teste 3', estadosBrasileiros('AM'))
console.log('teste 3', estadosBrasileiros('DF'))

console.log('\n --------------------------------\n')


console.log('teste 4', vogalConsoante('C'))
console.log('teste 4', vogalConsoante('E'))
console.log('teste 4', vogalConsoante('K'))
console.log('teste 4', vogalConsoante('I'))
console.log('teste 4', vogalConsoante('M'))

console.log('\n --------------------------------\n')

console.log('teste 5',calculoAluno (6,5))
console.log('teste 5',calculoAluno (8,7))
console.log('teste 5',calculoAluno (10,8))
console.log('teste 5',calculoAluno (9,4))
console.log('teste 5',calculoAluno (10,6))
console.log('teste 5',calculoAluno (10,10))

console.log('\n --------------------------------\n')

console.log('teste 6', numeroMaior(-3,-9,-5))
console.log('teste 6', numeroMaior(15,7,12))
console.log('teste 6', numeroMaior(244,244.5,244.3))

console.log('\n --------------------------------\n')

console.log('teste 7', maiorEMenor(15,7,12))
console.log('teste 7', maiorEMenor(10,12,14))
console.log('teste 7', maiorEMenor(8,4,1))

console.log('\n --------------------------------\n')

console.log('teste 8', ordemDecrescente(15, 7, 12))
console.log('teste 8', ordemDecrescente(45, 32, 53))

console.log('\n --------------------------------\n')

console.log('teste 9', turnosEscola('N'))
console.log('teste 9', turnosEscola('V'))
console.log('teste 9', turnosEscola('M'))
console.log('teste 9', turnosEscola('A'))

console.log('\n --------------------------------\n')

console.log('teste 10', reajusteSalario(255))
console.log('teste 10', reajusteSalario(480))
console.log('teste 10', reajusteSalario(1280))
console.log('teste 10', reajusteSalario(2050))