// Crie um objeto que represente um cliente, com as propriedades nome, e-mail, telefone e um array de objetos que representam os pedidos do cliente.

const produto1 = {
    valor: 200
}

const produto2 = {
    valor: 150
}

const produto3 = {
    valor:80
}

const cliente1 = {
    nome: "João Gabriel",
    email: "joaogabrielsft@gmail.com",
    telefone: "38 3332-4550",
    pedido: [produto1, produto2, produto1, produto3]
}

// Crie uma função que receba um objeto cliente e retorne o total de gastos do cliente na loja (soma dos totais de todos os pedidos do cliente).

function gastoTotal(pedido){
    return pedido.valor
    .reduce((acc, valorTotal) => acc + valorTotal, 0)
}

console.log(gastoTotal(cliente1))

// Crie uma função que receba um objeto cliente e um objeto de pedido como argumentos e adicione o pedido ao array de pedidos do cliente.

function adicionarPedido(cliente, pedido){
    cliente.pedido.push(pedido)
    return cliente
}

console.log(adicionarPedido(cliente1, produto3))

// Crie uma função que receba um objeto cliente e um objeto de pedido como argumentos e remova o pedido do array de pedidos do cliente.

function removerProduto(cliente, produto){ 
const clienteSemPedido = cliente.remove(produto)
return clienteSemPedido
}

console.log(removerProduto(cliente1, produto2))

// Crie uma função que receba um objeto cliente e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou mais do que o número fornecido.




// Crie uma função que receba um objeto cliente e um número como argumentos e retorne um array com os nomes dos produtos que o cliente comprou menos do que o número fornecido.




// Crie uma função que receba um objeto cliente e retorne uma string com uma lista HTML dos pedidos do cliente, cada um em um elemento <li> com o nome do produto, a quantidade e o preço total do pedido.




// Crie uma função que receba um objeto cliente e retorne uma string com uma lista HTML dos pedidos do cliente agrupados por data, cada um em um elemento <li> com o nome do produto, a quantidade e o preço total do pedido.




// Crie uma função que receba um objeto cliente e retorne uma string com uma lista HTML dos pedidos do cliente agrupados por produto, cada um em um elemento <li> com o nome do produto, a quantidade e o preço total do pedido.




// Crie uma função que receba um objeto cliente e retorne uma string com uma lista HTML dos pedidos do cliente agrupados por data e produto, cada um em um elemento <li> com o nome do produto, a quantidade e o preço total do pedido.
