function calculatePrices(price, discountPercentage) {
    let priceToPay = price - (price * discountPercentage / 100);
    return priceToPay;
}

//llamada a la función
const precio = 234;
const descuento = 23;
const precioFinal = calculatePrices(precio, descuento);
console.log(`El precio inicial es: ${precio}`);
console.log(`El descuento es: ${descuento}%`);
console.log(`El precio final es: ${precioFinal}`);
