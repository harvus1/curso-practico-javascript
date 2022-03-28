//!Objetos dentro de un Array
const notas = [
  {
    curso: "Sistemas Operativos",
    nota: 85,
    creditos: 25,
  },
  {
    curso: "Analisis y Diseño",
    nota: 80,
    creditos: 25,
  },
  {
    curso: "Calculo",
    nota: 95,
    creditos: 55,
  },
];


//!Multiplicar cada nota por el credito
const notasConCredito = notas.map(function(objetoCurso){
    return objetoCurso.nota * objetoCurso.creditos;
});

//!Sumar los elementos 
const sumaNotasConCredito = notasConCredito.reduce(
    function(suma = 0, nuevoValor){
        return suma + nuevoValor;

    }
);

//!Sumar los creditos
const creditos = notas.map(function(objetoCurso){
    return objetoCurso.creditos;
});

const sumaCreditos = creditos.reduce(function(suma = 0, nuevoValor){
    return suma + nuevoValor;
}
);


const promedio_ponderado = sumaNotasConCredito / sumaCreditos;