var elementos = [];
var topo = -1;
const tamanho = 9;

function push(num){
    if (topo < tamanho){
        topo = topo + 1;
        elementos[topo] = num;
    } else{
        console.log ("Pilha está cheia");
    }
}

function pop(){
    if (topo != -1){
        // let num = elementos[topo];
        topo = topo - 1;
        elementos = elementos.pop();
        // return num;
    } else{
        console.log ("Pilha esta vazia!")
    }
}

function estaVazia(){
    return topo == -1;
}

push(10);
push(20);
push(30);
// push(40);
// push(50);
// push(60);
// push(70);
// push(80);
// push(90);
// push(91);
// push(92);
    
console.log(elementos);

console.log(pop());
console.log(pop());
console.log(pop());


var numDecimal = 10;
var resto;

console.log("Hora de empilhar....")
while (numDecimal != 0){
    resto = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = parsInt(numDecimal / 2);
}
console.log("Desempilhando tudo....")
while (!estaVazia()){
    console.log(pop());
}





function pop(){
    if (topo >= 0){
        topo = topo - 1;
        elementos.pop();
        console.log(elementos)
    } else{
        console.log ("Pilha esta vazia!")
    }
}




// var vetores = [10, 20, 30, 40, 50];


// function busca(num){
//    for (var i = 0; i < 5; i++){
//        if (num == vetores[i]){
//        return (i)
//        }
//    }
//    return (-1) 
// }

