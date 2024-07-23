/**
 * porcentaje de un número
 * Autor: Johan Esteban Cuellar Silva
 * Fecha 11 de junio de 2024
 */
function porcentaje(){
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let porcentaje;
    porcentaje = numUno / 100;

    document.getElementById('resultado').innerHTML = "<strong>"+porcentaje+"</strong>";
    
    return false;
}