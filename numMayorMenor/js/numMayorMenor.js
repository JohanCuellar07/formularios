/**
 * Indicar si el número es mayor, menor o igual
 * Autor: Johan Esteban Cuellar Silva
 * Fecha 16 de junio de 2024
 */
function mmNum(){
    let num1 = parseInt(document.getElementById('txtNumUno').value);
    let num2 = parseInt(document.getElementById('txtNumDos').value);
    let comparar;

    if(num1 == num2){
        comparar = "Son iguales";
    }
    else if(num1 > num2){
        comparar = "es mayor "+num1+" y es menor "+num2;
    }
    else{
        comparar = "es mayor "+num2+" y es menor "+num1;
    }
    document.getElementById('comparacion').innerHTML = "<strong>"+comparar+"</strong>";
    return false;
}