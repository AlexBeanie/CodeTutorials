function toPairs(arr) {
    let pairs = [];
    let idx = 1;
    for (item of arr) {
        pairs[idx - 1] = [idx, item];
        idx++;
    }
    return pairs;
}

let array = [{
    id: 1,
    name: 'Cristian',
}, {
    id: 2,
    name: 'Pablo',
}, {
    id: 3,
    name: 'Juan',
}];

let result = toPairs(array);
console.log(result);