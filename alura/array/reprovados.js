//Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:
//"Ana", "Marcos", "Maria", "Mauro"
//7, 4.5, 8, 7.5


// Resposta com o For clássico
// const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
// const media = [7, 4.5, 8, 7.5];


// for (let i = 0; i < media.length; i++){
//     if (media[i] < 7){
//         console.log(`O aluno ${alunos[i]} está reprovado `)
//     }
// }

//--------------------------------------------------------------------------------------------
//O filter pode receber 2 parâmetros. o segundo parâmetro não é obrigatório. Nesse caso utilizamos o índice 
//como segundo parâmetro.
//Filter retorna True ou False
//O _ passa para o JavaScript que temos um parâmetro que não vai ser utilizado.


// const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
// const notas = [7, 4.5, 8, 7.5];

// const reprovados = nomes.filter( (aluno, indice) => notas[indice] < 5)

// console.log (`O aluno ${reprovados} está reprovado `);


//-------------------------------------------------------------------------------------------
const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter( (_, indice) => notas[indice] < 5)

console.log (`O aluno ${reprovados} está reprovado `);

