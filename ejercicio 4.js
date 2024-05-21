function quienEres(usuario){                    //Esta funcion recibe el usuario para validarlo
    if(usuario == ""){ 
        alert("Cancelado");                     //si no se ingreso ningun nombre, se cancela la operacion
    }else if(usuario == "Admin"){
        validarContraseña();                    //si el usuario es admin, se procede a validar la contraseña
    }else{
        alert("No te conozco");                 //si el usuario es incorrecto, se le hace saber al usuario
    }
}

function validarContraseña(){                   //Esta funcion recibe la contraseña y valida si es correcta
    let contraseña = prompt("Contraseña");      //Se pide la contraseña
    if(contraseña == "Jedi"){
        alert("¡Que la fuerza te acompañe!");   //si la contraseña es Jedi, se brinda acceso
    }else if(contraseña == ""){
        alert("Cancelado");                     //si la contraseña no se ingresa, se cancela la operacion
    }else{
        alert("Contraseña incorrecta");         //si la contraseña no es correcta, se le hace saber al usuario
    }
}

function ejercicio4(){
    while(true){                                //se ejecuta todo dentro de un ciclo con la finalidad de hacer pruebas
        let usuario = prompt("Usuario");        //Se obtiene el nombre de usuario
        quienEres(usuario);                     //El nombre de usuario se le pasa a la funcion quienEres para validarlo
    }
}

ejercicio4();