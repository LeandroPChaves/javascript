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

// let inicio = 0;
// let atual;

// for (let vezes = 0; vezes < precosLivros.length; vezes++){
//     for (let pos = inicio; pos < (precosLivros.length - 1); pos++){
//        if (precosLivros[pos].titulo > precosLivros[pos + 1].titulo) {
//         atual = precosLivros[pos];
//         precosLivros[pos] = precosLivros[pos + 1];
//         precosLivros[pos + 1] = atual;
//        }
//     }
// }

// console.log (precosLivros);

//-------------------------------------------------------------------
//Utilizando o sort

precosLivros.sort((a,b) => {
    if (a.titulo < b.titulo){
        return -1
    } else {
        return 0
    }
})

console.log (precosLivros);