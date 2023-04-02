// Crie um objeto que represente um produto, com as propriedades nome, preço e quantidade em estoque.

const cadeiraGamer = {
    nome: "Cadeira Gamer LRS Gamer X PRO",
    preco: 1250,
    estoque: 42
}

// Crie um objeto que represente um pedido, com as propriedades id, data, produtos (um array de objetos) e total.

const pedido1 = {
    identificador: 001,
    data: "01/04/2023",
    produtos: [cadeiraGamer, cadeiraGamer],
    total: 2500
}

// Crie uma função que receba um objeto produto como argumento e retorne o preço total (preço x quantidade em estoque).

function verificacaoEstoquePreco(cadeiraGamer){
    const precoTotal = cadeiraGamer.estoque * cadeiraGamer.preco
    return parseInt(precoTotal)  
}

console.log(verificacaoEstoquePreco(cadeiraGamer))

// Crie uma função que receba um objeto pedido como argumento e retorne o total do pedido (soma dos preços totais de todos os produtos do pedido).

function totalPedido() {
   return pedido1.total
}
  
  console.log(totalPedido(pedido1));
  

// Crie uma função que receba um objeto pedido como argumento e retorne uma string com a lista de produtos do pedido, cada um em uma linha, no formato "nome do produto - quantidade x preço unitário = preço total".

function stringPedido(){
 
  }
  

console.log(stringPedido(pedido1))
// Crie uma função que receba um objeto pedido e um objeto produto como argumentos e adicione o produto ao array de produtos do pedido.



// Crie uma função que receba um objeto pedido e um objeto produto como argumentos e remova o produto do array de produtos do pedido.



// Crie uma função que receba um objeto pedido e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou mais do que o número fornecido.



// Crie uma função que receba um objeto pedido e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou menos do que o número fornecido.

