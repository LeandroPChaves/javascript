 //converter um objeto de livro para o JSON

 const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro)

//--------------------------------------------------------------------

//converter o json para o objeto javascript literal
//const objLivro = JSON.parse(jsonLivro)
//console.log(objLivro)

