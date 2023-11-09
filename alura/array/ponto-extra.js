//Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto em suas notas:
//10, 9, 8, 7, 6

// const notas = [10,9,8,7,6]

// notas.forEach((notas) => {
//    notas = notas + 1;
//    console.log (notas)
// })

//------------------------------------------------------------------------------------

//Utilizando o Map. O ForEach executa o que está dentro do bloco. não retorna nenhum dado.
//Tudo que a função do Map faz é retornada com uma nova Array.
//Map é ideal para reescrever arrays.

// const notas = [10,9,8,7,6];
// const notasAtualizadas = notas.map( notas => notas == 10 ? notas : ++notas);
// console.log (notasAtualizadas);

//-------------------------------------------------------------------------------

const notas = [10,9,8,7,6];

const notasAtualizadas = notas.map ((nota) => {
   return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log (notasAtualizadas);
