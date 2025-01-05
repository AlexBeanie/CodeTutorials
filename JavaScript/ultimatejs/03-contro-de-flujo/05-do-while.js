let i = 0;

while (i < 3) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

console.log('Fin del ciclo while');
i = 0;

do {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
} while (i < 3);