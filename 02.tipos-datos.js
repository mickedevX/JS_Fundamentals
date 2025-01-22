/**
 * Tipos de datos PRIMITIVOS
 */

// String
let nombre = 'Juan';

// Number
let edad = 30;

//Boolean
let esMayorEdad = true;

// Null
let noHayValor = null;//-> es igual a no tener valor

// Undefined
let noDefinido = undefined;//-> es igual a no definir la variable

// Symbol
let simboloUnico = Symbol('mi simbolo');//-> se usa para crear identificadores unicos

//bigint
let numeroGrande = 2n;//-> se usa para numeros muy grandes

/**
 * Tipos de datos COMPLEJOS
 */

//Object 
let car ={
    mark: 'Toyota',
    model: 'Corolla',
}

//Array -> se usa para almacenar varios valores
let colores = ['red', 'blue', 'green'];
let anythings = [1, 'hello', true, null, undefined, Symbol('mi simbolo'), 2n, car, colores];
console.log(anythings);

//Function -> se usa para almacenar una funcion
function saludar (name){
    return 'Hi, ' + name;
}