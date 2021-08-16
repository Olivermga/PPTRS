
 
 var m = {
 
  p: 0,
  pa: 1,
  t: 2,
  r: 3,
  s: 4 


 };

 

 var maquina = aleatorio(2, 0);


 var a = document.getElementById("area");
 var area0 = a.getContext("2d");

 var a_2 = document.getElementById("area_2");
 var area1 = a_2.getContext("2d"); 
 var p = document.getElementById("text");
 var p2 = document.getElementById("text2");
 var p3 = document.getElementById("text3");
 
 var boton = document.getElementById("piedra");
 var boton_1 = document.getElementById("papel");
 var boton_2 = document.getElementById("tijeras");
 var boton_3 = document.getElementById("rata");
 var boton_4 = document.getElementById("spock");



 



 var imagenes = []; 
 
 imagenes["Piedra"] = "Piedra.png";
 imagenes["Papel"] = "Papel.png";
 imagenes["Tijera"] = "Tijera.png";
 imagenes["Rata"] = "Rata.png";
 imagenes["Spock"] = "Spock.png"; 

 
 
 class Imag
 {

  constructor(n)
  {
  
   this.nombre = n;
   this.imagen = new Image();

   this.imagen.src = imagenes[this.nombre];
   
  }  
 
 
  mostrarM(x, y)
  {
   area0.drawImage(this.imagen, x, y);
  
  }

  mostrarU(x, y)
  {

   area1.drawImage(this.imagen, x, y)
 
  }
}


  
 

 
  
 var piedra_I = new Imag("Piedra");
 var papel_I = new Imag("Papel");
 var tijera_I = new Imag("Tijera");
 var rata_I = new Imag("Rata");
 var spock_I = new Imag("Spock");
 
 var numero;

 var piedras  = new Imag("PiedrA");

  boton.addEventListener("click", bot);
  boton_1.addEventListener("click", bot_1);
  boton_2.addEventListener("click", bot_2); 
  boton_3.addEventListener("click", bot_3);
  boton_4.addEventListener("click", bot_4);
  

  




  function bot()
  {
  
     numero = aleatorio(4, 0);
     
     piedra_I.mostrarU(0, 0);
     
       
      console.log(numero);

   if(numero == m.p)
   {
     borraM();
     piedra_I.mostrarM(0, 0);
     
     p.innerHTML = "";
     p3.innerHTML = "Empate, nada mal";
     p2.innerHTML = "Estamos iguales";
    
 
   }

 
   if(numero == m.pa)
   {
    
     borraM();
     papel_I.mostrarM(0, 0);
 
     p.innerHTML = "Perdiste, mala suerte";
     p2.innerHTML = "Papel cubre Piedra";
     p3.innerHTML = "";
 
    

   } 
 
  if(numero == m.t)
  {
  
    borraM();
    tijera_I.mostrarM(0, 0);
    p.innerHTML = "";
    
    p3.innerHTML = "Ganaste, bien hecho";
    p2.innerHTML = "Piedra tritura Tijeras";
   

   
  
  }

   if(numero == m.r)
  {
  
    borraM();
    rata_I.mostrarM(0, 0);
  
    p.innerHTML = "";

    p3.innerHTML = "Ganaste, bien hecho";
    p2.innerHTML = "Piedra aplasta Rata";

   
  
  }

  
   if(numero == m.s)
  {
  
    borraM();
    spock_I.mostrarM(0, 0);

    p3.innerHTML = "";
    p.innerHTML = "Perdiste, mala suerte";
    p2.innerHTML = "Spock vaporiza piedra";

   
  
  }


 
 
}
 
 
 function bot_1()
 {
 
  
  borra();
  papel_I.mostrarU(0, 0);

  numero = aleatorio(4, 0);
 
  if(numero == m.p)
  {
   
    p.innerHTML = "";   

    p3.innerHTML = " Ganaste, bien hecho";
    p2.innerHTML = "Papel cubre Piedra";

    borraM();
    piedra_I.mostrarM(0, 0);
 
     
  }


  if(numero == m.pa)
  {

   p.innerHTML = "";
   p3.innerHTML = "Empate, nada mal";
   p2.innerHTML = "Estamos iguales";
 
     borraM();
    papel_I.mostrarM(0, 0);   

   

  }


   if(numero == m.t)
   {

    p3.innerHTML = "";
    p.innerHTML = "Perdiste, mala suerte";
    p2.innerHTML = "Tijera corta Papel";

    
      borraM();
      tijera_I.mostrarM(0, 0);

   }
  
   if(numero == m.r)
  {
  
    borraM();
    rata_I.mostrarM(0, 0);

    p3.innerHTML = "";
    p.innerHTML = "Perdiste, mala suerte";
    p2.innerHTML = "Rata come Papel";

   
  
  }


  if(numero == m.s)
  {
  
    borraM();
    spock_I.mostrarM(0, 0);
  
    p.innerHTML = "";

    p3.innerHTML = "Ganaste, bien hecho";
    p2.innerHTML = "Papel desaprueba a Spock";

   
  
  }


 
 }


  
 function bot_2()
 {

  numero = aleatorio(4, 0);
 
  borra();
  tijera_I.mostrarU(0, 0); 

  if(numero == m.p)
  {
    
   borraM();
 
   p3.innerHTML = "";
   p.innerHTML = "Perdiste, mala suerte";
   p2.innerHTML = "Piedra tritira Tijeras";

   piedra_I.mostrarM(0, 0); 

  }


  if(numero == m.pa)
  {
   
   borraM();
  
   p.innerHTML = "";
   p3.innerHTML = "Ganaste, bien hecho";
   p2.innerHTML = "Tijeras cortan Papel";
   
   papel_I.mostrarM(0, 0);
  

  }


  if(numero == m.t)
  {

    borraM();

  
    p.innerHTML = "";
    p3.innerHTML = "Empate, nada mal";
    p2.innerHTML = "Estamos iguales";
   
    tijera_I.mostrarM(0, 0);

 }

 if(numero == m.r)
  {
  
    borraM();
    rata_I.mostrarM(0, 0);

    p.innerHTML = "";
    p3.innerHTML = "Ganaste, bien hecho";
    p2.innerHTML = "Tijera decapita a Rata";

   
  
  }


 if(numero == m.s)
  {
  
    borraM();
    spock_I.mostrarM(0, 0);

    p3.innerHTML = "";
    p.innerHTML = "Perdiste, mala suerte";
    p2.innerHTML = "Spock tritura Tijeras";

   
  
  }
  
}
 
 



 function bot_3()
 {

  borra();
  numero = aleatorio(4, 0);
 
  rata_I.mostrarU(0, 0);
  
  if(numero == m.p)
  {

   borraM();
   piedra_I.mostrarM(0, 0);
   
   p3.innerHTML = "";
   p.innerHTML = "Perdiste, mala suerte";
   p2.innerHTML = "Piedra aplasta Rata";
  

 }

 if(numero == m.pa)
 {

  borraM();

  p.innerHTML = "";
  p3.innerHTML = "Ganaste, bien hecho";
  p2.innerHTML = "Rata come Papel";
 
  papel_I.mostrarM(0, 0);
 

 }

 if(numero == m.t)
 {
  borraM();
  
  p3.innerHTML = "";
  p.innerHTML = "Perdiste, mala suerte";
  p2.innerHTML = "Tijera decapita Rata";
 
  tijera_I.mostrarM(0, 0);


 }

 if(numero == m.r)
 {
  borraM();
  
  p.innerHTML = "";
  p3.innerHTML = "Empate, nada mal";
  p2.innerHTML = "Estamos iguales";
 
  rata_I.mostrarM(0, 0);


 }
  

 if(numero == m.s)
 {
  borraM();
  
  p.innerHTML = "";
  p3.innerHTML = "Ganaste, bien hecho";
  p2.innerHTML = "Rata envenena a Spock";
 
  spock_I.mostrarM(0, 0);


 }


 
  
}
 




function bot_4()
 {

  borra();
  numero = aleatorio(4, 0);
 
  spock_I.mostrarU(0, 0);
  
  if(numero == m.p)
  {

   borraM();
   piedra_I.mostrarM(0, 0);
   
   p.innerHTML = "";
   p3.innerHTML = "Ganaste, bien hecho";
   p2.innerHTML = "Spock vaporiza Piedra";
  

 }

 if(numero == m.pa)
 {

  borraM();
 
  p3.innerHTML = "";
  p.innerHTML = "Perdiste, mala suerte";
  p2.innerHTML = "Papel desaprueba a Spock";
 
  papel_I.mostrarM(0, 0);
 

 }

 if(numero == m.t)
 {
  borraM();
  
  p.innerHTML = "";
  p3.innerHTML = "Ganaste, bien hecho";
  p2.innerHTML = "Spock tritura Tijeras";
 
  tijera_I.mostrarM(0, 0);


 }

 if(numero == m.r)
 {
  borraM();
  
  p3.innerHTML = "";
  p.innerHTML = "Perdiste, mala suerte";
  p2.innerHTML = "Rata envenena a Spock";
 
  rata_I.mostrarM(0, 0);

 }
  

 if(numero == m.s)
 {
  borraM();
  
  p.innerHTML = "";
  p3.innerHTML = "Empate, nada mal";
  p2.innerHTML = "Estamos iguales";
 
  spock_I.mostrarM(0, 0);


 }


 
  
 }
 


  







 function borra()
 {

  area_2.width=area_2.width;


 } 

 function borraM()
 {

  area.width=area.width;

 }





 function aleatorio(max, min)
 {
  var resultado;

  resultado = Math.floor(Math.random() * (max - min + 1) +min);

  return resultado;
 
 }
