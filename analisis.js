// const salarios = colombia.map(function (persona) {
//   return persona.salary;
// });

// const salariosSorted = salarios.sort(function (salarioA, salarioB) {
//   return salarioA - salarioB;
// });

// function esPar(numero) {
//   return numero % 2 === 0;
// }

// function calcularPromedioLista(lista) {
//   const sumaLista = lista.reduce(
//     //!Recibe como argumento una lista y va a ir sumando con cada elemento de la lista
//     function (valorAcumulado = 0, nuevoValor) {
//       return valorAcumulado + nuevoValor;
//     }
//   );

//   const promedioLista = sumaLista / lista.length;
//   return promedioLista;
// }

// function medianaSalarios(lista) {
//   const mitad = parseInt(lista.length / 2);

//   if (esPar(lista.length)) {
//     const personaMitad1 = lista[mitad - 1];
//     const personaMitad2 = lista[mitad];
//     const mediana = calcularPromedioLista(personaMitad1, personaMitad2);
//     return mediana;

//   } else {
//     const personaMitad = lista[mitad];
//     return personaMitad;
//   }
// }

// console.log(medianaSalarios(salariosSorted));

function esPar(numerito) {
  return numerito % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// Mediana General
const salariosCol = colombia.map(function (personita) {
  return personita.salary;
});

const salariosColSorted = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del Top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = (salariosColSorted.length - spliceStart);

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
  medianaGeneralCol,
  medianaTop10Col,
});
