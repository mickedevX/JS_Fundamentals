//**Declaración de una función */
function miFuncion_01(a, b) {
    return a + b;
}

//**Expresion de una función */
const miFuncion_02 = function (a, b) {
    return a + b;
}

//**Expresion de Arrow function explicita */
const miFuncion_03 = (a, b) => {
    return a + b;
}

//**Expresion de Arrow function implicita */
const miFuncion_04 = a => a + 10;
const miFuncion_05 = (a, b) => a + b;

//**Lexical binding */
const vehiculo = {
    name: 'Toyota',
    encederArranque: function (motor) { console.log('En el auto de marca '+this.name+' se está encendiendo el motor: ' + motor) },
    frenar: (freno) => { console.log('En el auto de marca '+this.name+' presiono el: ' + freno) },
}

vehiculo.encederArranque('cilindro3L');
vehiculo.frenar('freno de mano');

//Examples
/**
 * Crear funciones para aprender arrow y lexical binding
 * 
 */

//Acontinuación se crea un objeto con sus propiedades y métodos
const transaccion ={
    id:'238TRA',
    date:'2023-10-01',
    amount: 1500,
    currency: 'USD',
    description: 'Pay services',
    //Método para obtener la transacción, sin ningun parámetro
    getFirstTransaction: function(){
        console.log(`The Transaction has: ${this.id}, ${this.date}, ${this.amount}, ${this.currency} and its is: ${this.description}`);
    },
    //Método para obtener la transacción, con parámetros
    getNewTransaction: function(id, date, amount, currency, description){
        console.log(`The Transaction has: ${id}, ${date}, ${amount}, ${currency} and its is: ${description}`);
    },
    //Método para obtener la transacción, con parámetros y arrow function
    //El this hace referencia al objeto global window
    //Por lo tanto no se puede acceder a las propiedades del objeto transaccion
    //El this hace referencia al objeto global window
    getArrowTransaction:(id, description)=>{
        console.log(`The Arrow Transaction has: ${id}, ${description} and the amount is: ${this.amount}`);
    }
}

//Llamar al método getFirstTransaction
console.log('Llamar al método getFirstTransaction');
transaccion.getFirstTransaction();
//Llamar al método getNewTransaction
console.log('Llamar al método getNewTransaction');
transaccion.getNewTransaction('234TRA', '2023-12-04', 1750, 'USD', 'Pay studies');
//Llamar al método getArrowTransaction
console.log('Llamar al método getArrowTransaction');
transaccion.getArrowTransaction('2111TRA', 'Pay techonology');

