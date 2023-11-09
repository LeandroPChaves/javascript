//Verificar a melhor forma de agregar a informação de um novo dependente ao objeto cliente.

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["5591235498", "5521988743124"]
}

cliente.dependentes = [{
    nome: "Sara Silva",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}]

//Acrescentar uma dependente no objeto
cliente.dependentes.push({nome: "Samia Maria", parentesco: "filha", dataNasc: "04/01/2014"})

//Buscar a dependente com a data de nascimento = 04/01/2014
const filhaNova = cliente.dependentes.filter (dependente => dependente.dataNasc === "04/01/2014");

console.log (filhaNova)

// Para identificar somente o retorno do nome, como estamos em um array e objeto, precisamos mostrar o índice do 
//array com [] e o objeto com o .

console.log (`O nome da filha mais nova é: ${filhaNova[0].nome}`);

