// const lista1 = [100, 200, 500, 600];

// let sumaLista1 = 0;

// for(let i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i];

// }

// const promedioLista1 = sumaLista1 / lista1.length;

// function calcularPromedioLista(lista){
//     let sumaLista = 0;
//     for(let i = 0; i < lista.length; i++){
//         sumaLista = sumaLista + lista[i];
//     }

//     const promedioLista = sumaLista / lista.length;
//     return promedioLista;

// }

function calcularPromedioLista(lista) {
  const sumaLista = lista.reduce(//!Recibe como argumento una lista y va a ir sumando con cada elemento de la lista
    function (valorAcumulado = 0, nuevoValor) {
      return valorAcumulado + nuevoValor;
    }
  );

  const promedioLista = sumaLista / lista.lenght;
  return promedioLista;
}
