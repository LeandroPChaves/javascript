let tela = document.querySelector('canvas');
        let pincel = tela.getContext('2d');
        let x = 300;
        let y = 200;
        pincel.fillStyle = "black";
        pincel.fillRect(0,0,600,400);


        function desenhaCirculo(x,y,raio){
        pincel.fillStyle = "white";
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
        }
        
        function limpaTela(){
        pincel.clearRect(0,0,600,400);
        }
 
        function atualizaTela(){
        desenhaCirculo(x,y,10);
        limpaTela();
        pincel.fillStyle = "black";
        pincel.fillRect(0,0,600,400);
         if (x < 600 && y < 400){
         x++
         y++
         desenhaCirculo(x,y,10);
       }
     }
       setInterval(atualizaTela, 3);

       desenhaCirculo(x,y,10);
        atualizaTela();
        

        
