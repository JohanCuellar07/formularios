/**
 * operaciones con dos números
 * Autor: Johan Esteban Cuellar Silva
 * Fecha 11 de junio de 2024
 */
function operaciones(){
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let numDos = parseInt(document.getElementById('txtNumDos').value);
    let eleccion = document.getElementById('selOperacion').value;
    let resultado;

    if(eleccion == "resta"){
        resultado = numUno - numDos;
    }
    else{
        if(eleccion == "multiplicacion"){
            resultado = numUno * numDos;
        }
        else{
            resultado = numUno / numDos;
        }
    }
    document.getElementById('resultado').innerHTML = "<strong>"+resultado+"</strong>";

    return false;
}