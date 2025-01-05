let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('Listando usuarios...');
        break;
    case 'guardar':
        console.log('Guardando usuario...');
        break;
    default:
        console.log('Acción no soportada');
        break;
}