const {edGalho, edFolha} = require('./arrays');

let indexGalho = 0;
let indexFolha = 0;
let novoArray = new Array();

while (indexGalho < edGalho.length && indexFolha < edFolha.length){
    if (edGalho[indexGalho].preco < edFolha[indexFolha].preco){
        novoArray.push(edGalho[indexGalho])
        indexGalho++
    } else {
        novoArray.push(edFolha[indexFolha])
        indexFolha++
    }

}

while (indexGalho < edGalho.length){
    novoArray.push(edGalho[indexGalho])
    indexGalho++
}

while (indexFolha < edFolha.length){
    novoArray.push(edFolha[indexFolha])
    indexFolha++
}

console.log(novoArray);