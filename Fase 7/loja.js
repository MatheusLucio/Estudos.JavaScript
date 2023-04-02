// Crie um objeto que represente um produto, com as propriedades nome, preço e quantidade em estoque.

const produto1 = {
  nome: 'Cadeira Gamer LRS Gamer X PRO',
  preco: 1250,
  estoque: 42,
};
const produto2 = {
  nome: 'Mouse Gamer LRS Gamer X PRO',
  preco: 200,
  estoque: 55,
};

// Crie um objeto que represente um pedido, com as propriedades id, data, produtos (um array de objetos) e total.

const pedido1 = {
  identificador: 001,
  data: '01/04/2023',
  produtos: [produto1, produto1],
};

const pedido2 = {
  identificador: 001,
  data: '01/04/2023',
  produtos: [
    produto1,
    produto1,
    produto1,
    produto1,
    produto1,
    produto1,
    produto1,
    produto1,
    produto1,
    produto1,
    produto1,
    produto2,
  ],
};

// Crie uma função que receba um objeto produto como argumento e retorne o preço total (preço x quantidade em estoque).

function verificacaoEstoquePreco(produto) {
  const precoTotal = produto.estoque * produto.preco;
  return parseInt(precoTotal);
}

// console.log('------------------');

// console.log(verificacaoEstoquePreco(produto1));
// console.log(verificacaoEstoquePreco(produto2));

// return;
// Crie uma função que receba um objeto pedido como argumento e retorne o total do pedido (soma dos preços totais de todos os produtos do pedido).

function totalPedido(pedido) {
  // encontrar os produtos dentro do pedido
  const produtos = pedido.produtos;

  // encontrar o preço de cada produto
  const valoresProdutos = produtos.map((produto) => {
    return produto.preco;
  });

  // somar os valores dos produtos
  const total = valoresProdutos.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0);

  // retornar o total
  return total;
}
function totalPedido2(pedido) {
  return pedido.produtos
    .map((produto) => produto.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

console.log(totalPedido(pedido1));
console.log(totalPedido2(pedido1));
console.log(totalPedido(pedido2));

return;

// Crie uma função que receba um objeto pedido como argumento e retorne uma string com a lista de produtos do pedido, cada um em uma linha, no formato "nome do produto - quantidade x preço unitário = preço total".

function stringPedido() {}

console.log(stringPedido(pedido1));
// Crie uma função que receba um objeto pedido e um objeto produto como argumentos e adicione o produto ao array de produtos do pedido.

// Crie uma função que receba um objeto pedido e um objeto produto como argumentos e remova o produto do array de produtos do pedido.

// Crie uma função que receba um objeto pedido e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou mais do que o número fornecido.

// Crie uma função que receba um objeto pedido e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou menos do que o número fornecido.
