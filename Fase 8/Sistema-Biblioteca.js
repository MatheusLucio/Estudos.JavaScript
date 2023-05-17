// Objetivo: Organizar uma biblioteca de livros usando objetos e arrays

// Livros
let livros = [
    {
        id: 1,
        titulo: 'O Grande Gatsby',
        autor: 'F. Scott Fitzgerald',
        numeroDePaginas: 218,
    },
    {
        id: 2,
        titulo: '1984',
        autor: 'George Orwell',
        numeroDePaginas: 328,
    },
    {
        id: 3,
        titulo: 'Cem Anos de Solidão',
        autor: 'Gabriel García Márquez',
        numeroDePaginas: 417,
    },
    {
        id: 4,
        titulo: 'A Revolução dos Bichos',
        autor: 'George Orwell',
        numeroDePaginas: 152,
    },
    {
        id: 5,
        titulo: 'O Apanhador no Campo de Centeio',
        autor: 'J.D. Salinger',
        numeroDePaginas: 214,
    },
    {
        id: 6,
        titulo: 'Guerra e Paz',
        autor: 'Liev Tolstói',
        numeroDePaginas: 1360,
    },
    {
        id: 7,
        titulo: 'O Sol é para Todos',
        autor: 'Harper Lee',
        numeroDePaginas: 364,
    },
    {
        id: 8,
        titulo: 'Grande Sertão: Veredas',
        autor: 'João Guimarães Rosa',
        numeroDePaginas: 632,
    },
    {
        id: 9,
        titulo: 'A Culpa é das Estrelas',
        autor: 'John Green',
        numeroDePaginas: 288,
    },
    {
        id: 10,
        titulo: 'Dom Quixote',
        autor: 'Miguel de Cervantes',
        numeroDePaginas: 1072,
    },
    {
        id: 11,
        titulo: 'Memórias Póstumas de Brás Cubas',
        autor: 'Machado de Assis',
        numeroDePaginas: 192,
    },
    {
        id: 12,
        titulo: 'O Processo',
        autor: 'Franz Kafka',
        numeroDePaginas: 224,
    },
    {
        id: 13,
        titulo: 'O Hobbit',
        autor: 'J.R.R. Tolkien',
        numeroDePaginas: 288,
    },
    {
        id: 14,
        titulo: 'A Divina Comédia',
        autor: 'Dante Alighieri',
        numeroDePaginas: 928,
    },
    {
        id: 15,
        titulo: 'Moby Dick',
        autor: 'Herman Melville',
        numeroDePaginas: 624,
    },
    {
        id: 16,
        titulo: 'O Nome da Rosa',
        autor: 'Umberto Eco',
        numeroDePaginas: 592,
    },
    {
        id: 17,
        titulo: 'O Vermelho e o Negro',
        autor: 'Stendhal',
        numeroDePaginas: 576,
    },
    {
        id: 18,
        titulo: 'A Metamorfose',
        autor: 'Franz Kafka',
        numeroDePaginas: 56,
    },
    {
        id: 19,
        titulo: 'O Retrato de Dorian Gray',
        autor: 'Oscar Wilde',
        numeroDePaginas: 256,
    },
    {
        id: 20,
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        numeroDePaginas: 1184,
    },
];

// Clientes

let clientes = [
    ,
    {
        id: 1,
        nome: 'João Silva',
        email: 'joao.silva@gmail.com',
        telefone: '(11) 99999-9999',
    },
    {
        id: 2,
        nome: 'Maria Santos',
        email: 'maria.santos@hotmail.com',
        telefone: '(21) 99999-9999',
    },
    {
        id: 3,
        nome: 'Pedro Almeida',
        email: 'pedro.almeida@yahoo.com',
        telefone: '(31) 99999-9999',
    },
    {
        id: 4,
        nome: 'Ana Pereira',
        email: 'ana.pereira@outlook.com',
        telefone: '(41) 99999-9999',
    },

    {
        id: 5,
        nome: 'Lucas Oliveira',
        email: 'lucas.oliveira@gmail.com',
        telefone: '(51) 99999-9999',
    },
    {
        id: 6,
        nome: 'Fernanda Costa',
        email: 'fernanda.costa@hotmail.com',
        telefone: '(12) 99999-9999',
    },
    {
        id: 7,
        nome: 'Ricardo Souza',
        email: 'ricardo.souza@yahoo.com',
        telefone: '(47) 99999-9999',
    },
    {
        id: 8,
        nome: 'Juliana Santos',
        email: 'juliana.santos@gmail.com',
        telefone: '(54) 99999-9999',
    },
    {
        id: 9,
        nome: 'Gustavo Lima',
        email: 'gustavo.lima@outlook.com',
        telefone: '(92) 99999-9999',
    },
    {
        id: 10,
        nome: 'Camila Pereira',
        email: 'camila.pereira@yahoo.com',
        telefone: '(84) 99999-9999',
    },
];

// Emprestimos

let emprestimos = [
    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[1].id,
        livroId: livros[1].id,
        data: '2023-05-10',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[2].id,
        livroId: livros[2].id,
        data: '2023-05-11',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[3].id,
        livroId: livros[3].id,
        data: '2023-05-12',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[4].id,
        livroId: livros[4].id,
        data: '2023-05-13',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[5].id,
        livroId: livros[5].id,
        data: '2023-05-14',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[6].id,
        livroId: livros[6].id,
        data: '2023-05-15',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[1].id,
        livroId: livros[7].id,
        data: '2023-05-16',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[3].id,
        livroId: livros[8].id,
        data: '2023-05-17',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[2].id,
        livroId: livros[9].id,
        data: '2023-05-18',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[4].id,
        livroId: livros[10].id,
        data: '2023-05-19',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[1].id,
        livroId: livros[11].id,
        data: '2023-05-20',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[2].id,
        livroId: livros[12].id,
        data: '2023-05-21',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[3].id,
        livroId: livros[13].id,
        data: '2023-05-22',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[4].id,
        livroId: livros[14].id,
        data: '2023-05-23',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[5].id,
        livroId: livros[15].id,
        data: '2023-05-24',
    },
    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[6].id,
        livroId: livros[16].id,
        data: '2023-05-25',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[9].id,
        livroId: livros[17].id,
        data: '2023-05-26',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[5].id,
        livroId: livros[18].id,
        data: '2023-05-27',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[9].id,
        livroId: livros[19].id,
        data: '2023-05-28',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[4].id,
        livroId: livros[18].id,
        data: '2023-05-29',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[1].id,
        livroId: livros[10].id,
        data: '2023-05-30',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[2].id,
        livroId: livros[9].id,
        data: '2023-05-31',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[3].id,
        livroId: livros[8].id,
        data: '2023-06-01',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[4].id,
        livroId: livros[7].id,
        data: '2023-06-02',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[5].id,
        livroId: livros[6].id,
        data: '2023-06-03',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[6].id,
        livroId: livros[5].id,
        data: '2023-06-04',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[5].id,
        livroId: livros[4].id,
        data: '2023-06-05',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[4].id,
        livroId: livros[3].id,
        data: '2023-06-06',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[3].id,
        livroId: livros[2].id,
        data: '2023-06-07',
    },

    {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[1].id,
        livroId: livros[1].id,
        data: '2023-06-08',
    },
];

// Basico de todos

console.log('\n  --------------------------------\n')
// Crie uma função que crie um novo livro.

function novoLivro (id, titulo, autor, paginas){
    return {
        id: id,
        titulo: titulo,
        autor: autor,
        paginas: paginas
    }
}

console.log(novoLivro(10, 'GTA V', 'Rockstar', 241 ))

console.log('\n --------------------------------\n')

// Crie uma função que obtenha uma lista de todos os livros.

function listaLivros(){
    return livros
}

console.log(listaLivros())

console.log('\n --------------------------------\n')

// Crie uma função que obtenha um livro específico por seu ID.

function obterLivroPorId(id) {
    return livros.find(livro => livro.id === id)
  }

  console.log(obterLivroPorId(5))

  console.log('\n --------------------------------\n')

// Crie uma função que exclua um livro existente.

function excluirLivroPorId(id) {
   return livros = livros.filter((livro) => livro.id !== id)
  }

  console.log(excluirLivroPorId(5))

  console.log('\n --------------------------------\n')

// Crie uma função que crie um novo cliente.

function criarCliente (id, nome, email, telefone){
    const novoCliente = { 
    id: id,
    nome: nome,
    email: email,
    telefone: telefone
    }
return novoCliente
}

console.log(criarCliente(11,'Matheus Lucio', 'matheuslucio@gmail.com' , '3363-4488' ))

console.log('\n --------------------------------\n')

// Crie uma função que obtenha uma lista de todos os clientes.

function listaClientes(){
    return clientes
}

console.log(listaClientes())

console.log('\n --------------------------------\n')

// Crie uma função que obtenha um cliente específico por seu ID.

function clientePorId(id){ 
return cliente = clientes.filter((clientes) => clientes.id == id)
}

console.log(clientePorId(2))

console.log('\n --------------------------------\n')

// Crie uma função que exclua um cliente existente.

function excluirCliente(id){
    return clientes = clientes.filter((clientes) => clientes.id !== id)
}

console.log(excluirCliente(1))
console.log('\n --------------------------------\n')

// Crie uma função que crie um novo empréstimo.

function criarEmprestimo(clienteId, livroId, data){ 
const novoEmprestimo = {
    id: Math.floor(Math.random() * 100000),
    clienteId: clientes[clienteId].id,
    livroId: livros[livroId].id,
    data: data
}
return novoEmprestimo
}

console.log(criarEmprestimo( 2, 5, '16/05/2023'))
console.log('\n --------------------------------\n')

// Crie uma função que obtenha uma lista de todos os empréstimos.

function listaEmprestimos(){
    return emprestimos
}

console.log(listaEmprestimos())
console.log('\n --------------------------------\n')

// Crie uma função que obtenha um empréstimo específico por seu ID.

function emprestimoPorId(data){
    return emprestimos.find((emprestimo) => emprestimo.data === data)
}

console.log(emprestimoPorId('2023-06-08'))
console.log('\n --------------------------------\n')

// Crie uma função que exclua um empréstimo existente.

function excluirEmprestimo(data, data){
    return emprestimo = emprestimos.filter((emprestimo) => emprestimo.data !== data)
}

console.log(excluirEmprestimo('2023-05-27', '2023-05-23'))
console.log('\n --------------------------------\n')

// Livros
// Encontre todos os livros do autor "George Orwell".

function filtroGeorge(autor){
    return autorGeorge = livros.filter((livros)=> livros.autor === autor)
}

console.log(filtroGeorge('George Orwell'))
console.log('\n --------------------------------\n')

// Encontre todos os livros com mais de 500 páginas.

function paginasLivros(){
    return quinhentasPaginas = livros.filter((livros)=> livros.numeroDePaginas >= 500)
}

console.log(paginasLivros())
console.log('\n --------------------------------\n')

// Encontre o livro com o ID igual a 3 e retorne seu título.

function id3Titulo(id){
    let livroId3 = livros.find((livros) => livros.id === id)
    return livroId3.titulo
}

console.log(id3Titulo(3))
console.log('\n --------------------------------\n')

// Encontre todos os livros com o título contendo a palavra "Comédia".

function tituloComedia(){
    return livros.filter((livro) => livro.titulo.includes('Comédia'));
}

console.log(tituloComedia('Comédia'))
console.log('\n --------------------------------\n')

// Adicione um novo livro ao array livros e atualize o seu ID.

function adicionarLivro(id, titulo, autor, paginas){
    const novoLivro = { 
        id: id,
        titulo: titulo,
        autor: autor,
        paginas: paginas
    }
    livros.push(novoLivro)
    return livros
} 

console.log(adicionarLivro(21, 'GTA V', 'Rockstar', 241 ))
console.log('\n --------------------------------\n')

// Clientes
// Encontre o cliente com o ID igual a 7 e retorne seu nome.

function clienteId(id){
    let clienteId7 = clientes.find((clientes)=> clientes.id === id)
    return clienteId7.nome
}

console.log(clienteId(7))
console.log('\n --------------------------------\n')

// Encontre todos os clientes com o nome "João".

function filtrarJoao(nomeEscolhido){
    return clientes.filter((clientes) => clientes.nome == nomeEscolhido)
}

console.log(filtrarJoao('João'))
console.log('\n --------------------------------\n')

// Encontre todos os clientes com o email terminando em "@gmail.com".

function filtroEmail(email){
    return clientes.filter((cliente) => cliente.email.endsWith(email));
}

console.log(filtroEmail('@gmail.com'))
console.log('\n --------------------------------\n')

// Adicione um novo cliente ao array clientes e atualize o seu ID.

function adicionarCliente(id, nome, email, telefone){
   const clienteNovo = { 
    id: id,
    nome: nome,
    email: email,
    telefone: telefone
} 
clientes.push(clienteNovo)
return clientes
}

console.log(adicionarCliente(11, 'ana', 'ana@gmail.com', '3344-4441'))
console.log('\n --------------------------------\n')

// Remova o cliente com o ID igual a 4 do array clientes.

function removerCliente(id){
    return clientes.filter((clientes)=> clientes.id !== id)
}

console.log(removerCliente(4))
console.log('\n --------------------------------\n')

// Empréstimos
// Encontre todos os empréstimos realizados no dia de hoje.

function encontrarEmprestimosDoDia(data) {
    return emprestimos.filter(emprestimo => emprestimo.data === data)
    }

    console.log(encontrarEmprestimosDoDia('17/05/2023'))
    console.log('\n --------------------------------\n')

// Encontre todos os empréstimos realizados pelo cliente com o ID igual a 9.

function emprestimoId(id){
    let clientePesquisa = emprestimos.filter((emprestimos)=> emprestimos.clienteId === id)
    return clientePesquisa
    }

    console.log(emprestimoId(9))
    console.log('\n --------------------------------\n')

// Encontre todos os empréstimos de um livro com o ID igual a 12.

function emprestimoComId(id){
    let clientePesquisa = emprestimos.filter((emprestimos)=> emprestimos.livroId === id)
    return clientePesquisa
}

console.log(emprestimoComId(12))
console.log('\n --------------------------------\n')

// Adicione um novo empréstimo ao array emprestimos.

function criarEmprestimoEAdicionar(clienteId, livroId, data){ 
    const novoEmprestimo = {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[clienteId].id,
        livroId: livros[livroId].id,
        data: data
    }
        emprestimos.push(novoEmprestimo)
        return emprestimos
    }
        
        console.log(criarEmprestimoEAdicionar( 2, 5, '16-05-2023'))
        console.log('\n --------------------------------\n')


// Fácil
// Retorne um novo array contendo apenas os títulos dos livros.

function nomeLivros(){
return livros.map((livro) => livro.titulo)
}
console.log(nomeLivros())
console.log('\n --------------------------------\n')

// Retorne um novo array contendo apenas os nomes dos clientes.

function nomeCliente(){
    return clientes.map((clientes)=> clientes.nome)
}

console.log(nomeCliente())
console.log('\n --------------------------------\n')

// Adicione um novo livro ao array livros.

function adicionarLivro (id, titulo, autor, paginas){
   let novoLivro = { 
        id: id,
        titulo: titulo,
        autor: autor,
        numeroDePaginas: paginas
    }
    livros.push(novoLivro)
    return livros
}

console.log(adicionarLivro(22, 'oi', 'matheus', 42))
console.log('\n --------------------------------\n')

// Adicione um novo cliente ao array clientes.

function adicionarNovoCliente(id, nome, email, telefone){
    const clienteNovo = { 
     id: id,
     nome: nome,
     email: email,
     telefone: telefone
 } 
 clientes.push(clienteNovo)
 return clientes
 }
 
 console.log(adicionarNovoCliente(12, 'matheus', 'matheus@gmail.com', '(31) 3364-4545'))
 console.log('\n --------------------------------\n')

// Adicione um novo empréstimo ao array emprestimos.

function adicionarEmprestimo(clienteId, livroId, data){ 
    const novoEmprestimo = {
        id: Math.floor(Math.random() * 100000),
        clienteId: clientes[clienteId].id,
        livroId: livros[livroId].id,
        data: data
    }
        emprestimos.push(novoEmprestimo)
        return emprestimos
    }
        
        console.log(adicionarEmprestimo( 7, 9, '17-05-2023'))
        console.log('\n --------------------------------\n')

// Médio
// Ordene o array livros em ordem decrescente pelo número de páginas.

function ordenarPaginasDecrescente(){
    
}


// Retorne um novo array contendo apenas os livros emprestados.
// Encontre o cliente com o maior número de empréstimos realizados.
// Encontre o livro mais emprestado.
// Retorne um novo array contendo apenas os clientes que realizaram empréstimos no mês de maio.
// Difícil
// Encontre todos os livros emprestados por um cliente específico e retorne uma lista com os títulos dos livros.
// Encontre todos os empréstimos realizados em um determinado livro e retorne uma lista com os nomes dos clientes que emprestaram o livro.
// Encontre todos os empréstimos que estão atrasados e retorne uma lista com os nomes dos clientes, títulos dos livros e data de devolução esperada.
// Crie uma função que retorne a média de empréstimos realizados por cliente.
// Encontre todos os livros emprestados mais de uma vez e retorne uma lista com os títulos dos livros.
// Muito Difícil
// Crie uma função que retorne uma lista com os livros que nunca foram emprestados.
// Crie uma função que retorne uma lista com os clientes que realizaram empréstimos de livros de um determinado autor.
// Crie uma função que retorne o cliente com o maior atraso em devoluções de empréstimos.
// Crie uma função que retorne o livro com a menor média de dias de empréstimo.
// Crie uma função que retorne a data em que um livro foi mais emprestado.
// Desafiador
// Crie uma função que retorne a lista de livros mais emprestados em ordem crescente.
// Crie uma função que retorne a lista de clientes que realizaram mais empréstimos em ordem crescente.
// Crie uma função que retorne a lista de empréstimos em ordem decrescente pela data de empréstimo.
// Crie uma função que retorne a lista de livros que foram emprestados por mais de um cliente em ordem alfabética.
// Crie uma função que retorne a lista de clientes que realizaram empréstimos de todos os livros.
// Extremamente Desafiador
// Crie uma função que retorne a lista de clientes que realizaram empréstimos em todos os meses do ano.
// Crie uma função que retorne a lista de livros que nunca foram emprestados em ordem alfabética.
// Crie uma função que retorne a lista de empréstimos que foram realizados com atraso em ordem decrescente pela quantidade de dias de atraso.
// Crie uma função que retorne a lista de clientes que realizaram empréstimos em todos os meses do ano em ordem alfabética.
// Crie uma função que retorne a lista de livros mais emprestados por clientes com menos de 30 anos em ordem decrescente pela quantidade de empréstimos.