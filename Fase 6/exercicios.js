// 1. Crie um objeto que represente uma pessoa, com as propriedades nome, idade, e-mail e telefone.
const pessoa1 = {
  nome: 'Matheus',
  sobrenome: 'Lucio',
  idade: 24,
  email: 'matheuslucio@yahoo.com',
  telefone: '(31) 97521-5821',
};

console.log(pessoa1);

// 2. Crie um objeto que represente um carro, com as propriedades marca, modelo, ano e cor.

const carro1 = {
  marca: 'Fiat',
  modelo: 'Toro',
  ano: 2023,
  cor: 'Prata',
};

console.log(carro1);

// 3. Crie um objeto que represente um livro, com as propriedades título, autor, número de páginas e preço.

const livro1 = {
  titulo: 'Senhor dos Anéis',
  autor: 'Tolkien',
  paginas: 50,
  preço: 75,
};

console.log(livro1);

// 4. Crie uma função que receba um objeto pessoa como argumento e retorne o nome completo da pessoa (concatenando o nome e o sobrenome, se houver).

function nomePessoa(pessoa) {
  return pessoa.nome + ' ' + pessoa.sobrenome;
}

console.log(nomePessoa(pessoa1));

// 5. Crie uma função que receba um objeto carro como argumento e retorne uma string com a marca e o modelo do carro.

function modeloCarro(carro) {
  return carro.marca + ', ' + carro.modelo;
}

console.log(modeloCarro(carro1));

// 6. Crie uma função que receba um objeto livro como argumento e retorne uma string com o título e o autor do livro.

function tituloLivro(livro) {
  return livro.titulo + ', ' + livro.autor;
}

console.log(tituloLivro(livro1));

// 7. Crie uma função que receba um objeto pessoa como argumento e retorne uma string com uma mensagem de saudação personalizada (por exemplo, "Olá, João! Tudo bem?").

function saudacaoPessoa(pessoa) {
  // return 'Seja bem vindo ' + pessoa.nome + " " + pessoa.sobrenome + '!'
  return `Seja bem vindo ${pessoa.nome} ${pessoa.sobrenome}!`;
}

console.log(saudacaoPessoa(pessoa1));

// 8. Crie uma função que receba um objeto carro como argumento e retorne o ano do carro como número.

function anoCarro(carro) {
  // const anoFormatado = parseInt(carro.ano)
  return parseInt(carro.ano);
}

console.log(anoCarro(carro1));

// 9. Crie uma função que receba um objeto livro como argumento e retorne o preço do livro como número.

function precoLivro(livro) {
  return parseInt(livro.preço);
}

console.log(precoLivro(livro1));

// 10. Crie um objeto que represente uma playlist de músicas, com as propriedades nome, autor e músicas (um array de objetos com as propriedades nome e duração). Crie uma função que receba esse objeto como argumento e retorne o tempo total de duração das músicas da playlist.

const Playlist = {
  nome: 'Album',
  autor: 'Jorge e Matheus',
  musicas: [
    { nome: 'musica1', duracao: 3 },
    { nome: 'musica2', duracao: 4 },
    { nome: 'musica3', duracao: 2 },
  ],
};

function duracaoMusicas(playlist) {
  return playlist.musicas.reduce((acc, musica) => acc + musica.duracao, 0);
}

console.log(duracaoMusicas(Playlist));
