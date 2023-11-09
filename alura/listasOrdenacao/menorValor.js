const precosLivros = [
    {
        titulo: "JavaScript",
        preco: 25.00
    },
    {
        titulo: "PHP",
        preco: 15.00
    },
    {
        titulo: "Java",
        preco: 30.00
    },
    {
        titulo: "Elixir",
        preco: 50.00
    },
    {
        titulo: "Go",
        preco: 45.00
    },
    {
        titulo: "Python",
        preco: 20.00
    }
]

function menorValor(arrProdutos, posicaoInicial){
let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato;
}
    
module.exports = menorValor;