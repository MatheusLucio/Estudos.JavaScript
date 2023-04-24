/*
Cenário

Uma lan house possui vários computadores, cada um com um número identificador, um sistema operacional 
(Windows ou Linux) e uma lista de softwares instalados. Além disso, há uma lista de clientes cadastrados, 
cada um com um nome, um e-mail e um número de telefone.
 */

// Crie um objeto que represente um computador, com as propriedades id, sistemaOperacional e softwares (um array de strings).
// - id (número)
// - sistemaOperacional (string)
// - softwares (array de strings)

const computador1 = {
  id: 1,
  sistemaOperacional: 'Windows',
  softwares: ['Xbox', 'AutoCad', 'Discord'],
};

const computador2 = {
  id: 2,
  sistemaOperacional: 'Linux',
  softwares: ['Chrome', 'Spotify', 'Steam'],
};

const computador3 = {
  id: 3,
  sistemaOperacional: 'Windows',
  softwares: ['Node', 'Blitz', 'Valorant'],
};

const computador4 = {
  id: 4,
  sistemaOperacional: 'Linux',
  softwares: ['Mozilla', 'Visual Code', 'Discord'],
};

const computador5 = {
  id: 5,
  sistemaOperacional: 'Windows',
  softwares: ['Chrome', 'Visual Code', 'Spotify'],
};

const computador6 = {
  id: 6,
  sistemaOperacional: 'Linux',
  softwares: ['Chrome', 'Instagram'],
};

// Crie um objeto que represente um cliente, com as propriedades nome, email e telefone.
// - id (número)
// - nome (string)
// - email (string)
// - telefone (string)

const cliente1 = {
  id: 1,
  nome: 'João',
  email: 'joao@email.com',
  telefone: '123456789',
};
const cliente2 = {
  id: 2,
  nome: 'Maria',
  email: 'maria@email.com',
  telefone: '123456789',
};
const cliente3 = {
  id: 3,
  nome: 'José',
  email: 'jose@email.com',
  telefone: '123456789',
};
const cliente4 = {
  id: 4,
  nome: 'Carlos',
  email: 'carlos@email.com',
  telefone: '123456789',
};
const cliente5 = {
  id: 5,
  nome: 'Ana',
  email: 'ana@email.com',
  telefone: '123456789',
};
const cliente6 = {
  id: 6,
  nome: 'Paula',
  email: 'paula@email.com',
  telefone: '123456789',
};

// --------------------------------------------------------------------------------------------------------------

// Fase 1

// Crie um array de objetos que representam os computadores da lan house.

function exibirArray(computador1){
  return computador1
}

console.log(exibirArray())

console.log('------------------------------------------')
// Crie uma função que receba um array de computadores como argumento e retorne um novo array contendo apenas os computadores com sistema operacional Windows.

function exibirWindows(computador1){
  

}

console.log('------------------------------------------')
// Crie uma função que receba um array de computadores como argumento e retorne um novo array contendo apenas os computadores com pelo menos um software instalado.


console.log('------------------------------------------')
// Crie uma função que receba um array de computadores como argumento e retorne um novo array contendo apenas os computadores com pelo menos dois softwares instalados.


console.log('------------------------------------------')
// Crie um array de objetos que representam os clientes da lan house.


console.log('------------------------------------------')
// Crie uma função que receba um array de clientes como argumento e retorne um novo array contendo apenas os clientes com nome começando com a letra "A".


console.log('------------------------------------------')
// Crie uma função que receba um array de clientes como argumento e retorne um novo array contendo apenas os clientes com pelo menos um número de telefone cadastrado.


console.log('------------------------------------------')
// Crie uma função que receba um array de clientes como argumento e retorne um novo array contendo apenas os clientes com pelo menos um e-mail válido (ou seja, que contém "@" e ".").


console.log('------------------------------------------')
// Crie uma função que receba um array de computadores e um número como argumentos e retorne um novo array contendo apenas os computadores com ID menor do que o número fornecido.


console.log('------------------------------------------')
// Crie uma função que receba um array de clientes e um objeto cliente como argumentos e adicione o cliente ao array de clientes.


console.log('------------------------------------------')
// Crie uma função que receba um array de computadores e um objeto computador como argumentos e adicione o computador ao array de computadores.


console.log('------------------------------------------')
// Crie uma função que receba um array de clientes e um objeto cliente como argumentos e remova o cliente do array de clientes.


console.log('------------------------------------------')
// Crie uma função que receba um array de computadores e um objeto computador como argumentos e remova o computador do array de computadores.


console.log('------------------------------------------')
// Crie uma função que receba um array de clientes e um objeto cliente como argumentos e retorne true se o cliente já está cadastrado e false caso contrário.


console.log('------------------------------------------')
// Crie uma função que receba um array de computadores e um objeto computador como argumentos e retorne true se o computador já está cadastrado e false caso contrário.


console.log('------------------------------------------')
// Crie uma função que receba um array de clientes e um objeto cliente como argumentos e atualize as informações do cliente (nome, e-mail e telefone).


console.log('------------------------------------------')
// Crie uma função que receba um array de computadores e um objeto computador como argumentos e atualize as informações do computador (sistema operacional e lista de softwares).


console.log('------------------------------------------')
// Crie uma função que receba um array de clientes e um objeto cliente como argumentos e retorne um novo array contendo todos os clientes, exceto o cliente fornecido como argumento.


console.log('------------------------------------------')
// Crie um objeto "computador1" com as propriedades "marca", "modelo" e "memoriaRAM", e atribua valores a cada uma delas.


console.log('------------------------------------------')
// Crie um objeto "cliente1" com as propriedades "nome", "email" e "idade", e atribua valores a cada uma delas.


console.log('------------------------------------------')
// Crie um array "computadores" e adicione os objetos "computador1", "computador2" e "computador3" a ele.


console.log('------------------------------------------')
// Crie um array "clientes" e adicione os objetos "cliente1", "cliente2" e "cliente3" a ele.


console.log('------------------------------------------')
// Acesse a propriedade "marca" do objeto "computador1".


console.log('------------------------------------------')
// Acesse a propriedade "email" do objeto "cliente1".


console.log('------------------------------------------')
// Adicione um novo objeto "computador4" ao array "computadores".


console.log('------------------------------------------')
// Adicione um novo objeto "cliente4" ao array "clientes".


console.log('------------------------------------------')
// Altere a propriedade "memoriaRAM" do objeto "computador1".


console.log('------------------------------------------')
// Remova o objeto "cliente2" do array "clientes".



console.log('------------------------------------------')
// Fase 2

// Médios

// Crie um objeto que represente um funcionário da lan house, com as propriedades nome, cargo e salário.
// Crie um array de objetos que representam os funcionários da lan house.
// Crie uma função que receba um array de funcionários como argumento e retorne o salário total da lan house (soma dos salários de todos os funcionários).
// Crie uma função que receba um array de funcionários como argumento e retorne o funcionário com o maior salário.
// Crie uma função que receba um array de funcionários como argumento e retorne um novo array contendo apenas os funcionários que têm salário menor do que 2000.

// Difíceis
//
// Crie um objeto que represente um pedido de um cliente, com as propriedades id, data, hora, computador utilizado e tempo de uso (em minutos).
// Crie um array de objetos que representam os pedidos dos clientes.
// Crie uma função que receba um array de pedidos como argumento e retorne o total faturado pela lan house (soma do valor de todos os pedidos).
// Crie uma função que receba um array de pedidos como argumento e retorne um novo array contendo apenas os pedidos feitos em um determinado dia (a partir da data fornecida como argumento).
// Crie uma função que receba um array de pedidos como argumento e retorne um novo array contendo apenas os pedidos feitos por um determinado cliente (a partir do nome fornecido como argumento).
// Crie uma função que receba um array de pedidos como argumento e retorne um novo array contendo apenas os pedidos feitos em um determinado computador (a partir do ID fornecido como argumento).
// Crie uma função que receba um array de pedidos como argumento e retorne um novo array contendo apenas os pedidos com tempo de uso maior do que 30 minutos.
// Crie uma função que receba um array de pedidos como argumento e retorne um objeto com as informações dos pedidos agrupadas por computador (ou seja, um objeto com as propriedades "1", "2", "3", etc., cada uma com um array de pedidos feitos no respectivo computador).
// Crie uma função que receba um array de pedidos como argumento e retorne um objeto com as informações dos pedidos agrupadas por data (ou seja, um objeto com as propriedades "2022-01-01", "2022-01-02", "2022-01-03", etc., cada uma com um array de pedidos feitos na respectiva data).
// Crie uma função que receba um array de pedidos e um objeto pedido como argumentos e adicione o pedido ao array de pedidos.
// Crie uma função que receba um array de pedidos e um objeto pedido como argumentos e remova o pedido do array de pedidos.
// Crie uma função que receba um array de pedidos e um objeto pedido como argumentos e atualize as informações do pedido (data, hora, computador utilizado e tempo de uso).
// Crie uma função que receba um array de pedidos e retorne o computador mais utilizado (ou seja, ocomputador que aparece em mais pedidos).
// Crie uma função que receba um array de pedidos e retorne a média de tempo de uso dos computadores.
// Crie uma função que receba um array de pedidos e retorne o total de tempo de uso de cada computador (ou seja, um objeto com as propriedades "1", "2", "3", etc., cada uma com o total de tempo de uso do respectivo computador).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por e-mail (ou seja, um objeto com as propriedades "joao@gmail.com", "maria@hotmail.com", etc., cada uma com um array de pedidos feitos pelo respectivo cliente).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por telefone (ou seja, um objeto com as propriedades "111111111", "222222222", etc., cada uma com um array de pedidos feitos pelo respectivo cliente).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por data de cadastro (ou seja, um objeto com as propriedades "2022-01-01", "2022-01-02", "2022-01-03", etc., cada uma com um array de pedidos feitos pelos respectivos clientes cadastrados na respectiva data).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos feitos por clientes que têm mais de um pedido registrado.
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos entre as 10:00 e as 18:00.
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por hora do dia (ou seja, um objeto com as propriedades "00:00", "01:00", "02:00", etc., cada uma com um array de pedidos feitos na respectiva hora).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos com ID menor do que um número fornecido como argumento.
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos feitos por clientes com nome começando com a letra "A".
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos feitos em um determinado mês (a partir do número do mês fornecido como argumento).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por mês (ou seja, um objeto com as propriedades "01", "02", "03", etc., cada uma com um array de pedidos feitos no respectivo mês).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos feitos por clientes com telefone cadastrado.
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos com tempo de uso maior do que um número fornecido como argumento.
// Crie uma função quereceba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por cliente (ou seja, um objeto com as propriedades "joao@gmail.com", "maria@hotmail.com", etc., cada uma com um array de pedidos feitos pelo respectivo cliente).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos feitos por clientes que não possuem telefone cadastrado.
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por computador e por hora do dia (ou seja, um objeto com as propriedades "1_00:00", "1_01:00", "1_02:00", "2_00:00", "2_01:00", "2_02:00", etc., cada uma com um array de pedidos feitos no respectivo computador e na respectiva hora).

// Desafios

// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por hora do dia e por cliente (ou seja, um objeto com as propriedades "joao@gmail.com_00:00", "joao@gmail.com_01:00", "joao@gmail.com_02:00", "maria@hotmail.com_00:00", "maria@hotmail.com_01:00", "maria@hotmail.com_02:00", etc., cada uma com um array de pedidos feitos pelo respectivo cliente na respectiva hora).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos em computadores próximos (com ID consecutivos, por exemplo).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por cliente e por computador (ou seja, um objeto com as propriedades "joao@gmail.com_1", "joao@gmail.com_2", "joao@gmail.com_3", "maria@hotmail.com_1", "maria@hotmail.com_2", "maria@hotmail.com_3", etc., cada uma com um array de pedidos feitos pelo respectivo cliente no respectivo computador).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos feitos em um determinado período de tempo (a partir da data e hora inicial e final fornecidas como argumentos).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por dia da semana (ou seja, um objeto com as propriedades "domingo", "segunda", "terca", etc., cada uma com um array de pedidos feitos no respectivo dia da semana).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por número de pedidos realizados (ou seja, um objeto com as propriedades "1 pedido", "2 pedidos", "3 pedidos", etc., cada uma com um array de clientes que realizaram o respectivo número de pedidos).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos em computadores com mais de 10 minutos de uso naquele dia.
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos em horários de pico (por exemplo, entre as 18:00 e as 22:00 nos dias de semana).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por tempo total de uso (ou seja, um objeto com as propriedades "joao@gmail.com_10 minutos", "joao@gmail.com_20 minutos", "joao@gmail.com_30 minutos", "maria@hotmail.com_10 minutos", "maria@hotmail.com_20 minutos", "maria@hotmail.com_30 minutos", etc., cada uma com um array de clientes que utilizaram a lan house por um determinado tempo total).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos feitos por clientes que possuem um determinado domínio de e-mail (por exemplo, "@gmail.com").
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos computadores agrupadas por tempo total de uso (ou seja, um objeto com as propriedades "1_10 minutos", "1_20 minutos", "1_30 minutos", "2_10 minutos", "2_20 minutos", "2_30 minutos", etc., cada uma com um array de pedidos realizados no respectivo computador por um determinado tempo total).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos por clientes que realizaram pedidos em dias diferentes (por exemplo, realizaram pedidos tanto na segunda-feira quanto na quarta-feira).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por computador e por cliente (ou seja, um objeto com as propriedades "1_joao@gmail.com", "1_maria@hotmail.com", "2_joao@gmail.com", "2_maria@hotmail.com", "3_joao@gmail.com", "3_maria@hotmail.com", etc., cada uma com um array de pedidos realizados pelo respectivo cliente no respectivo computador).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos por clientes que têm mais de um endereço de e-mail cadastrado.
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por tempo total de uso (ou seja, um objeto com as propriedades "joao@gmail.com_10 minutos", "joao@gmail.com_20 minutos", "joao@gmail.com_30 minutos", "maria@hotmail.com_10 minutos", "maria@hotmail.com_20 minutos", "maria@hotmail.com_30 minutos", etc., cada uma com um array de pedidos realizados pelos respectivos clientes por um determinado tempo total).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por semana do ano (ou seja, um objeto com as propriedades "semana 1", "semana 2", "semana 3", etc., cada uma com um array de pedidos realizados na respectiva semana do ano).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por tempo médio de uso (ou seja, um objeto com as propriedades "joao@gmail.com_10 minutos", "joao@gmail.com_20 minutos", "joao@gmail.com_30 minutos", "maria@hotmail.com_10 minutos", "maria@hotmail.com_20 minutos", "maria@hotmail.com_30 minutos", etc., cada uma com um array de clientes que utilizaram a lan house por um determinado tempo médio).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por cidade (ou seja, um objeto com as propriedades "São Paulo", "Rio de Janeiro", "Belo Horizonte", etc., cada uma com um array de clientes que residem na respectiva cidade).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos por clientes que têm um determinado número mínimo de horas de uso da lan house (por exemplo, mais de 10 horas de uso).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por dia e por computador (ou seja, um objeto com as propriedades "01/01/2022_1", "01/01/2022_2", "01/01/2022_3", "02/01/2022_1", "02/01/2022_2", "02/01/2022_3", etc., cada uma com um array de pedidos realizados no respectivo computador na respectiva data).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos em computadores que foram desligados ao menos uma vez durante o dia.
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por dia da semana e por hora do dia (ou seja, um objeto com as propriedades "domingo_00:00", "domingo_01:00", "domingo_02:00", "segunda_00:00", "segunda_01:00", "segunda_02:00", etc., cada uma com um array de pedidos realizados pelos respectivos clientes na respectiva hora e no respectivo dia da semana).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos feitos por clientes que têm um determinado número mínimo de pedidos realizados (por exemplo, mais de 5 pedidos).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos pedidos agrupadas por mês do ano (ou seja, um objeto com as propriedades "janeiro", "fevereiro", "março", etc., cada uma com um array de pedidos realizados no respectivo mês).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos feitos por clientes que têm um endereço de e-mail com uma determinada extensão (por exemplo, ".com").
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos computadores agrupadas por tempo médio de uso (ou seja, um objeto com as propriedades "1_10 minutos", "1_20 minutos", "1_30 minutos", "2_10 minutos", "2_20 minutos", "2_30 minutos", etc., cada uma com um array de pedidos realizados no respectivo computador por um determinado tempo médio).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos em computadores com uma determinada quantidade mínima de memória RAM (por exemplo, mais de 8 GB).
// Crie uma funçã que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por tempo médio de uso (ou seja, um objeto com as propriedades "joao@gmail.com_10 minutos", "joao@gmail.com_20 minutos", "joao@gmail.com_30 minutos", "maria@hotmail.com_10 minutos", "maria@hotmail.com_20 minutos", "maria@hotmail.com_30 minutos", etc., cada uma com um array de clientes que utilizaram a lan house por um determinado tempo médio).
// Crie uma função que receba um array de pedidos e retorne um objeto com as informações dos clientes agrupadas por horário preferido (ou seja, um objeto com as propriedades "manhã", "tarde", "noite", etc., cada uma com um array de clientes que preferem utilizar a lan house no respectivo horário).
// Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas os pedidos que foram feitos em dias em que a temperatura média foi superior a uma determinada temperatura (por exemplo, mais de 30°C).
