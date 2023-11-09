const btEnviar = document.querySelector('#adicionarResultados');
btEnviar.addEventListener('click', function(event){
    event.preventDefault();

    let form =  document.querySelector('#form-adiciona');

    let operador = obtemResultadoDoOperador(form);
    
    let operadorTr = montaTR(operador);

    let tabela = document.querySelector("#tabelaOperadores");
    tabela.appendChild(operadorTr);
})

function obtemResultadoDoOperador(form){
    let operador = {
        nome: form.nome.value,
        matricula: form.matricula.value,
        qualidade: form.qualidade.value,
        absenteismo: form.absenteismo.value,
        tma: form.tma.value
    }

    return (operador);
}

function montaTR(operador){
    let operadorTr = document.createElement("tr");
    operadorTr.classList.add("trOperador");

    let nomeTd = document.createElement("td");
    nomeTd.classList.add("infoNome");

    let matriculaTd = document.createElement("td");
    matriculaTd.classList.add("infoMatricula");

    let qualidadeTd = document.createElement("td");
    qualidadeTd.classList.add("infoQualidade");

    let absenteismoTd = document.createElement("td");
    absenteismoTd.classList.add("infoAbsenteismo");
    
    let tmaTd = document.createElement("td");
    tmaTd.classList.add("infoTma");

    


    nomeTd.textContent = operador.nome;
    matriculaTd.textContent = operador.matricula;
    qualidadeTd.textContent = operador.qualidade;
    absenteismoTd.textContent = operador.absenteismo;
    tmaTd.textContent = operador.tma;
    

    operadorTr.appendChild(nomeTd);
    operadorTr.appendChild(matriculaTd);
    operadorTr.appendChild(qualidadeTd);
    operadorTr.appendChild(absenteismoTd);
    operadorTr.appendChild(tmaTd);
    


    return (operadorTr);
}


