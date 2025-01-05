const user = { id: 1};

user.name = 'Alex';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();