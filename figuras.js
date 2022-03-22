//*Cuadrado
console.group("Cuadrado"); //!Agrupar mensajes en la consola
function perimetroCuadrado(lado){ //Las funciones nos permiten recibir parametros
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
// const ladoCuadrado = 5; //Variable que no se le cambiara el valor, equivale al largo del lado del cuadrado
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El Perimetro del Cuadrado es: " + perimetroCuadrado + "cm");


// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El Area del Cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd(); //!Fin de agrupacion en consola

//*Triangulo
console.group("Triangulo"); //!Agrupar mensajes en la consola
function perimetroTriangulo(lado1, lado2, base){
    var resultado = (Number(lado1) + Number(lado2)) + Number(base);
    return resultado;
}

function areaTriangulo(base, altura){
    var resultado = (base * altura) / 2
    return resultado;
}
// const ladoTriangulo1 = 6; //Variable que no se le cambiara el valor, equivale al largo del lado del triangulo
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Lado 1 del Triangulo: " +
//     ladoTriangulo1 +
//     "cm\n" +
//     "Lado 2 del Triangulo: " +
//     ladoTriangulo2 +
//     "cm\n" +
//     "Base: " +
//     baseTriangulo +
//     "cm"
// );


// const alturaTriangulo = 5.5;
// console.log("Algura del Triangulo: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("Perimetro del Triangulo: " + perimetroTriangulo + "cm");


// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("Area de Triangulo: " + areaTriangulo + "cm")

console.groupEnd(); //!Fin de agrupacion en la consola


//*Circulo
console.group("Circulo");


function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI; //variable de pi
console.log("PI: " + PI);

function circunferenciaCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}


// //?Radio
// const radioCirculo = 4;
// console.log("Radio del Circulo: " + radioCirculo + "cm");

// //?Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("Diametro del Circulo: " + diametroCirculo + "cm");
//?PI


// //?Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("Circunferencia del Circulo: " + perimetroCirculo + "cm");
// //?Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("Area del Circulo: " + areaCirculo + "cm");

console.groupEnd();

//!Interaccion con el HTML
//?Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); //Se obtiene el valor que el usuario ingreso en el input
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

//?Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTrianguloLado1");
    const value1 = lado1.value;

    const lado2 = document.getElementById("InputTrianguloLado2");
    const value2 = lado2.value;

    const base = document.getElementById("InputTrianguloBase");
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloBase");
    const value = base.value;

    const altura = document.getElementById("InputTrianguloAltura");
    const value2 = altura.value;

    const area = areaTriangulo(value, value2);
    alert(area);
}

function calcularDiametroCirculo(){
    const radio = document.getElementById("InputRadio");
    const value = radio.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularCircunferenciaCirculo(){
    const radio = document.getElementById("InputRadio");
    const value = radio.value;

    const circunferencia = circunferenciaCirculo(value);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputRadio");
    const value = radio.value;

    const area = areaCirculo(value);
    alert(area);
}


