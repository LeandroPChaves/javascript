//Acessar um objeto com informações de um cliente e exibir essas informações no console.

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com"
}

console.log (`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos. `);
console.log (cliente.cpf.substring(0,3));


