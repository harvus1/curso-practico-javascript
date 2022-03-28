// const lista1 = [90, 160, 1, 22, 66, 2999];

// listaOrdenada = lista1.sort(function (a, b) {
//   return a - b;
// });

function calcularPromedioLista(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, valorNuevo) {
    return valorAcumulado + valorNuevo;
  });

  const promedioLista = sumaLista / lista.lenght;
  return promedioLista;
}

function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }




function calcularMediana(lista1){

    function highest(){
        return [].slice.call(lista1).sort(function(a,b){return b-a});
    }

    const listaOrdenada = highest(lista1);

    
    
    const mitadLista1 = parseInt(listaOrdenada.lenght);
    let mediana;

    if(esPar(lista1.length)){
        elemento1 = listaOrdenada[mitadLista1 - 1];
        elemento2 = listaOrdenada[mitadLista1];

        const promedioLista = calcularPromedioLista([elemento1, element2,]);
        mediana = promedioLista;

    }else{
        mediana = listaOrdenada[mitadLista1];
    }
    return mediana;
}

// function medianaList(lista){

//     let listaOrdenada = lista.sort(function(a,b){
//         return a-b;
//     })


//     const mitadLista = parseInt(listaOrdenada.length/2);

//     function esPar(numerito){
//         if (numerito % 2 === 0){
//             return true;
//         } else {
//             return false;
//         }
//     }   

//     let mediana;

//     if (esPar(listaOrdenada.length)){
//         const elemento1 = lista[mitadLista - 1];
//         const elemento2 = lista[mitadLista];

//         const promedioelemento1elemento2 = calcularMediaAritmetica([elemento1, elemento2]);

//         mediana = promedioelemento1elemento2;
//         return mediana;


//     } else {
//         mediana = listaOrdenada[mitadLista];
//         return mediana;
//     }
// }



