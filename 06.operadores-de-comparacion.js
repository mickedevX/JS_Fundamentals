/**
 * Operadores de comparación
 */
const a = 7;
const b = '7';
const c = '2';
const d = 2;

// Igualdad
console.log(a===b); // false -> Compara el valor y el tipo de dato
console.log(a==b); // true -> Compara solo el valor

// Desigualdad
console.log(a!==b); // true -> Compara el valor y el tipo de dato
console.log(a!=b); // false -> Compara solo el valor

// Mayor que
console.log(a>c); // true -> campara el valor
console.log(a>d); // true

// Menor que    
console.log(a<c); // false -> campara el valor
console.log(a<d); // false