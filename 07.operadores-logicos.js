/**
 * Operadores lógicos
 */

const a = 10;
const b = 20;
const c = '10';

//AND
console.log(a > b && a === c); // false
console.log(a < b && a === c); // true
//OR
console.log(a > b || a === c); // false
console.log(a < b || a === c); // true
//NOT
console.log(!(a < b)); // false
console.log(!(a > b)); // true

