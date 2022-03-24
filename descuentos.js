const precioOriginal = 100;
const descuento = 15;
const cupones = ["si_al_10", "20_menos", "menos_50"];

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento =
  (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento,
});

function calcularprecioConDescuento(precioOriginal, descuento) {
  var porcentajePrecioConDescuento = 100 - descuento;
  var precio = (precioOriginal * porcentajePrecioConDescuento) / 100;
  return precio;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;
  const inputCupon = document.getElementById("InputCoupon");
  const couponValue = inputCupon.value;

  let descuento;

  switch(couponValue){
      case cupones[0]:
      descuento = 10;
      break;
      case cupones[1]:
      descuento = 20;
      break;
      case cupones[2]:
      descuento = 50;
      break;
      default:
          alert("NO EXISTEN TAL CUPON!");
  }


  const precioConDescuento = calcularprecioConDescuento(
    priceValue,
    descuento
  );

  const resultP = document.getElementById("ResultPrice");
  resultP.innerText = "El Precio con Descuento es: $" + precioConDescuento;
}
