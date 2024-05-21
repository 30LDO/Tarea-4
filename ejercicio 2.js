function ejercicio2(){
    while(true){
        var input = prompt("Ingrese un numero"); //el prompt pide un numero y el numero ingresado se guarda en la variable input
        if (input > 0){
            alert("1");         // Si el numero es positivo se muestra 1
        }else if (input < 0){
            alert("-1");        // Si el numero es negativo se muestra -1
        }else{
            alert("0");         // Si el numero es 0 se muestra 0
        }
    }
}

ejercicio2();
