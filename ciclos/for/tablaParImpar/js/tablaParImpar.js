/**
 * tabla de multiplicar
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 23 de junio de 2024
 */
function calcularTabla(){
    let resul;
    let numTab = parseInt(document.getElementById('txtNumUno').value);
    let numHas = 10;
    let imp = '';
     
    for(cont = 1; cont <= numHas; cont++){
        resul = numTab * cont;
        indResul = paroimpar(resul);
        imp += numTab+" X "+cont+" = "+resul+indResul;
    }

    document.getElementById('resultado').innerHTML = imp;
    return false;
}

function paroimpar(presul){
    let resul = presul;
    let impPP = '';

    if(resul%2 == 0){
        impPP += " resultado par<br>";
    }
    else{
        impPP += " resultado impar<br>";
    }
    return impPP;
}