const orden = [];           //en este array se guardan las cantidades individuales de los platillos
const iva = [];             //en este array se guardan las cantidades individuales del impuesto
var monto = 0.00;           //guarda el monto general de todos los platillos
var total = "";             //es la string que crea la factura para despues ser impresa

//funcion principal
function ejercicio5(){
    obtenerOrden();         //pide al usuario que ingrese el valor de los platillos
    calcularIVA();          //calcula el iva de acuerdo al monto ingresado
    calcularTotal();        //calcula el total individual de los platillos y el total general y pinta la factura
    mostrarTotal();         //imprime la factura en pantalla
}

//La funcion decimales sirve para aproximar las cantidades a 2 decimales
function decimales(n){     
    return +(Math.round(n + "e+2")  + "e-2");
}

function obtenerOrden(){
    for(var i=0; i < 3 ; i++) {
        orden[i] = decimales(parseFloat(prompt("Valor del platillo " + (i+1))));
     }
}

function calcularIVA(){
    for(var i=0; i < orden.length ; i++) {
        iva[i] = decimales(orden[i] * 0.12);
     }
}

function calcularTotal(){
    for(var i=0; i < orden.length ; i++) {
        total = total + "********** Platillo " + (i+1) + " **********" + "\n \n";
        total = total + "Valor     " + orden[i] + "\n";
        total = total + "IVA       " + iva[i]   + "\n";
        total = total + "Total     " + decimales(orden[i] + iva[i]) + "\n \n \n"; 
        monto = decimales(monto + orden[i] + iva[i]);
    }
}

function mostrarTotal(){
    total = total + "********************\n"
    total = total + "Total     " + (Math.round(monto * 100)/100);
    alert(total);
}

ejercicio5();