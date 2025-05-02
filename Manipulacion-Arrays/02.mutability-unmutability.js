/**
 * Mutabilidad
 */
const arrayNumbers = [1, 2, 3];
console.log('Array original: ', arrayNumbers);
arrayNumbers.push(4,8,16);
console.log('Array modificado: ', arrayNumbers);

/**
 * Inmutabilidad
 */
const arrayNumbers2 = arrayNumbers.concat([56,78]);
console.log('Array original: ', arrayNumbers);
console.log('Nuevo array: ', arrayNumbers2);

/**
 * Ejercicio
 * Sumar todos los elementos de un array
 */
const arrayJustNumbers = [3,5,2,6,2,89,0,23];
let suma = 0;
for (numero of arrayJustNumbers){
    suma = numero + suma;
}
console.log('Suma de todos los elementos: ', suma);