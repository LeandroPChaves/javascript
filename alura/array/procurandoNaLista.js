// // Crie uma função que recebe como argumento o nome de um aluno. Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.


// // Solução usando o For
// const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
// const mediasDosAlunos = [10,7,9,6];
// let nomeAluno;
// let mediaAluno;


// function procurarAluno(aluno){
//     for (let i = 0 ; i < alunos.length; i++){
//        if (aluno == alunos[i]){
//          nomeAluno = true;
//          mediaAluno = mediasDosAlunos[i];
//          break
//        } else {
//          nomeAluno = false;
//        }
//     }

//     if (nomeAluno) {
//         console.log (`O (a) ${aluno} está na lista com a média ${mediaAluno}`);
//     } else {
//         console.log (`O (a) ${aluno} não está na lista`);
//     }
// }

// procurarAluno("Leandro");


//--------------------------------------------------------------------
//Solução usando tabela de duas dimensões

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10,7,9,6];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota (aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}.`);
    } else {
        console.log ("Aluno não encontrado");
    }
}
 exibeNomeENota ("Ana");

