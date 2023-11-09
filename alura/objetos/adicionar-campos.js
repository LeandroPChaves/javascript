//Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores.

// const cliente = {
//     nome: "André",
//     idade: 36,
//     cpf: "12543652266",
//     email: "andre@email.com"
// }

// cliente.fone = "9242525252"

// console.log (cliente["fone"]);


//Adicionar array de objeto com push
const cliente = [{
    nome: "André",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    dependentes: {
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011" 
    } 
}]



cliente.push({
    nome: "kkkkkkk",
    idade: 39,
    cpf: "1254366666",
    email: "kkkkkkk@email.com",
    dependentes: {
        nome: "Samia Maria", 
        parentesco: "filha", 
        dataNasc: "04/01/2014"
    }
})

cliente.push({
    nome: "bbbbbbbbb",
    idade: 15,
    cpf: "0000001111",
    email: "aaaaaaaaaa@email.com",
    dependentes: {
        nome: "fgrtrgrtreg",
        parentesco: "filho",
        dataNasc: "01/01/2001"
    }
})

//Executar filtros com Filter
const nascimento = cliente.filter(dataNascimento => dataNascimento.dependentes.dataNasc === "04/01/2014");

console.log (nascimento)

const parente = cliente.filter (parenti => parenti.dependentes.parentesco === "filho")

console.log (parente)















 



