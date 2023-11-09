//Calcular a média das seguintes notas:
//10, 6.5, 8 e 7.5

//-----------------------------------------------------------
//Usando o For

// const notas = new Array(10,6.5,8,7.5);
// let soma = 0;

// for (let i = 0; i < notas.length; i++){
//   soma += notas[i];
// }

// let media = (soma / notas.length);
// console.log(media);

//-----------------------------------------------------------

//Usando o For Each, que chamamos de callback. O parametro do foreach não é um dado.
// O parametro que passamos é outra função. O forEach é uma função que chama outra função.

// const notas = new Array(10,6.5,8,7.5);
// let soma = 0;

// notas.forEach( nota =>{
//   soma += nota;
// })

// let media = (soma / notas.length);
// console.log(media);

//------------------------------------------------------------
// Usando o For Of

  const notas = new Array (10,6.5,8,7.5);

  let soma = 0;

  for (let elemento of notas){
     soma += elemento;
  }

  let media = (soma/notas.length)

   console.log (media)