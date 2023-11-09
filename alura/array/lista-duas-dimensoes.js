//Crie uma lista com os seguintes alunos e alunas:
//'João', 'Juliana', 'Caio', 'Ana'

//Crie uma lista com as seguintes médias:
//10, 8, 7.5, 9

//Crie uma lista com 2 dimensões com os nomes e as médias.

//Quando eu coloco para buscar a listaDeNotasEAlunos com [0] [0], eu estou pedindo a primeira lista,
//com o primeiro nome dessa lista.

//Exemplo do exercício sem o Vetor
// const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
// const mediasDosAlunos = [10,7,9,6];

// let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

// console.log (`${listaDeNotasEAlunos [0] [0]} está com a média: ${listaDeNotasEAlunos [1] [0]}`)
//Resposta do console: João está com a média: 10


//-----------------------------------------------------------------------------------------------------------
//Fazendo lista de duas dimensões no Vetor

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10,7,9,6];

//let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

for (let i = 0; i < alunos.length && i < mediasDosAlunos.length; i++){
    console.log (`O aluno(a) ${alunos[i]} está com a média: ${mediasDosAlunos[i]}`)
}


