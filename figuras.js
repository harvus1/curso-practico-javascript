//*Cuadrado
console.group("Cuadrado"); //!Agrupar mensajes en la consola
// const ladoCuadrado = 5; //Variable que no se le cambiara el valor, equivale al largo del lado del cuadrado
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){ //Las funciones nos permiten recibir parametros
    return lado * 4;
}
// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El Perimetro del Cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El Area del Cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd(); //!Fin de agrupacion en consola

//*Triangulo
console.group("Triangulo"); //!Agrupar mensajes en la consola
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

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base + "cm";
}

// const alturaTriangulo = 5.5;
// console.log("Algura del Triangulo: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("Perimetro del Triangulo: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

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

