//el ciclo infinito solo existe para fines de demostracion y no tener que refresecar la pagina para comenzar de nuevo

function ejercicio1() {
   while(true){
    var pregunta = prompt("¿Cuál es el nombre del creador de JavaScript?");     //el prompt hace la pregunta y se guarda la respuesta
    if(pregunta == "Brendan Eich"){
        alert("¡Correcto!");    //Si la respuesta ingresada en el prompt es Brendan Eich, se hace saber que es correcto
    }else{
        alert("¿No lo sabes? ¡Brendan Eich!"); //Si la respuesta ingresada no es Brendan Eich, se hace saber la respuesta correcta
    }
   }
}

ejercicio1();

