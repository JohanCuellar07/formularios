/**
 * areas de figuras
 * Autor: Johan Esteban Cuellar Silva
 * Fecha: 16 de junio de 2024
 */
function areas(){
    let Base = parseInt(document.getElementById('txtBase').value);
    let Altura = parseInt(document.getElementById('txtAltura').value);
    let eleccion = document.getElementById('selFigura').value;
    let area;
    let imagenFigura;

    if(eleccion == "triangulo"){
        area = (Base * Altura)/2;
        imagenFigura = "<img src='img/triangulo.webp'>";
    }
    else{
        if(eleccion == "rectangulo"){
            area = Base * Altura;
            imagenFigura = "<img src='img/rectangulo.webp'>";
        }
        else{
            if(eleccion == "cuadrado"){
                area = Base * Altura;
                imagenFigura = "<img src='img/cuadrado.png'>";
            }
            else{
                area = "<br>";
                imagenFigura = "<br>";
            }
        }
    }
    document.getElementById('resultado').innerHTML = "<strong>"+area+"</strong>"+imagenFigura;

    return false;
}