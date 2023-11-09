//Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

const salaJs = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => 
    atual + acumulador,0)
    return somaDasNotas/notasDaSala.length
}

console.log (`Média das salas de JavaScript ${mediaSala(salaJs)}`);
console.log (`Média das salas de Java ${mediaSala(salaJava)}`);
console.log (`Média das salas de Python ${mediaSala(salaPython)}`);

