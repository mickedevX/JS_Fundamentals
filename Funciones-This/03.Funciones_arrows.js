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
    frenar: (freno) => { console.log('En el auto de marca '+this.name+' se presiono el: ' + freno) },
}

vehiculo.encederArranque('cilindro3L');
vehiculo.frenar('freno de mano');