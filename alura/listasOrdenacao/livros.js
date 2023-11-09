// A partir dp Array de objetos abaixo, retornar algumas informações: 

const precosLivros = [
    {
        titulo: "JavaScript",
        preco: 25
    },
    {   
        titulo: "PHP",
        preco: 15
    },
    {
        titulo: "Java",
        preco: 30
    },
    {
        titulo: "Elixir",
        preco: 50
    },
    {
        titulo: "Go",
        preco: 45
    },
    {
        titulo: "Python",
        preco: 20
    }]

//----------------------------------------------------------------------------------
//Mostra todo o array de objeto
// console.log (precosLivros);

//----------------------------------------------------------------------------------
//Mostra somente o objeto do índice 2 do array
//console.log (precosLivros[2]);

//----------------------------------------------------------------------------------
//Mostra no interior do array somente o nome do titulo no índice 0
//console.log (precosLivros[0]["titulo"]);

//----------------------------------------------------------------------------------
//Mostra todo o meu array de objetos
//precosLivros.forEach(infoLivro => console.log(infoLivro));

//----------------------------------------------------------------------------------
//Mostra o interior de todo o meu array sem [] e {}
// precosLivros.forEach(infoLivros => {
//     console.log (infoLivros["titulo"])
//     console.log (infoLivros["preco"])
// })

//----------------------------------------------------------------------------------
//Coloca as informações de titulo e preço ao lado conforme índice.
// precosLivros.forEach(infoLivros => {
//     console.log (infoLivros["titulo"], infoLivros["preco"])
        
// })

//----------------------------------------------------------------------------------
//Informar o nome e valor do livro mais caro.
// let maisCaro = 0
// let nomeMaisCaro;

// precosLivros.forEach(infoLivros => {
//     if (infoLivros["preco"] > maisCaro){
//         maisCaro = infoLivros["preco"]
//         nomeMaisCaro = infoLivros["titulo"]
//     }
// })

// console.log (`O livro mais caro é: ${nomeMaisCaro}, que custa R$ ${maisCaro}`);

//----------------------------------------------------------------------------------
//Informar o nome e valor do livro mais barato.
let maisBarato = 0;
    
    for (let atual = 0; atual < precosLivros.length; atual++){
        if (precosLivros[atual].preco < precosLivros[maisBarato].preco){
            maisBarato = atual
        }
    }
    
    console.log (`O valor mais barato do livro é: ${precosLivros[maisBarato].preco} e o nome do livro é: ${precosLivros[maisBarato].titulo}`)

 



















































    
































































