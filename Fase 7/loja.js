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

// Crie um objeto que represente um pedido, com as propriedades id, data, produtos (um array de objetos).

const pedido1 = {
  identificador: 001,
  data: '01/04/2023',
  quantidade: 2,
  produtos: [produto1, produto1],
};

const pedido2 = {
  identificador: 002,
  data: '01/04/2023',
  quantidade: 4,
  produtos: [produto1, produto1, produto1, produto2],
};

// Crie uma função que receba um objeto produto como argumento e retorne o preço total (preço x quantidade em estoque).

function verificacaoEstoquePreco(produto) {
  const precoTotal = produto.estoque * produto.preco;
  return parseInt(precoTotal);
}

// console.log('------------------');

// console.log(verificacaoEstoquePreco(produto1));
// console.log(verificacaoEstoquePreco(produto2));

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

//console.log(totalPedido(pedido1));
//console.log(totalPedido2(pedido1));
//console.log(totalPedido(pedido2));

// Crie uma função que receba um objeto pedido como argumento e retorne uma string com a lista de produtos do pedido.

function listarProdutos(pedido) {
  const produtos = pedido.produtos;
  const listaProdutos = produtos
    .map((produto) => {
      return produto.nome;
    })
    .reduce((acumulador, valorAtual, index) => {
      // return index === 0 // Condicao => if (index === 0)
      //   ? acumulador + `1. ${valorAtual}\n` // If
      //   : acumulador + `${index + 1}. ${valorAtual}\n`; // Else
      return acumulador + `${index + 1}. ${valorAtual}\n`;
    }, '');
  return listaProdutos;
}

// console.log(listarProdutos(pedido1));
// console.log('------------------');
// console.log(listarProdutos(pedido2));

// Crie uma função que receba um objeto pedido e um objeto produto como argumentos e adicione o produto ao array de produtos do pedido.

function adicionarObjeto(pedido, produto) {
  pedido.produtos.push(produto);
  return pedido;
}

// console.log(adicionarObjeto(pedido1, produto2));

// Crie uma função que receba um objeto pedido e um objeto produto como argumentos e remova o primeiro produto do array de produtos do pedido.
// Refazer
function removerProduto(pedido, produto) {
  const meuPedido = JSON.parse(JSON.stringify(pedido));
  // pedido.produtos.splice(produto, 1);
  meuPedido.produtos = pedido.produtos.filter((produtoDoPedido) => {
    return produtoDoPedido.nome !== produto.nome;
  });
  return meuPedido;
}
// console.log('Meu pedido', pedido2);
// console.log(removerProduto(pedido2, produto1));
// console.log(removerProduto(pedido2, produto2));

// Crie uma função que receba um objeto pedido e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou mais do que o número fornecido.
// Refazer
function filtroPedido(pedido, numero) {
  const listaProdutos = pedido.produtos
    .filter((produto) => {
      return produto.quantidade > numero;
    })
    .map((produto) => {
      return produto.nome;
    });
  return listaProdutos;
}

console.log(filtroPedido(pedido1, 1))
console.log(filtroPedido(pedido2, 2))

// Crie uma função que receba um objeto pedido e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou menos do que o número fornecido.

function filtroPedido1(pedido, numero) {
  const listaProdutos = pedido.produtos
    .filter((produto) => {
      return produto.quantidade < numero;
    })
    .map((produto) => {
      return produto.nome;
    });
  return listaProdutos;
}

//console.log(filtroPedido1(pedido1, 1))
//console.log(filtroPedido1(pedido2, 2))
