/**
 * porcentajes de notas
 * Autor: Johan Esteban Cuellar Silva
 * Fecha 11 de junio de 2024
 */
function porcentajes(){
    let porUno = parseFloat(document.getElementById('txtNotaUno').value);
    let porDos = parseFloat(document.getElementById('txtNotaDos').value);
    let porTres = parseFloat(document.getElementById('txtNotaTres').value);
    let sumar;

    let notaUno = porUno * 0.3;
    let notaDos = porDos * 0.3;
    let notaTres = porTres * 0.4;
    sumar = notaUno + notaDos + notaTres;

    document.getElementById('resultado').innerHTML = "<strong>Nota Uno: "+notaUno+"</strong><br><strong>Nota Dos: "+notaDos+"</strong><br><strong>Nota Tres: "+notaTres+"</strong><br><strong>Nota final: "+sumar+"</strong>";
    
    return false;
}