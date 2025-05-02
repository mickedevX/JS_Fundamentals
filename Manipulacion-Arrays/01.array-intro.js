//Create an array
const ids = new Array('123', '456', '789');
console.log(ids);

const justOneNumber = new Array(123);
console.log(justOneNumber); 

//Sintaxis literal
const numbers = [5];
console.log(numbers);

const mix = [4,'a',0,numbers,true,
    {},{ingrediente:'azucar', cantidad: 2},
]
console.log(mix);
const accesoSecond = mix[1];
console.log(accesoSecond);
const longitudArreglo = mix.length;
console.log(longitudArreglo);
//Acceso al ultimo elemento
const accesoUltimo = mix[longitudArreglo - 1];
console.log(accesoUltimo);

