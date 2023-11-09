// var vetor = [];
// var i = 0;
// var quantmax = 10;

// function fazvetor(num){
//     if (i < quantmax) {
//         vetor[i] = num;
//         i = i + 1; 
//     } else {
//         console.log ("Não há espaço")
//     }
//   console.log(vetor)
// }


var valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function ordena(){
var inicio = 1
var fim = 10
var troca = 0
for (var vezes = 0; vezes < 10; vezes++){
for (i = 0; i < fim; i++){
  if (valores[i] > valores[i+ 1]){
      troca = valores[i]
      valores[i] = valores[i + 1]
      valores[i + 1] = troca
  }
}
console.log(valores)
}
}