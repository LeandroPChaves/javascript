//Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada
//para fornecer a outros departamentos do banco

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["5591235498", "5521988743124"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    },
     {
        nome: "Samia Maria", 
        parentesco: "filha", 
        dataNasc: "04/01/2014"
    }],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    }
}

let relatorio="";

//Estrutura For In utilizada em objeto. criada a let info in(dentro) do objeto (nesse exercício, cliente).
//Para cada informação dentro do objeto cliente.

for (let info in cliente){
//relatorio += `${info}` //Retorna os nomes da chave em uma única string.
//relatorio += ` - ${cliente[info]}` // Retorna os valores da chave, porém não retorna o objeto que está dentro do outro objeto e retorna a função sem o nome.
//typeof (tipo de), Se for objeto ou função. O Java Script colocou o Array como Objeto.
  if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
    continue // continue, ou seja não faça nada e vá para o else.
    } else {
        relatorio += `
        ${info}: ${cliente[info]}
        `;
    }
}


console.log (relatorio);

