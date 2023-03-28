function eUmOueDois(num) {
    if (num === 1) {
        return 'Sou o numero 1'
    } else if (num === 2) {
        return 'Sou o numero 2'
    } else {
        return 'Nao sei quem sou'
    }
}

// 2 - Receber um numero e informar se ele é maior que 10
// 5, 10, 12

function maiorQue10(num) {
    // Code
    if (num > 10){
        return 'esse número é maior que 10'
    }
    if (num < 10){
        return 'esse número é menor que 10'
    }
    if (num == 10){
        return 'esse número é igual a 10'
    }
}

// 3 - Receber um numero e informar se ele é par ou impar
// 1, 3, 4.6

function parOuImpar (num){

   /* var n = prompt("Digite um numero");
var total = n / 2;
var resultado = total % 2 == 0 ? 'Par' : 'Impar';
alert(total + ' é ' + resultado); */

    if (num %2 == 0) {
        return 'esse número é par'
    }
    if (num %2 !== 0){
        return 'esse número é impar'
    }
    
}

// 4 - Receber 2 numeros e encontrar a média

function encontrarMedia (num1, num2){
    let media = ((num1 + num2) / 2)
    return media
}

// 5 - Receber um numero e eleva ao cubo

function elevarCubo (num){
    // usar operador Math.pow(valor recebido, valor exponencial)
    let numCubo = Math.pow(num, 3)
    return numCubo
}

// 6 - Receber um texto e inseri-lo na frase "O que eu recebi foi {texto recebido}!"

function textoRecebido (text){
    
    return 'O que eu recebi foi ' + text + '!';
}

// 7 - Reeceber 4 numero e pegar a media aritmetica

function mediaAritmetica (num1, num2, num3, num4){
    let media = ((num1 + num2 + num3 + num4) / 4)
    return media 
}

// 8 - Receber 3 numero e encontrar o MMC

// 9 - Receber 3 numero e encontrar o MDC

// 10 - Receber um texto e transforma-lo em tudo maiuscula

function letraMaiscula (text1){
    let text = 'eu sou iniciante na programação';

return (text.toUpperCase()); 

}


// 1 - Receba um valor de um determinado produto Se o produto custar acima de cem reais, o desconto concedido será de 20%. Caso contrário, somente 10% de desconto. Exiba o total a pagar com o desconto aplicado.

function descontoAplicado (num){
    
    if (num < 100){
        let valorTotal = (num / 10)
        let valorSubtraido = (num - valorTotal) 
        return valorSubtraido
    }
   
    if (num > 100){
        let valorTotal = (num / 5)
        let valorSubtraido = (num - valorTotal) 
        return valorSubtraido
    }
}

// 2 - Receba o sexo de 5 pessoas. Informe quantos homens e quantas mulheres foram preenchidos.

function genero (pessoa1, pessoa2, pessoa3, pessoa4, pessoa5){
    let contadorHomem = 0;
    let contadorMulher = 0;

    if (pessoa1 === 'M'){
        contadorHomem++;    
    } else if (pessoa1 ==='F'){
        contadorMulher++;
    }
    if (pessoa2 === 'M'){
        contadorHomem++;    
    } else if (pessoa2 ==='F'){
        contadorMulher++;
    }
    if (pessoa3 === 'M'){
        contadorHomem++;    
    } else if (pessoa3 ==='F'){
        contadorMulher++; 
    }
    if (pessoa4 === 'M'){  
        contadorHomem++;    
        } else if (pessoa4 ==='F'){
        contadorMulher++;
    }
    if (pessoa5 === 'M'){
        contadorHomem++;    
        } else if (pessoa5 ==='F'){
        contadorMulher++;
        }

    return 'Existem ' + contadorHomem + ' homens e ' + contadorMulher + ' mulheres.'
    }

// 3 - Receba a sigla de um estado (ex.: RJ, SP). Se este estado for SP, escreva Paulista, se RJ, escreva Carioca, se MG, escreva Mineiro. Caso seja outro estado, escreva Outro Estado.

function estadosBrasileiros (estado){
    
    

    if (estado == 'MG')
    return 'Mineiro'

    else if (estado == 'RJ')
    return 'Carioca'

    else if (estado == 'SP')
    return 'Paulista'

    else if (estado == 'ES')
    return 'Capixaba'

    else if (estado == 'BA')
    return 'Baiano'

    else if (estado == 'AM')
    return 'Amazonense'

    else if (estado != 'MG','SP','RJ','ES','BA','AM')
    return 'Outro estado.'
}

// 4 - Receba uma letra digitada num campo de input é vogal ou consoante.

function vogalConsoante(letra){

    if(letra =='A' | letra =='E' | letra =='I' | letra =='O' | letra =='U')
        return 'Vogal'
    else     
        return 'Consoante'  
    }

// 5 - Receba duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

    // A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    // A mensagem "Reprovado", se a média for menor do que sete;
    // A mensagem "Aprovado com Distinção", se a média for igual a dez.

   function calculoAluno (num1, num2){


       // let nota1 = parseFloat('num1')
       // let nota2 = parseFloat('num2')

       nota1 = num1;
       nota2 = num2;
   
       media = (nota1 + nota2) / 2
       
       if (media < 7.0)
           return ('Reprovado')
       if (media < 10)
           return ('Aprovado')
       else
           return ('Aprovado com Distinção!')

    }


// 6 - Receba três números inteiros e mostre o maior deles.

function numeroMaior(num1, num2, num3){

//Math.max retorna o maior valor

let numero1 = num1
let numero2 = num2
let numero3 = num3

return 'Esse é o maior numero: ' + Math.max(numero1,numero2, numero3) + '.'

   }

// 7 - Receba três números inteiros, em seguida mostre o maior e o menor deles.

function maiorEMenor (num1, num2, num3){

//Math.max retorna o maior valor
//Math.min retorna o menor valor

let numero1 = num1
let numero2 = num2
let numero3 = num3

return 'Esse é o maior numero: ' + Math.max(numero1,numero2, numero3) + ' e esse é o menor número: ' + Math.min(numero1,numero2, numero3) + '.' 

}

// 8 - Receba três números e mostre-os em ordem decrescente.

function ordemDecrescente(num1, num2, num3){

        let numero1 = num1 
        let numero2 = num2
        let numero3 = num3
   
        let aux = num1;
   
        if(num2 > num1){
         aux = num2;
         num2 = num1;
         num1 = aux;
        }
   
        if(num3 > num1){
         aux = num3;
         num3 = num1;
         num1 = aux;
        }
   
        if(num3 > num2){
         aux = num3;
         num3 = num2;
         num2 = aux;
        }
        return (num1+"-"+num2+"-"+num3);
}

// 9 - Receba um turno você estuda. Os valores podem ser M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

function turnosEscola(turno){
    
    if (turno == 'M')
    return 'Bom dia!'

    else if (turno == 'V')
    return 'Boa tarde!'

    else if (turno == 'N')
    return 'Boa noite!'

    else if (turno != 'M','V','N')
    return 'Valor Inválido!'
}

/* O Teste FINAL

10 - As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes. Receba um salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento. */

function reajusteSalario (salario){

   /* let salarioModelo1 = (salario <= 280)
    let salarioModelo2 = (salario > 280 && salario <= 700)
    let salarioModelo3 = (salario > 700 && salario <= 1500)
    let salarioModelo4 = (salario > 1500) */

    if (salario <= 280){
        let aumento = ((salario * 20) / 100)
        let SalarioAumentoAplicado = (salario + aumento) 
        return 'O seu salário antes do reajuste era de: ' + salario + ' reais. O seu percentual de aumento foi de: 20%. O seu valor de aumento foi de: ' + aumento + ' reais. O novo salário, após o aumento é de: ' + SalarioAumentoAplicado + ' reais. Obrigado pela sua atenção!'
    }
    if (salario > 280 && salario <= 700){
        let aumento = ((salario * 15) / 100)
        let SalarioAumentoAplicado = (salario + aumento) 
        return 'O seu salário antes do reajuste era de: ' + salario + ' reais. O seu percentual de aumento foi de: 15%. O seu valor de aumento foi de: ' + aumento + ' reais. O novo salário, após o aumento é de: ' + SalarioAumentoAplicado + ' reais. Obrigado pela sua atenção!'
    }
    if (salario > 700 && salario <= 1500){
        let aumento = ((salario * 10) / 100)
        let SalarioAumentoAplicado = (salario + aumento) 
        return 'O seu salário antes do reajuste era de: ' + salario + ' reais. O seu percentual de aumento foi de: 10%. O seu valor de aumento foi de: ' + aumento + ' reais. O novo salário, após o aumento é de: ' + SalarioAumentoAplicado + ' reais. Obrigado pela sua atenção!'
    }
    if (salario > 1500){
        let aumento = ((salario * 5) / 100)
        let SalarioAumentoAplicado = (salario + aumento) 
        return 'O seu salário antes do reajuste era de: ' + salario + ' reais. O seu percentual de aumento foi de: 5%. O seu valor de aumento foi de: ' + aumento + ' reais. O novo salário, após o aumento é de: ' + SalarioAumentoAplicado + ' reais. Obrigado pela sua atenção!'
    }
}

module.exports = {
    eUmOueDois,
    maiorQue10,
    parOuImpar,
    encontrarMedia,
    elevarCubo,
    textoRecebido,
    mediaAritmetica,
    letraMaiscula,
    descontoAplicado,
    genero,
    estadosBrasileiros,
    vogalConsoante,
    calculoAluno,
    numeroMaior,
    maiorEMenor,
    ordemDecrescente,
    turnosEscola,
    reajusteSalario,
}