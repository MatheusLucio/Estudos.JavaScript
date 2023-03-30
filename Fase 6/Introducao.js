// O que é um objeto?

const objeto = {
  propriedade: 'valor',
  propriedade1: 1,
  propriedade2: true,
  propriedade3: [1, 2, 3],
  propriedade4: {
    propriedade: 'valor',
  },
  propriedade5: function () {
    console.log('Sou uma função');
  },
  batata: true,
};

const pessoa = {
  nome: 'João',
  sobrenome: 'da Silva',
  idade: 25,
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },

  latir: function () {
    console.log('Au au');
  },
};

class Pessoa {
  // Propriedades
  nome;
  sobrenome;
  nomeCompleto;
  idade;

  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.nomeCompleto = nome + ' ' + sobrenome;
  }

  andar() {
    console.log(`${this.nome} está andando`);
  }

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  beber() {
    console.log(`${this.nome} está bebendo`);
  }

  dormir() {
    console.log(`${this.nome} está dormindo`);
  }
}

const pessoa1 = new Pessoa('João', 'da Silva', 25);

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.nomeCompleto);
// console.log(pessoa1.idade);

// pessoa1.andar();
// pessoa1.comer();

// ----------------------------------------------

// Exemplo de exercicio

// Crie uma classe para representar um livro de uma biblioteca.

class Livro {
  identificador;
  nome;
  autor;
  ano;
  valor;

  constructor(nome, autor, ano, valor) {
    this.identificador = Math.random().toString(36).substr(2, 9);

    this.nome = nome;
    this.autor = autor;
    this.ano = ano;
    this.valor = valor;
  }
}

const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 50);
const livro2 = new Livro('Harry Potter', 'J.K. Rowling', 1997, 40);
const livro3 = new Livro('Dom Casmurro', 'Machado de Assis', 1899, 30);
const livro4 = new Livro(
  'O Pequeno Príncipe',
  'Antoine de Saint-Exupéry',
  1943,
  20
);

class Usuario {
  identificador;

  nome;
  sobrenome;
  cpf;
  email;
  telefone;

  constructor(nome, sobrenome, cpf, email, telefone) {
    this.identificador = Math.random().toString(36).substr(2, 9);

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
  }
}

class Funcionario extends Usuario {
  salario;

  constructor(nome, sobrenome, cpf, email, telefone, salario) {
    super(nome, sobrenome, cpf, email, telefone);

    this.salario = salario;
  }
}

class Cliente extends Usuario {
  constructor(nome, sobrenome, cpf, email, telefone) {
    super(nome, sobrenome, cpf, email, telefone);
  }
}

const funcionario1 = new Funcionario(
  'João',
  'da Silva',
  '111.111.111-11',
  'joao@biblioteca.com',
  '(11) 11111-1111',
  2000
);

const cliente1 = new Cliente(
  'João',
  'da Silva',
  '111.111.111-11',
  'joao@gmail.com',
  '(11) 11111-1111'
);

const cliente2 = new Cliente(
  'Maria',
  'da Silva',
  '222.222.222-22',
  'maria@gmail.com',
  '(22) 22222-2222'
);

class Venda {
  identificador;
  livro;
  cliente;
  vendedor;
  valor;

  constructor(livro, cliente, vendedor, valor) {
    this.identificador = Math.random().toString(36).substr(2, 9);

    this.livro = livro;
    this.cliente = cliente;
    this.vendedor = vendedor;
    this.valor = valor;
  }
}

const venda1 = new Venda(
  livro1.identificador,
  cliente1.identificador,
  funcionario1.identificador,
  livro1.valor
);

const venda2 = new Venda(
  livro2.identificador,
  cliente2.identificador,
  funcionario1.identificador,
  livro2.valor
);

const venda3 = new Venda(
  livro3.identificador,
  cliente1.identificador,
  funcionario1.identificador,
  livro3.valor
);

console.log('----------------------------------------------');
console.log('Livros');
console.log(livro1);
console.log(livro2);
console.log(livro3);
console.log(livro4);

console.log('----------------------------------------------');
console.log('Funcionários');

console.log(funcionario1);

console.log('----------------------------------------------');
console.log('Clientes');

console.log(cliente1);
console.log(cliente2);

console.log('----------------------------------------------');
console.log('Vendas');

console.log(venda1);
console.log(venda2);
console.log(venda3);

// Quantos livros o cliente1 comprou?

const vendas = [venda1, venda2, venda3];

const vendasCliente1 = vendas.filter((venda) => {
  return venda.cliente === cliente1.identificador;
});

console.log('----------------------------------------------');

console.log('Vendas para o cliente 1', vendasCliente1);

console.log('----------------------------------------------');
