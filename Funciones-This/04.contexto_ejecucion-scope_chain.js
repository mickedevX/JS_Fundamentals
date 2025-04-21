//CONTEXTO
const globalValue = 'valor global';

function funcionPrincipal() {
    const unaVariableFuncionPrincipal = 'valorVariableFuncionPrincipal';

    console.log('valor global >>>> ' + globalValue);
    console.log('valor de la funcion principal >>>> ' + unaVariableFuncionPrincipal);

    function funcionInternaOne() {
        const localOneValue = 'valor local one';
        console.log('valor de la funcion interna One >>>> ' + localOneValue + ' y ' + unaVariableFuncionPrincipal + ' y ' + globalValue);
    }
    function funcionInternaTwo() {
        const localTwoValue = 'valor local two';
        const anotherValue = 'valor local two another';
        // console.log('valor de la funcion internaOne >>>> ' + localOneValue);
        console.log('valor de la funcion internaTwo >>>> ' + localTwoValue + ' y ' + anotherValue + ' y ' + globalValue);
    }

    funcionInternaOne();
    funcionInternaTwo();
}

console.log(funcionPrincipal());
