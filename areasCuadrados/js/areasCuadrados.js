/**
 * comparación de areas de cuadrados
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 16 de junio de 2024
 */
function areaCuadrado(plado){
    let lado = plado;
    let area;

    area = lado * lado;

    return area;
}

function areasCuadrados(){
    let lado1 = parseInt(document.getElementById('txtladoCua1').value);
    let lado2 = parseInt(document.getElementById('txtladoCua2').value);
    let lado3 = parseInt(document.getElementById('txtladoCua3').value);
    let imp;
    let imagenFigura = "<img src='img/cuadrado.png'>";
    let cuad1 = areaCuadrado(lado1);
    let cuad2 = areaCuadrado(lado2);
    let cuad3 = areaCuadrado(lado3);

    if(cuad1 == cuad2 && cuad1 == cuad3){
        imp ="son iguales";
    }
    else{
        if(cuad1 > cuad2 && cuad1 > cuad3){
            imp = cuad1+" es el mayor";
        }
        else{
            if(cuad2 > cuad1 && cuad2 > cuad3){
                imp = cuad2+" es el mayor";
            }
            else{
                imp = cuad3+" es el mayor";
            }
        }
    }
    document.getElementById('resultado').innerHTML = "<strong>"+imp+"</strong> "+imagenFigura;

    return false;
}