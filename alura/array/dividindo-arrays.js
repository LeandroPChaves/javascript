//Exercício dividindo os alunos em duas salas.
//Slice divide o vetor. devemos informar o ínidice que irá iniciar o corte e até onde queremos ir.
//Quando não coloco a segunda condição, ele vai até o final do array.

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log (`Alunos da sala 1: ${sala1}`)
console.log (`Alunos da sala 2: ${sala2}`)

