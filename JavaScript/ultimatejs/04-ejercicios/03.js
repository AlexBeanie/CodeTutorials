/**
 * indice no menor a cero y elemento debe existir en array
 * @param {*} arr 
 * @param {*} idx 
 */

function getByIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return false;
    } else {
        return arr[idx];
    }
}

let resultado = getByIdx([1, 2, 3, 4, 5], 1);
console.log(resultado);