function obtenerLogin(){
    let login = prompt("Usuario");                      //el prompt hace la pregunta y se guarda la respuesta
    return  login == "trabajador"   ?   "Hola"          //Si el usuario es "trabajador", se retorna "hola";
        :   login == "dueño"        ?   "Felicidades"   //Si el usuario es "dueño", se retorna "Felicidades";
        :   login == ""             ?   "Sin sesion"    //Si no se ingresa nada en el campo, se retorna "sin sesion";
        :   ""; //Si se ingresa algo diferente de las condiciones previas, se retorna una cadena vacia
}


function ejercicio3(){
    while(true){    //se ingresa todo en un while infinito con el objetivo de repetir el proceso n veces para hacer diferentes pruebas
        let message = obtenerLogin(); //se ejecutara obtenerLogin y la variable message sera igual a lo que sea que esa funcion retorne
        alert(message); //se muestra lo que obtenerLogin retorno y fue guardado en message
    }
}

ejercicio3();