// Pegando um elemento no id com query selector

// const somar = document.querySelector("#somar");
// const subtrair = document.querySelector("#subtrair");
// const braco = document.querySelector("#braco");

// function manipulaDados (operacao){
//     if (operacao === "subtrair"){
//         braco.value = parseInt(braco.value) - 1;
//     } else {
//         braco.value = parseInt(braco.value) + 1;
//     }
// }

// somar.addEventListener("click", () => {
//     manipulaDados("somar");
// });

// subtrair.addEventListener("click", () => {
//     manipulaDados("subtrair");
// });

//Fim do programa com os códigos reaproveitáveis
//-------------------------------------------------------------------------------------------------

// somar.addEventListener("click", (evento) => {
//     braco.value = parseInt(braco.value) + 1;
// });

// subtrair.addEventListener("click", (evento) =>{
//     braco.value = parseInt(braco.value) - 1;
// });

// códigos feitos antes de reaproveitar na funcção Manipula Dados
//-------------------------------------------------------------------------------------------------

// // Programa que eu fiz sozinho. está rodando com o Query Selector All e array para três classes.

// let botaoVetorMenos = document.querySelectorAll(".controle-ajuste-menos");
// let botaoVetorMais = document.querySelectorAll(".controle-ajuste-mais");
// let inputVetor = document.querySelectorAll(".controle-contador");



// for (let i = 0; i < botaoVetorMenos.length && i < botaoVetorMais.length && i < inputVetor.length; i++){
//    let contador = inputVetor[i];
//    let valorMais = botaoVetorMais[i];
//    let valorMenos = botaoVetorMenos[i];

//       valorMais.addEventListener("click", () => {
//          contador.value = parseInt(contador.value) + 1;
//       })

//       valorMenos.addEventListener("click", () => {
//          contador.value = parseInt(contador.value) - 1;
//       })
// }

//-------------------------------------------------------------------------------------------------

// Programa com o Array utilizando For Each



// const controle = document.querySelectorAll(".controle-ajuste");

// controle.forEach ((elemento) => {
//   elemento.addEventListener("click", (evento) => {
//     manipulaDados(evento.target.textContent, evento.target.parentNode )
//   })
// })

// function manipulaDados (operacao, controle){
//   const peca = controle.querySelector(".controle-contador");

//-------------------------------------------------------------------------------------------------------
//Atualizando o programa utilizando -data no Html para deixar o código seguro e 
//buscando pelo Data Set no Java Script

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

console.log (estatisticas);

const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },
  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -4
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 43
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}


controle.forEach ((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode )
    atualizaEstatisticas(evento.target.dataset.peca)

    
  })
})

function manipulaDados (operacao, controle){
       const peca = controle.querySelector("[data-contador]");

       if (operacao === "-"){
           peca.value = parseInt(peca.value) - 1;
       } else {
           peca.value = parseInt(peca.value) + 1;
       
}
}

function atualizaEstatisticas(peca){
   console.log (pecas[peca]);

   estatisticas.forEach ((elemento)=>{
         console.log (elemento.textContent)
   })
}









   
      