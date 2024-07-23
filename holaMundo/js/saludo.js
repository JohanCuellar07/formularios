/**
 * Respuesta de saludo "Hola Mundo"
 * Autor: Johan Esteban Cuellar Silva
 * Fecha 11 de junio de 2024
 */
function saludo(){
    let saludar;

    saludar = document.getElementById('txtSaludo').value;
    document.getElementById('saludo').innerHTML = '<strong>'+saludar+'</strong>';
    
    return false;
}