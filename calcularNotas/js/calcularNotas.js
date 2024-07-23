/**
 * promedio de notas
 * Autor: Johan Esteban Cuellar Silva
 * Fecha 11 de junio de 2024
 */
function sumatoria(){
    let notaUno = parseFloat(document.getElementById('txtNotaUno').value);
    let notaDos = parseFloat(document.getElementById('txtNotaDos').value);
    let notaTres = parseFloat(document.getElementById('txtNotaTres').value);

    let porNotaUno = notaUno * 0.2;
    let porNotaDos = notaDos * 0.35;
    let porNotaTres = notaTres * 0.45;

    let suma;
    suma = porNotaUno + porNotaDos + porNotaTres;
    let notaFinal = indicarNotaFinal(suma);

    document.getElementById('resultado').innerHTML = '<strong>'+suma+' -> '+notaFinal+'</strong>';
    
    return false;
}
function indicarNotaFinal(psuma){
    let suma = psuma;
    let imp;

    if(suma > 4.5){
        imp = "nota superior";
    }
    else{
        if(suma <= 4.5 && suma > 3.5) {
            imp = "nota buena";
        }
        else{
            if(suma <= 3.5 && suma > 3) {
                imp = "nota media";
            }
            else{
                imp = "nota baja";
            }
        }
    }
    return imp;
}