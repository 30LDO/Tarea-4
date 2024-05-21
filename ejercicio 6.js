var arreglo = [];
var n = 5;
var max;
var min;
var longitud;

function ejercicio6(){
    longitud = prompt("Ingrese la longitud del arreglo");   //se pide al usuario que ingrese la longitud del arreglo
    longitud = parseInt(longitud);                          //lo que se ingrese se convierte a entero
    if (longitud <= 0){                                     //si la longitud es menor o igual a cero se devuelve un error
        alert("Ingrese una longitud valida");
    } else if(longitud == 1){                               //si la longitud es 1 el caso es unico, por lo que no se ejecuta el algoritmo
        let n = prompt("Ingrese el valor");
    } else if(longitud > 1){                                //si la longitud es mayor a 1 se ejecuta el algoritmo
        crearArray(longitud);
    }
    minimoMaximo();                                         //se calcula el minimo y el maximo
    alert("minimo = " + min + "\nmaximo = " + max)
}

function crearArray(longitud){
    for(var i=1; i<=longitud; i++) {
        let n = prompt("Ingrese el valor " + i);            //se obtienen los numeros a ingresar en el array
        arreglo.push(n);                                    //el numero ingresado se inserta en el array
    }
}

function minimoMaximo(){
    max = min = arreglo[1];                                 //se hace un ciclo para recorrer el array y determinar el min y max
    for(var i=0; i<=longitud; i++) {
        if (arreglo[i] >= max){
            max = arreglo[i];
        }else if (arreglo[i] <= min ){
            min = arreglo[i];
        }
    }
}

ejercicio6();



