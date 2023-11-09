//Percorrer um objeto, verificar se existe a chave "dependentes" e, caso exista, enviar uma mensagem de oferta de seguro.

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

 //const propsClientes = Object.keys(cliente); // traz um array com todas as chaves do cliente. Object.Keys = Lista de chaves
 
 function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj); //lista de chaves
    
    // verificar se tem incluso a chave dependente. includes = incluso
    if (propsClientes.includes("dependentes")){ 

        console.log(`Oferta de seguro de vida para ${obj.nome}`); 
        // retorna a oferta de seguro para o cliente que tem dependente.
    }
 }

 oferecerSeguro(cliente);

 //console.log(Object.values(cliente)) Retorna os valores dentro das chaves do objeto. Não retorna a chaves como o Object.Keys e sim o valor de dentro das chaves.

 //object.entries(cliente) - Outra estrutura de array
 
 