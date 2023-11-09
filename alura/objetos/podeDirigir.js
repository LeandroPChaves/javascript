const familia = [{
    nome: "Leandro",
    idade: 39,
    parentesco: "pai",
    saldo: 50
    },
   {    
    nome: "Andréia",
    idade: 32,
    parentesco: "mâe", 
    saldo: 100
    
   },
   {
     nome: "Anthony",
     idade: 13,
     parentesco: "filho",
     saldo: 800
     
    },
    { 
     nome: "Calebe",
     idade: 7,
     parentesco: "filho",
     saldo: 300

     
    }]
    
familia.forEach((dadosFamilia) => {
    if (dadosFamilia.idade > 17){
        console.log (`${dadosFamilia.nome} pode dirigir`)
    } else {
        console.log (`${dadosFamilia.nome} não pode dirigir`)
    }
})


const meusdados = {
    nome: "Leandro",
    idade: 39,
    parentesco: "pai",
    saldo: 500,
    diferenca: function (valor){
        if (valor < this.saldo){
            this.saldo -= valor
            console.log (`${this.saldo}`)
        } else {
            console.log ("sem dinheiro, tá ferrado.")
        }
    }
}

meusdados.diferenca(100000);