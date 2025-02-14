
let curso = prompt('Ingrese un curso:');

switch (curso) {
    case 'html':
        alert('El curso es HTML');
        break;
    case 'js':
        alert('El curso es Javascript');
        break;
    case 'java':
        alert('El curso es JAVA');
        break;
    case 'android':
    case 'kotlin':
        alert('Estos cursos son de desarrollo movil');
        break;
    default:
        console.log('EL CURSO ' + curso + ' NO EXISTE.');

}