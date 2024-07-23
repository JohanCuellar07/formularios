/**
 * tablas de multiplicar
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 23 de junio de 2024
 */
function calcularTablas(){
    let resul;
    let cont = 0;
    let contPar = 0;
    let contImpar = 0;
    let numTab = 0;
    let numHasTab = parseInt(document.getElementById('txtNumUno').value);
    let numHas = 10;
    let imp = '';
    
    while(numTab < numHasTab){
        numTab = numTab + 1;
        imp += "<br>";
        while(cont < numHas){
            cont = cont + 1;
            resul = numTab * cont;
            imp += numTab+" X "+cont+" = "+resul;
            if(resul%2 == 0){
                contPar = contPar + 1;
                imp += " buzz<br>";
            }
            else{
                contImpar = contImpar + 1;
                imp += " bass<br>";
            }
        }
        cont = 0;
    }
    imp += "<br>resultado pares: "+contPar+"<br>resultado impares: "+contImpar;

    document.getElementById('resultado').innerHTML = imp;
    return false;
}