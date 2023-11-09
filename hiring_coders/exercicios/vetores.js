//Programa que recebe um vetor vazio e insere 10 números no mesmo.

//Formato padrão

// let insiraVetor = new Array ();
// let num;

// for (let i = 0; i < 10; i++){
//   num = prompt("Escreva um número")
//   insiraVetor[i] = num
//   alert (`O numero digitado no vetor é: ${insiraVetor[i]}`)
// }

// alert (`Os números dos vetores são: ${insiraVetor}`)

//-------------------------------------------------------------------------------------------------------------
//Formato com função

// function incluirVetor(){
//     let insiraVetor = new Array ();
//     let num;

//     for (let i = 0; i < 10; i++){
//         num = prompt("Escreva um número")
//         insiraVetor[i] = num
//     }

//     document.write (`Os números dos vetores são: ${insiraVetor}`)
// }

// incluirVetor()

//--------------------------------------------------------------------------------------------------------------
//Formato utilizando Push

let insiraVetor = [];
let num;

for (let i = 0; i < 10; i++){
    num = prompt("Informe um número")
    insiraVetor.push(num)

}

alert (`Os números dos vetores são: ${insiraVetor}`);

