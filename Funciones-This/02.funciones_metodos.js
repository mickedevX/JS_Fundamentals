//pasar funciones como argumentos -> callback
function f_a(funcion) {
    console.log("Se ejecuta la función a, el argumento fue la funcion: " + funcion);
}
function f_b(funcion) {
    console.log("Se ejecuta la función b, el argumento fue la funcion: " + funcion);
}
f_a(f_b);

//retornar funciones
function f_c() {
    function f_d() { };
    return f_d;
}
f_c();

//asignar funciones a variables
const a = function () { }

//Tener propiedades y metodos
function myFunction() { }
const obj = {}
myFunction.call(obj);

//anidar funciones -> llamar a funciones dentro de otras funciones
function a() {
    function b() {
        function c() {
            console.log('Hola');
        }
        c();
    }
    b();
}
a();

//Almacenar funciones en objetos
const miauto = {
    name: 'Toyota',
    lauchMessage: function envioMensaje() { //funciones en propiedades de objetos -> método
        console.log('Hola, soy un auto');
    }
}
miauto.lauchMessage();