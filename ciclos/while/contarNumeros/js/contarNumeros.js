/**
 * contar números
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 17 de junio de 2024
 */
function contarNum() {
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let contar = 0;
    let imp = '';

    while (contar < numUno) {
        contar = contar + 1;
        imp += contar + ' ';
    }

    document.getElementById('resultado').innerHTML = imp;
    return false;
}