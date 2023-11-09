//exercicio para ordenar o array de objeto do menor para o maior fazendo na mão com troca entre os índices

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

let inicio = 0;
let atual;

for (let vezes = 0; vezes < precosLivros.length; vezes++){
  for (let pos = inicio; pos < (precosLivros.length - 1); pos++){
    if (precosLivros[pos].preco > precosLivros[pos + 1].preco){
        atual = precosLivros[pos]
        precosLivros[pos] = precosLivros[pos + 1]
        precosLivros[pos + 1] = atual;
    }
  }
}

console.log (precosLivros);

//exercicio para ordenar o array de objeto do menor para o maior utilizando o sort

// precosLivros.sort ((a, b) => {
//    if (a.preco < b.preco) {
//      return -1;
//    } else {
//      return 0; // ou return true
//    }
// });

// console.log(precosLivros)