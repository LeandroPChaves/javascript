//Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["5591235498", "5521988743124"]
}

//Criando a Sara como dependente do André.
cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

//Alterando o nome da dependente Sara para Sarai.
cliente.dependentes.nome = "Sarai";

console.log (cliente);





