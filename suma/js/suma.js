/**
 * Suma de dos números
 * Autor: Johan Esteban Cuellar Silva
 * Fecha 11 de junio de 2024
 */
function suma(){
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let numDos = parseInt(document.getElementById('txtNumDos').value);
    let sumar;
    let imagenCuadrado = "<img src='img/cuadrado.png'>";
    sumar = numUno + numDos;

    document.getElementById('suma').innerHTML = " <strong> "+sumar+" </strong> "+imagenCuadrado;
    
    return false;
}