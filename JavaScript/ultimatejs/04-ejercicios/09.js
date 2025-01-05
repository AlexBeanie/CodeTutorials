function toCollection(pairs) {
    let collection = [];
    let idx = 0;
    for (item of pairs) {
        collection[idx] = {
            id: item[0],
            name: item[1].name,
        };
        idx++;
    }
    return collection;
}

let pairs = [
    [1, {name: 'Cristian'}], 
    [2, {name: 'Pablo'}], 
    [3, {name: 'Juan'}],
];

let result = toCollection(pairs);
console.log(result);