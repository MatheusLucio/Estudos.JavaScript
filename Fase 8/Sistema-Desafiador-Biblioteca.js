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