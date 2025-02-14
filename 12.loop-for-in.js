let miObjeto = {
    nombre: 'Michael',
    apellido: 'Acosta',
    carrera: 'Ingeneiria Informática',
    edad: 34
}

for (propiedad in miObjeto) {
    console.log(propiedad + ' -> ' + miObjeto[propiedad]);
}