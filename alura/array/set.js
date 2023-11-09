//Retirar os nomes repetidos do Array
//Crio o Set que não permite repetição e depois coloco em um array usando ... para criar um array sem clonar o Set

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log (nomesAtualizados)