/**
 * contar números
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 17 de junio de 2024
 */
function contarNum() {
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let imp = '';

    for (let contar = 1; contar <= numUno; contar++) {
        if (contar %2 == 0) {
            imp += contar + ' es par. ';
        }
        else{
            imp += contar + ' es impar. ';
        }
    }

    document.getElementById('resultado').innerHTML = imp;
    return false;
}