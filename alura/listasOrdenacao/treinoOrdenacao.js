const listaLivros = [{
    titulo: "Go",
    preco: 45
},
{
    titulo: "C++",
    preco: 35
},
{
    titulo: "Java",
    preco: 30
},
{
    titulo: "PHP",
    preco: 15
},
{
    titulo: "Elixir",
    preco: 50
},
{
    titulo: "Rust",
    preco: 22
},
{
    titulo: "Scala",
    preco: 40
},
{
    titulo: "Ruby",
    preco: 28
},
{
    titulo: "JavaScript",
    preco: 25
},
{
    titulo: "C#",
    preco: 33
},
{
    titulo: "Python",
    preco: 20
}
]



// Criando uma função para pegar o menor valor do array de objeto
function menorValor(array){
let numAtual = 0;
let menor = 0;
for (let i = numAtual; i < array.length; i++){
    if (array[i].preco < array[numAtual].preco){
        menor = array[i];
        array[numAtual] = menor;
    }
}
     return(menor)
}

//-----------------------------------------------------------------------
//Outra forma de pegar o menor valor
// let atual = 0;
// let menor = 0;

// console.log (livraria);

// for (let i = 0; i < livraria.length; i++){
//     if (livraria[i].preco > livraria[atual].preco){
//      menor = livraria[i]
//      atual = i;
//     }
// }

// console.log (menor);


//Menor valor do Objeto utilizando o Foreach
//let atual = 0;

// listaLivros.forEach((lista) =>{
//     if (lista.preco < listaLivros[atual].preco){
//        menor = lista;
//        listaLivros[atual] = menor;
//     } 
// })

// console.log(menor);


//Ordenando o objeto do menor para o maior
//let atualizando;

// for (let i = 0; i < listaLivros.length; i++){
//     for (let pos = atual; pos < listaLivros.length - 1; pos++){
//         if (listaLivros[pos].preco > listaLivros[pos + 1].preco){
//             atualizando = listaLivros[pos];
//             listaLivros[pos] = listaLivros[pos + 1];
//             listaLivros[pos + 1] = atualizando;
//         }
//     } 
// }

// console.log (listaLivros);



