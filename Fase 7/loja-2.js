// Crie um objeto que represente um cliente, com as propriedades nome, e-mail, telefone e um array de objetos que representam os pedidos do cliente.

const produto1 = {
  nome: 'Camiseta',
  valor: 200,
};

const produto2 = {
  nome: 'Calça',
  valor: 150,
};

const produto3 = {
  nome: 'Meia',
  valor: 80,
};

const cliente1 = {
  identificador: 001,
  nome: 'João Gabriel',
  email: 'joaogabrielsft@gmail.com',
  telefone: '38 3332-4550',
  pedido: [produto1, produto2, produto1, produto3],
};
const cliente2 = {
  identificador: 002,
  nome: 'Maria Eduarda',
  email: 'mariaediuarda@gmail.com',
  telefone: '38 3332-4523',
  pedido: [
    produto1,
    produto2,
    produto1,
    produto3,
    produto1,
    produto2,
    produto1,
    produto3,
  ],
};

// Crie uma função que receba um objeto cliente e retorne o total de gastos do cliente na loja (soma dos totais de todos os pedidos do cliente).

function gastoTotal(cliente) {
  const listaProdutos = cliente.pedido;
  const totalGasto = listaProdutos.reduce((acumulador, produto) => {
    return acumulador + produto.valor;
  }, 0);
  return totalGasto;
}

//console.log(gastoTotal(cliente1))

// Crie uma função que receba um objeto cliente e um objeto de pedido como argumentos e adicione o pedido ao array de pedidos do cliente.

function adicionarPedido(cliente, pedido) {
  cliente.pedido.push(pedido);
  return cliente;
}

//console.log(adicionarPedido(cliente1, produto3))

// Crie uma função que receba um objeto cliente e um objeto de pedido como argumentos e remova o pedido do array de pedidos do cliente.

function removerProduto(cliente, produto) {
  const novoPedido = cliente.pedido.filter((pedido) => pedido !== produto);
  return { ...cliente, pedido: novoPedido };
}

// console.log(removerProduto(cliente1, produto1))

// Crie uma função que receba um objeto cliente e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou mais do que o número fornecido.

function pedidoComFiltro(cliente, numero) {
  const listaFinal = cliente.pedido
    .filter((pedido) => {
      return pedido.valor > numero;
    })
    .map((pedido) => {
      return pedido.nome;
    });
  return listaFinal;
}

//console.log(pedidoComFiltro(cliente1, 1))

// Crie uma função que receba um objeto cliente e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou menos do que o número fornecido.

function pedidoComFiltro(cliente, numero) {
  const listaFinal = cliente.pedido
    .filter((pedido) => {
      return pedido.valor < numero;
    })
    .map((pedido) => {
      return pedido.nome;
    });
  return listaFinal;
}

//console.log(pedidoComFiltro(cliente1, 1))

// Crie uma função que receba um objeto cliente e retorne uma string com uma lista HTML dos pedidos do cliente, cada um em um elemento <li> com o nome do produto, a quantidade e o preço total do pedido.

function pedidoHtml(cliente) {
  // Pegar os pedidos do cliente
  const listaProdutos = cliente.pedido;

  // Iniciar a string HTML
  let listaHtml = '<ul>\n';

  // Contar quantos produtos tem de cada tipo no pedido
  const listaProdutosContados = listaProdutos.reduce((acumulador, produto) => {
    // Pega um dos produtos e verifica se já existe no acumulador
    if (acumulador[produto.nome]) {
      // Se já existir, soma mais 1 no novo objeto, na propriedade quantidade
      acumulador[produto.nome].quantidade += 1;
    } else {
      // Se não existir, cria um novo objeto com o nome do produto, a quantidade e o valor
      acumulador[produto.nome] = {
        valor: produto.valor,
        quantidade: 1,
      };
    }
    return acumulador;
  }, {});
  //   console.log('lista produtos contados', listaProdutosContados);

  // Pegar os entries do Objeto e transformar em um array de chave e valor
  const listaProdutosContadosArray = Object.entries(listaProdutosContados);

  // Iterar sobre os pedidos
  listaProdutosContadosArray.forEach((element) => {
    listaHtml =
      listaHtml +
      `<li>${element[0]} - Quantidade: ${element[1].quantidade} por R$${
        element[1].valor * element[1].quantidade
      }</li>\n`;
  });

  listaHtml += '</ul>';
  return listaHtml;
}

function pedidoHtml2(cliente) {
  // Pegar os produtos do cliente
  // Contar a quantidade de cada produto dentro do pedido

  // Criar uma string HTML com os pedidos do cliente
    // Iniciar a string HTML (<ul>)\
    // Iterar sobre os produtos contados e criar as <li>'s
    // Finalizar a string HTML (</ul>)

  // Retornar resultado
}

console.log(pedidoHtml(cliente1));
console.log(pedidoHtml(cliente2));

// Crie uma função que receba um objeto cliente e retorne uma string com uma lista HTML dos pedidos do cliente agrupados por data, cada um em um elemento <li> com o nome do produto, a quantidade e o preço total do pedido.

// Crie uma função que receba um objeto cliente e retorne uma string com uma lista HTML dos pedidos do cliente agrupados por produto, cada um em um elemento <li> com o nome do produto, a quantidade e o preço total do pedido.

// Crie uma função que receba um objeto cliente e retorne uma string com uma lista HTML dos pedidos do cliente agrupados por data e produto, cada um em um elemento <li> com o nome do produto, a quantidade e o preço total do pedido.
