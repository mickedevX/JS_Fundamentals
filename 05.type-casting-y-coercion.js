/**
 * Type casting y coercion
 */
/**
 * lenguajes Compilados -> C, C++, Rust, Go, swift, Java (Se compilan antes de ejecutarse)
 * lenguajes interpretados -> JavaScript, Python, Ruby, PHP (se ejecutan en tiempo de ejecución)
 */

//Explicita type casting
const string = '43';
const number = parseInt(string);
console.log(number); // 43
console.log(typeof number); // number

const string2 = '43.5';
const number2 = parseFloat(string2);
console.log(number2); // 43.5
console.log(typeof number2); // number

const binary = '1001';
const number3 = parseInt(binary, 2); // 2 es la base
console.log(number3); // 9
console.log(typeof number3); // number

// Coerción implícita type casting
const numero = 4;
const booleano = true;
console.log(numero + booleano); // 5

const suma = 'a' + 2;
console.log(suma); // a2

const suma2 = '2' + true;
console.log(suma2); // 2true
console.log('------------------------------');
//Cuando existe un string -> concatenación
//Cuando no existe un string -> suma
const stringValue = '12';
const numberValue = 2;
const booleanoValue = true;
console.log(stringValue + numberValue); // 122
console.log(stringValue + booleanoValue); // 12true
console.log(stringValue + stringValue); // 1212

console.log(numberValue + booleanoValue); // 3
console.log(numberValue + numberValue); // 4
console.log(numberValue + stringValue); // 212

console.log(booleanoValue + booleanoValue); // 2
console.log(booleanoValue + numberValue); // 3
console.log(booleanoValue + stringValue); // true12

