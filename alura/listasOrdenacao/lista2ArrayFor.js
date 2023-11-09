// Pegar dos arrays de objetos que estão constidos no arquivo arrays.js e ordenar do menor para o maior utilizando o For.

const {edGalho, edFolha} = require ('./arrays');
let arrayFinal = new Array();
let iGalho = 0;
let iFolha = 0;

for (let i = 0; iGalho < edGalho.length && iFolha < edFolha.length; i++){

        
    if (edGalho[iGalho].preco < edFolha[iFolha].preco){
        arrayFinal.push(edGalho[iGalho]);
        iGalho++;
    } else {
        arrayFinal.push(edFolha[iFolha]);
        iFolha++;
    }
    

}


while (iGalho < iFolha - 1){
    arrayFinal.push(edGalho[iGalho]);
    iGalho++
} 

while (iFolha < iGalho - 1){
    arrayFinal.push(edFolha[iFolha]);
    iFolha++
}

console.log (arrayFinal);