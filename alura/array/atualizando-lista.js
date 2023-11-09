//Crie uma lista de chamada com os seguintes alunos:
//João, Ana, Caio, Lara, Marjorie, Leo.
//Porém, a Ana e o Caio mudaram de escola e o Rodrigo entrou nesta sala. Atualize a lista.

//Splice permite que remova item de qualquer lugar do array e coloque elementos em qualquer lugar dentro do array.
//Splice pede 3 parâmetros: 1º Qual índice vai começar.  2º Quantos indices vou alterar
//3º Vai colocar algum elemento no lugar?
//O Splice pode ser utilizado sem o terceiro parâmetro.

//No caso do exercício vou começar excluindo a Ana que está no índice 1
//Vou excluir 2 alunos: Ana e Caio  e vou colocar o Rodrigo na lista.

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaDeChamada.splice(1,2,"Rodrigo");

console.log(`Uma lista de chamadas: ${listaDeChamada}`);


//listaDEChamada.splice(2,0,"Rodrigo") - Nesse caso inicio no índice 2 que é o Caio,
//não faço nenhuma alteração e incluo o Rodrigo entre a Ana e o Caio. 



