var preg1 = "0"; 
var preg2 = "0"; 
var preg3 = "0"; 

function resp1(valor) 
{preg1 = valor}; 
function resp2(valor) 
{preg2 = valor}; 
function resp3(valor) 
{preg3 = valor}; 


function evaluar() 
{ 
puntuacion=0; 


  
  if(preg1 == "A") {puntuacion=puntuacion+1};
    
  if(preg2 == "B") {puntuacion=puntuacion+1};
 
  if(preg3 == "B") {puntuacion=puntuacion+1};

alert("su puntuación es:"+puntuacion)

}

