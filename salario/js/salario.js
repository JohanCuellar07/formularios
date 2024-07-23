/**
 * Función: Pago Total de una persona
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 17 de junio de 2024
 */
function salario(){
    let diasTrabajados = parseInt(document.getElementById('txtDiasTra').value);
    let valorDia = parseInt(document.getElementById('txtValDia').value);
    let imp;
    let totalSalario = diasTrabajados * valorDia;
    let pagoSalud = salud(totalSalario);
    let pagoPension = pension(totalSalario);
    let pagoArl = arl(totalSalario);
    let pagoDeducibles = deducibles(pagoSalud, pagoPension, pagoArl);
    let pagoSubsidioTra = subsidioTra(totalSalario);
    let pagoRetencion = retencion(totalSalario);
    let sueldoNeto = pagoTotal(totalSalario, pagoSubsidioTra, pagoRetencion, pagoDeducibles);

    imp = 'Salario: $'+totalSalario+'<br>Subsidio de Transporte: $'+pagoSubsidioTra+'<br>Salud: $'+pagoSalud+'<br>Pensión: $'+pagoPension+'<br>Arl: $'+pagoArl+'<br>Retención: $'+pagoRetencion+'<br>Deducibles: $'+pagoDeducibles+'<br>Pago Total: $'+sueldoNeto;

    document.getElementById('resultado').innerHTML = imp;
    return false;
}

function salud(psalario){
    let salario = psalario;
    let pagoSalud;

    pagoSalud = salario * 0.12;

    return pagoSalud;
}

function pension(psalario){
    let salario = psalario;
    let pagoPension;

    pagoPension = salario * 0.16;

    return pagoPension;
}

function arl(psalario){
    let salario = psalario;
    let pagoArl;

    pagoArl = salario * 0.052;

    return pagoArl;
}

function deducibles(psalud, ppension, parl){
    let salud = psalud;
    let pension = ppension;
    let arl = parl;
    let pagoDeducibles;
    
    pagoDeducibles= salud + pension + arl;

    return pagoDeducibles;
}

function subsidioTra(psalario){
    let salario = psalario;
    let salarioMin = 1300000;
    let subsidioTrans = salario;
    let subsidioTransporte;

    if (subsidioTrans <= 2 * salarioMin){
        subsidioTransporte = 162000;
    }
    else{
        subsidioTransporte = 0;
    }

    return subsidioTransporte;
}

function retencion(psalario){
    let salario = psalario;
    let salarioMin = 1300000;
    let valorRet = salario;
    let valorRetencion;

    if (valorRet <= 4 * salarioMin){
        valorRetencion = valorRet * 0.04;
    }
    else{
        valorRetencion = 0;
    }

    return valorRetencion;
}

function pagoTotal(psalario, psubsidioTra, pretencion, pdeducibles){
    let salario = psalario;
    let subsidioTra = psubsidioTra;
    let retencion = pretencion;
    let deducibles = pdeducibles;
    let pagoSueldo;

    pagoSueldo = salario + subsidioTra - retencion - deducibles;

    return pagoSueldo;
}