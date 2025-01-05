let email = 'alex@gmail';
let name = 'Alex';
let direccion = {
    calle: 'Queen St',
    numero: 15,
};

let user = {
    email: 'alex@gmail',
    name: 'Alex',
    direccion: {
        calle: 'Queen St',
        numero: 15,
    },
    activo: true,
    // funcion anonima, porque ponerle el mismo nombre que el atributo es redundante
    recuperarclave: function () {
        console.log('recuperando clave...');
    },
}
