const candidates = [{
    name: "Alice",
    votes1: 0,
    votes2: 0,
    votes3: 0,
    elegible: true,
    totVoto: 0
},
{
    name: "Bob",
    votes1: 0,
    votes2: 0,
    votes3: 0,
    elegible: true,
    totVoto: 0
},
{
    name: "Charlie",
    votes1: 0,
    votes2: 0,
    votes3: 0,
    elegible: true,
    totVoto: 0
}
]

let elector = 0;
let voto1 = 0;
let voto2 = 0;
let voto3 = 0;

do{
   elector = prompt ("Digite quantidade de Eleitores habilitados para a eleição");
}
while (elector > 9 || elector < 1);

for (let i = 0; i < elector; i++){
   
      voto1 = prompt (`Eleitor ${i + 1} Primeiro voto: Vote nas opções abaixo:
                      1: ${candidates[0].name}
                      2: ${candidates[1].name}
                      3: ${candidates[2].name}`);
      
      while (voto1 < 1 || voto1 > 3){
        voto1 = prompt (`Eleitor ${i + 1} Voto inválido, Digite novamente o primeiro voto: 
                    Vote nas opções abaixo:
        1: ${candidates[0].name}
        2: ${candidates[1].name}
        3: ${candidates[2].name}`);
      } 

      if (voto1 == 1){
        candidates[0].votes1++
      } else if (voto1 == 2){
        candidates[1].votes1++
      } else {
        candidates[2].votes1++
      }

      voto2 = prompt (`Eleitor ${i + 1} Segundo voto: Vote nas opções abaixo:
                      1: ${candidates[0].name}
                      2: ${candidates[1].name}
                      3: ${candidates[2].name}`);
      
      while (voto2 < 1 || voto2 > 3 || voto2 == voto1){
        voto2 = prompt (`Eleitor ${i + 1} Voto inválido, Digite novamente o segundo voto: 
              Vote nas opções abaixo, exceto o que já votou:
        1: ${candidates[0].name}
        2: ${candidates[1].name}
        3: ${candidates[2].name}`);
        
        while (voto2 == voto1){
          voto2 = prompt ("Vc votou nesse candidato como 1ª opção. Vote em outro candidato.")
        }
        
      } 

      if (voto2 == 1){
        candidates[0].votes2++
      } else if (voto2 == 2){
        candidates[1].votes2++
      } else {
        candidates[2].votes2++
      }

      voto3 = prompt (`Eleitor ${i + 1} Terceiro voto: Entre as opções, vote no que não foi escolhido nas opções anteriores:
                      1: ${candidates[0].name}
                      2: ${candidates[1].name}
                      3: ${candidates[2].name}`);
      
      while (voto3 < 1 || voto3 > 3 || voto3 == voto1 || voto3 == voto2){
        voto3 = prompt (`Eleitor ${i + 1} Voto inválido, Digite novamente o terceiro voto: 
              Entre as opções, vote no que não foi selecionado 
              anteriormente:
        1: ${candidates[0].name}
        2: ${candidates[1].name}
        3: ${candidates[2].name}`);

        while (voto3 == voto1 || voto3 == voto2){
          voto3 = prompt ("Vc já votou nesse candidato. Vote no candidato restante.");
        }

      } 

      if (voto3 == 1){
        candidates[0].votes3++;
      } else if (voto3 == 2){
        candidates[1].votes3++;
      } else {
        candidates[2].votes3++;
      }
      
}

if (candidates[0].votes1 > (candidates[1].votes1 + candidates[2].votes1)){
  alert (`O(a) candidato(a) ${candidates[0].name} venceu com ${candidates[0].votes1} voto(s). `);
  
}
else if (candidates[1].votes1 > (candidates[0].votes1 + candidates[2].votes1)){
  alert (`O(a) candidato(a) ${candidates[1].name} venceu com ${candidates[1].votes1} voto(s). `);

}
else if (candidates[2].votes1 > (candidates[0].votes1 + candidates[1].votes1)){
  alert (`O(a) candidato(a) ${candidates[2].name} venceu com ${candidates[2].votes1} voto(s). `);
} 
else alert ("Empate"); 


 


