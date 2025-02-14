let bolsa = 'mi codigo en producción';
for (letra of bolsa){
    if(letra === ' '){
        letra = '_';
    }
    console.log(letra);
}
console.log(bolsa);