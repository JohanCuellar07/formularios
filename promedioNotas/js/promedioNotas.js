/**
 * promedio de notas
 * Autor: Johan Esteban Cuellar Silva
 * Fecha 11 de junio de 2024
 */
function promedio(){
    let notaUno = parseFloat(document.getElementById('txtNotaUno').value);
    let notaDos = parseFloat(document.getElementById('txtNotaDos').value);
    let notaTres = parseFloat(document.getElementById('txtNotaTres').value);
    let promediar;
    promediar = (notaUno + notaDos + notaTres) / 3;

    document.getElementById('resultado').innerHTML = "<strong>"+promediar+"</strong>";
    
    return false;
}