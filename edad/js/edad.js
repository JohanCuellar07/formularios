/**
 * Calcular edad
 * Autor: Johan Esteban Cuellar Silva
 * Fecha 11 de junio de 2024
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

function calcularEdad(){
    const fechaNacimiento = new Date(document.getElementById('txtFecha').value);
    const edad = calculateAge(fechaNacimiento);
    let tipoEdad;
    if(edad > 17){
        tipoEdad = 'Mayor de edad';
    }
    else{
        tipoEdad = 'Menor de edad';
    }
    document.getElementById('edad').innerHTML = '<strong>'+edad+' -> '+tipoEdad+'</strong>';
    return false;
}/*/

function calcularEdad() {
    var fechaNacimiento = new Date(document.getElementById("txtFecha").value);
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    var añoNacimiento = fechaNacimiento.getFullYear();

    var edad = añoActual - añoNacimiento;

    // Restar un año si la persona no ha cumplido años este año aún
    if (fechaNacimiento.getMonth() > fechaActual.getMonth() || 
        (fechaNacimiento.getMonth() === fechaActual.getMonth() && fechaNacimiento.getDate() > fechaActual.getDate())) {
        edad--;
    }

    document.getElementById("resultado").innerHTML = "La edad es: " + edad;

    return false;
}*/