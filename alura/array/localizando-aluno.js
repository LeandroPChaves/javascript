//Crie uma função que recebe como argumento o nome de um aluno.
//Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
//Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
//------------------------------------------------------------------------------------------------------------

//Minha resolução utilizando 2 vetores separados sem juntá-los em uma variável

// const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
// const mediasDosAlunos = [10,7,9,6];

// let nome = "Juliana"
// let nomeExiste;
// let mediaExiste;

// function encontrarAluno(nome){
//    for (let i = 0; i < alunos.length; i++){
//        if (nome === alunos[i]){
//          nomeExiste = true;
//          mediaExiste = mediasDosAlunos[i]
//          break
//        } else {
//          nomeExiste = false;
//        }
//    }
//    if (nomeExiste === true){
//      return (`O nome ${nome} existe. Sua média é: ${mediaExiste}.`)
//    } else {
//      return (`O nome ${nome} não existe`)
//    }
// }

// console.log (encontrarAluno(nome));

//--------------------------------------------------------------------------------------------------------------

//Resposta com vetor de duas dimensões e utilizando o método includes(Se o nome está incluso) e 
//indexOf (Retorna o número do índice que o nome está)   includes retorna booleano (true ou false)

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10,7,9,6];
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];


const alunoExistente = (nome) => {
    if (listaDeNotasEAlunos[0].includes(nome)){
        let indice = listaDeNotasEAlunos[0].indexOf(nome);
        return (`O ${listaDeNotasEAlunos[0] [indice]} está com a média ${listaDeNotasEAlunos[1] [indice]}`)
    } else {
        return (`O (a) ${nome} não foi encontrado.`)
    }
}

console.log (alunoExistente("Ana"));


