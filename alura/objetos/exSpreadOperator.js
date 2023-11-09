const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

// const guerreiro = { fichaGuerreiro, equipoGuerreiro }
// console.log(guerreiro)
//os objetos ainda estão separados; o nome de cada variável agora é uma chave e o valor da chave é cada um dos objetos:



// const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
// console.log(guerreiro) Dessa forma retorna o espalhamento esperado. 

//-----------------------------------------------------------------

const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
   
    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }

const personagens = {...mago, ...guerreiro, ...ranger}

console.log (personagens);
//O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto




