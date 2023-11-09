// let titulo = document.querySelector('.titulo');
// titulo.textContent = "Aparecida Nutricionista";

// let paciente = document.querySelector('#primeiro-paciente');

// let tdPeso = paciente.querySelector('.info-peso');
// let peso = tdPeso.textContent;

// let tdAltura = paciente.querySelector('.info-altura');
// let altura = tdAltura.textContent;

// let tdImc = paciente.querySelector('.info-imc');
// // let imc = peso/(altura*altura);
// // tdImc.textContent = imc;

// function calculaImc(peso, altura){
//  let calcularImc = peso/(altura*altura);
//  if (calcularImc > 40 || calcularImc < 10) {
//     return ("Impossível calcular IMC")
//  } else {
//     return (calcularImc);
//  }
// }

// let pesoValido = true;
// let alturaValida = true;

// if (peso < 0 || peso > 600){
//     pesoValido = false;
// }

// if (altura < 0 || altura > 3.00){
//     alturaValida = false;
// }
// if (pesoValido && alturaValida){
//     let imc = peso/(altura*altura);
//     tdImc.textContent = imc;
//     } else if (pesoValido == false && alturaValida == false){
//         tdImc.textContent = "Peso e altura invalidos" 
//     }
//         else if (pesoValido == false) {
//          tdImc.textContent = "Peso Inválido"
//         }
//            else if (alturaValida == false) {
//              tdImc.textContent = "Altura Inválida"
//             }



// // tdImc.textContent = calculaImc(peso, altura);

// let paciente2 = document.querySelector('#segundo-paciente');

// let tdPeso2 = paciente2.querySelector('.info-peso');
// let peso2 = tdPeso2.textContent;

// let tdAltura2 = paciente2.querySelector('.info-altura');
// let altura2 = tdAltura2.textContent;

// let tdImc2 = paciente2.querySelector('.info-imc');


// let pesoValido2 = true;
// let alturaValida2 = true;

// if (peso2 < 0 || peso2 > 600){
//     pesoValido2 = false;
// }

// if (altura2 < 0 || altura2 > 3.00){
//     alturaValida2 = false;
// }

// if (pesoValido2 && alturaValida2){
//     let imc2 = peso2/(altura2*altura2);
//     tdImc2.textContent = imc2;
//     } else if (pesoValido2 == false && alturaValida2 == false){
//         tdImc2.textContent = "Peso e altura invalidos" 
//     }
//         else if (pesoValido2 == false) {
//          tdImc2.textContent = "Peso Inválido"
//         }
//            else if (alturaValida2 == false) {
//              tdImc2.textContent = "Altura Inválida"
//             }


//-----------------------------------------
// var pacientes = document.querySelectorAll(".paciente");

// for (var i = 0; i < pacientes.length; i++) {

//     var paciente = pacientes[i];

//     var tdPeso = paciente.querySelector(".info-peso");
//     var peso = tdPeso.textContent;

//     var tdAltura = paciente.querySelector(".info-altura");
//     var altura = tdAltura.textContent;

//     var tdImc = paciente.querySelector(".info-imc");

//     var pesoEhValido = true;
//     var alturaEhValida = true;

//     if (peso <= 0 || peso >= 1000) {
//         console.log("Peso inválido!");
//         pesoEhValido = false;
//         tdImc.textContent = "Peso inválido";
//     }

//     if (altura <= 0 || altura >= 3.00) {
//         console.log("Altura inválida!");
//         alturaEhValida = false;
//         tdImc.textContent = "Altura inválida";
//     }

//   if (alturaEhValida && pesoEhValido) {
//         var imc = peso / (altura * altura);
//         tdImc.textContent = imc.toFixed(2);
//     }
// }
