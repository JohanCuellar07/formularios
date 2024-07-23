/**
 * Calcular edades
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 17 de junio de 2024
 */
function calculateAge(birthDate){
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function calcularEdad(pfechaNacimiento){
    const fechaNacimiento = pfechaNacimiento;
    const edad = calculateAge(fechaNacimiento);
    let tipoEdad;
    if(edad > 17){
        tipoEdad = 'Mayor de edad';
    }
    else{
        tipoEdad = 'Menor de edad';
    }
    return tipoEdad;
}

function promedioEdades(){
    const fechaNacimiento1 = new Date(document.getElementById('txtFecha1').value);
    const fechaNacimiento2 = new Date(document.getElementById('txtFecha2').value);
    const fechaNacimiento3 = new Date(document.getElementById('txtFecha3').value);

    let tipoEdad1 = calcularEdad(fechaNacimiento1);
    let tipoEdad2 = calcularEdad(fechaNacimiento2);
    let tipoEdad3 = calcularEdad(fechaNacimiento3);

    let edad1 = calculateAge(fechaNacimiento1);
    let edad2 = calculateAge(fechaNacimiento2);
    let edad3 = calculateAge(fechaNacimiento3);

    let promedio = (edad1 + edad2 + edad3)/3;
    let indPromedio = indicarPromedio(promedio);

    document.getElementById('resultado').innerHTML = '<strong>'+edad1+' -> '+tipoEdad1+'</strong><br><strong>'+edad2+' -> '+tipoEdad2+'</strong><br><strong>'+edad3+' -> '+tipoEdad3+'</strong><br><br><strong>promedio: '+promedio+'</strong><strong> -> '+indPromedio+'</strong>';
    return false;
}

function indicarPromedio(ppromedioEdades){
    let promedioEdades = ppromedioEdades;
    let tipoEdadPro;
    if(promedioEdades > 17){
        tipoEdadPro = 'Mayoría de edad';
    }
    else{
        tipoEdadPro = 'Menor de edad';
    }
    return tipoEdadPro;
}