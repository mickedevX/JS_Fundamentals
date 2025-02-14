let nombre = 'Cami';
if (nombre === 'Michael') {
    console.log('Hola Michael');
} else if (nombre === 'Cami') {
    console.log('Hola Cami');
    console.table('Nombre existe!');
    console.profile('MickeDesk');
} else {
    console.error('Nombre no encontrado!!!');
}

const secretNumber = Math.floor(Math.random() * 10 + 1);

let playerNumber = parseInt(prompt('Adivina un número entre 1 y 10'));

console.log(`Este es el número con el que juegas ${playerNumber}`);
console.log('Este es el numero secreto ' + secretNumber);

if (playerNumber === secretNumber) {
    alert('Felicidades!!! ganaste');
} else if (playerNumber < secretNumber) {
    alert(`Tu número es ${playerNumber} y el número secreto es ${secretNumber}, Tu número es bajo!`);
} else if (playerNumber > secretNumber) {
    alert(`Tu número es ${playerNumber} y el número secreto es ${secretNumber}, Tu número es alto!`);
}else{
    alert('Sigue participando');
}