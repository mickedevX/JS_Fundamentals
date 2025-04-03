/**
 * While Loop
 */
console.log('While Loop');
contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
/**
 * Do While Loop
 */
console.log('Do While Loop');
contador = 0;
do {
    console.log(contador);
    contador++;
}
while (contador < 5);
/**
 * While Loop with Break
 */
console.log('While Loop with Break');
contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
    if (contador === 3) {
        break;
    }
}
/**
 * While Loop with Continue
 */
console.log('While Loop with Continue');
contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
    if (contador === 3) {
        continue;
    }
    console.log('Continuando');
}
