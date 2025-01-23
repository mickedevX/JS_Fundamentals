/**
 * Operadore aritméticos
 */

/**
 * Enteros y decimales
 */
const entero = 42;
const decimal = 3.14;
const cient = 5e3;//-> 5000
const infinito = Infinity;//-> infinito
const noEsNumero = NaN;// -> Not a Number
console.log(typeof(entero),typeof(decimal),typeof(cient),typeof(infinito),typeof(noEsNumero));


/**
 * Operaciones aritméticas
 */
//Suma, resta, multiplicación y división
const suma = 3+6; //-> 9
const resta = 3-6; //-> -3
const multiplicacion = 3*6; //-> 18
const division = 3/6;//-> 0.5

//Modulo y exponente
const modulo = 15%8; //-> 7
const exponente = 2**3; //-> 8

//Precision
const resultado = 0.1+0.2; //-> 0.30000000000000004
console.log(resultado.toFixed(2)); //-> 0.30
console.log(resultado=== resultado.toFixed(2)); //-> false

//Operaciones avanzadas
const raiz = Math.sqrt(25); //-> 5
const valorAbsoluto = Math.abs(-5); //-> 5
const aleatorio  = Math.random(); //-> numero aleatorio entre 0 y 1