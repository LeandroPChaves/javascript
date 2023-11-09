//Exemplo com While
// function tocaSom (idElementoAudio){
//     document.querySelector(idElementoAudio).play();
// }


// const listaDeTeclas = document.querySelectorAll(".tecla");

// let contador = 0;

// while (contador < listaDeTeclas.length){

//     const tecla = listaDeTeclas[contador];

//     const instrumento = tecla.classList[1];

//     const idAudio = `#som_${instrumento}`;
    
//     tecla.onclick = function(){
//         tocaSom(idAudio);
//     }
    
//     contador = contador + 1;

    
// }




let listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++){

    let botao = listaDeTeclas[i];
    
    let botaoList = botao.classList[1];

    let somList = `#som_${botaoList}`;

    function tocaSom (somList){
        const elemento = document.querySelector(somList);

        if (elemento != null && elemento.localName === 'audio'){
             elemento.play();
        }
        else {
            alert ("Elemento não encontrado ou seletor inválido")
        }
    }

    
    // botao.onclick = function(){
    //     tocaSom(somList);
    // }

    // botao.onkeydown = function(){
    //     botao.classList.add('ativa');
    // }

    // botao.onkeyup = function(){
    //         botao.classList.remove('ativa');
    // }

    //32, 13

    botao.addEventListener("click", function(){
        tocaSom(somList);
    });

    botao.addEventListener("keydown", function(evento){
        if (evento.code == "Space" || evento.code == "Enter"){
          botao.classList.add('ativa');
        }
    });

    botao.addEventListener("keyup", function(evento){
        if (evento.code == "Space" || evento.code == "Enter"){
          botao.classList.remove('ativa');
        }
        
    })

    
}










//Minha resolução sozinho sem as aulas


// let botao = document.querySelectorAll(".tecla");
// let audio = document.querySelectorAll(".audio");

// for (let i = 0; i < botao.length && i < audio.length; i++){

//     let botaoIndex = botao[i];
//     let audioIndex = audio[i];

//     function tocaSom(){
//        let audioFuncao = audioIndex.play();
//     }

//     botaoIndex.addEventListener("click", tocaSom);
// }