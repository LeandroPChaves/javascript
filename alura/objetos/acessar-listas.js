//Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes
//gerada pelo sistema e printar o resultado na tela.

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

//--------------------------------------------------------------------------------------------
// Mostra no console somente o nome. Retorna André.
//console.log (cliente[chaves[0]]);

//--------------------------------------------------------------------------------------------
//Retorna todos os valores do objeto utilizando o forEach.
//Exemplo que retorna:
    // nome: "André",
    // idade: 36,
    // cpf: "12543652266",
    // email: "andre@email.com"

// chaves.forEach((dadosCliente) => {
//     console.log (cliente)
// })

//--------------------------------------------------------------------------------------------
//Retorna somente os valores sem aparecer os índices.
chaves.forEach(info=>console.log(cliente[info]));





