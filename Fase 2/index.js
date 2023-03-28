/* Aqui você vai importar as funções de exercícios e 
chamá-las para testar seu código */

const condicionais = require('./exercicios/condicionais.function.js');

// Testes

// Exercicio 1
console.log(condicionais.isEven(2)); // true
console.log(condicionais.isEven(3)); // false

console.log('\n --------------------------------\n')

// Exercicio 2
console.log(condicionais.isBiggerThan100(101)); // true
console.log(condicionais.isBiggerThan100(100)); // false

console.log('\n --------------------------------\n')

// Exercicio 3
console.log(condicionais.isSmallerThan10(9)); // true
console.log(condicionais.isSmallerThan10(10)); // false

console.log('\n --------------------------------\n')

// Exercicio 4
console.log(condicionais.isBetween10And100(11)); // true
console.log(condicionais.isBetween10And100(10)); // false

console.log('\n --------------------------------\n')

console.log(condicionais.aprovacaoAluno(10, 8));
console.log(condicionais.aprovacaoAluno(8, 8));
console.log(condicionais.aprovacaoAluno(7, 6));
console.log(condicionais.aprovacaoAluno(6, 5));
console.log(condicionais.aprovacaoAluno(2, 1));


console.log('\n --------------------------------\n')

console.log(condicionais.triangulo(2, 1, 4));
console.log(condicionais.triangulo(5, 5, 5));
console.log(condicionais.triangulo(3, 3, 6));

console.log('\n --------------------------------\n')

console.log(condicionais.equaçãoSegundoGrau(9, -12, 4));
console.log(condicionais.equaçãoSegundoGrau(1, -3, -10));

