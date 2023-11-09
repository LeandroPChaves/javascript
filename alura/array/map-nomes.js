//Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas:

//Usando toUpperCase
// let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// nomes.forEach((nomes) => {
//     console.log (nomes.toUpperCase())
// })

//----------------------------------------------------------------------------------

// let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// let nomesMauisculos = nomes.map((nomes) => nomes.toUpperCase() );

// console.log (nomesMauisculos);

//---------------------------------------------------------------------------------

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesMauisculos = nomes.map ((nome) => {
  return nome.toUpperCase();
})

console.log (nomesMauisculos);