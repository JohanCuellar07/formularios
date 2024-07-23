/**
 * contar números
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 17 de junio de 2024
 */
function contarNum() {
    let numUno = parseInt(document.getElementById('txtNumUno').value);
    let imp = '';

    for (let contar = 1; contar <= numUno; contar++) {
        imp += contar + ' ';
    }

    document.getElementById('resultado').innerHTML = imp;
    return false;
}