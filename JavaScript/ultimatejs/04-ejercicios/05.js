let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        if (temp < menor)
            menor = temp;
        if (temp > mayor)
            mayor = temp;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor(array);

console.log(numeros);