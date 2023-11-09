var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++){
    
    var tdPeso = pacientes[i].querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdImc = pacientes[i].querySelector('.info-imc');

    var validaPeso = true;
    var validaAltura = true;

    //var gordura;

    if (peso <= 0 || peso > 600){
        validaPeso = false;
        tdImc.textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00 ){
        validaAltura = false;
        tdImc.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (validaAltura && validaPeso){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } 
    
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return (imc.toFixed(2));
}

