function calcularPromedioLista(lista) {
  const sumaLista = lista.reduce(
    //!Recibe como argumento una lista y va a ir sumando con cada elemento de la lista
    function (valorAcumulado = 0, nuevoValor) {
      return valorAcumulado + nuevoValor;
    }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const lista1 = [100, 200, 500, 90, 150,400000000,];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];
  mediana = console.log(String(elemento1) + ", " + String(elemento2));
//   const promedioElemento1y2 = calcularPromedioLista([elemento1, elemento2,]);
//   mediana = promedioElemento1y2;
} else {
  mediana = lista1[mitadLista1];
}




