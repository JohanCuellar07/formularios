/**
 * Función: Pago Total de una persona
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 17 de junio de 2024
 */

function sueldo(){
    let diasTrabajados = parseInt(document.getElementById('txtDiasTra').value);
    let valorDia = parseInt(document.getElementById('txtValDia').value);
    let imp;
    let totalSueldo = diasTrabajados * valorDia;
    let pagoSalud = salud(totalSueldo);
    let pagoPension = pension(totalSueldo);
    let pagoArl = arl(totalSueldo);
    let pagoDescuento = descuento(pagoSalud, pagoPension, pagoArl);
    let sueldoNeto = pagoTotal(totalSueldo, pagoDescuento);

    imp = 'Sueldo: '+totalSueldo+'<br>Salud: '+pagoSalud+'<br>Pensión: '+pagoPension+'<br>Arl: '+pagoArl+'<br>Descuento: '+pagoDescuento+'<br>Pago Total: '+sueldoNeto;

    document.getElementById('resultado').innerHTML = imp;
    return false;
}
function salud(psueldo){
    let sueldo = psueldo;
    let pagoSalud;

    pagoSalud = sueldo * 0.12;

    return pagoSalud;
}

function pension(psueldo){
    let sueldo = psueldo;
    let pagoPension;

    pagoPension = sueldo * 0.16;

    return pagoPension;
}

function arl(psueldo){
    let sueldo = psueldo;
    let pagoArl;

    pagoArl = sueldo * 0.052;

    return pagoArl;
}

function descuento(psalud, ppension, parl){
    let salud = psalud;
    let pension = ppension;
    let arl = parl;
    let valorDescuento;
    
    valorDescuento= salud + pension + arl;

    return valorDescuento;
}

function pagoTotal(psueldo, pdescuento){
    let sueldo = psueldo;
    let descuento = pdescuento;
    let pagoSueldo;

    pagoSueldo = sueldo - descuento;

    return pagoSueldo;
}