function crearArray(length) {
    if (length > 0) {
        let arr = [];
        for (let i = 0; i < length; i++) {
            arr[i] = i + 1;
        }
        return arr;
    } else {
        return [];
    }
}

let len = 7;
let array = crearArray(len);
console.log(array);