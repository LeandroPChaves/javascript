function inverter(palavra){
    let invertendo = "";
    for (let i = palavra.length - 1; i > -1; i--){
        invertendo = invertendo + palavra[i];
    }
    return invertendo;
}

console.log (inverter ("edvan"));


