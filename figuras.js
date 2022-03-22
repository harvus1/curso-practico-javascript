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
    return parseInt(lado1 + lado2 + base);
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
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
// function calcularAreaTriangulo(){
//     const input1 =  document.getElementById("InputTrianguloLado1");
//     const lado1 =  input1.value;
//     const input2 =  document.getElementById("InputTrianguloLado2");
//     const lado2 =  input2.value;
//     const input3 =  document.getElementById("InputTrianguloBase");
//     const base =  input3.value;
//     const perimetro = 
//     alert(typeof(perimetro);

    

// }


function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueB = inputBase.value;
    const inputAltura = document.getElementById("InputTriagnuloAltura");
    const valueA = inputAltura.value;

    const area = areaTriangulo(valueB, valueA);
    alert(area);

}


