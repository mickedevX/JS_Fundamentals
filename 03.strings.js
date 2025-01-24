/**
 * Learning Strings
 */

/**
 * Concatenar cadenas
 */
let string1 ='Hello world';
let string2 = "JS is amazing";
let string3 = `${string1} and ${string2}`;
console.log(string3);
let string4 = string1 + ' and ' + string2;
console.log(string4);

/**
 * Longitud de cadenas -> length
 */
let string5 = 'lorem ipsum dolor sit amet';
console.log('la cadena tiene >>> '+string5.length+ ' caracteres');//-> 26

/**
 * Mayusculas y minusculas
 */
let string6 = 'hello worLd';
console.log(string6.toUpperCase()); //-> pasa a mayusculas
console.log(string6.toLowerCase()); //-> pasa a minusculas

/**
 * Fraccionar cadenas -> substring(INDICE_INICIAL, INDICE_FINAL+1)
 */
let phrase = 'The quick brown fox jumps over the lazy dog';
console.log(phrase.substring()); //-> devuelve toda la cadena
console.log(phrase.substring(0, 3)); //-> devuelve 'The'
console.log(phrase.substring(4, 9)); //-> devuelve 'quick'
