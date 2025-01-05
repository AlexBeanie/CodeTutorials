function precioCompleto(price, tax) {
    let addition = price * tax;
    return price + addition;
}

let precio = precioCompleto(19.90, 0.15);
console.log(precio);