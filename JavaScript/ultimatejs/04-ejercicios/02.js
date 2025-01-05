function nombreResolucion(ancho, alto) {
    let resolucion;
    if (ancho >= 1280 && alto >= 720) {
        resolucion = "HD";
    } else if (ancho >= 1920 && alto >= 1080) {
        resolucion = "FHD";
    } else if (ancho >= 2560 && alto >= 1440) {
        resolucion = "WQHD";
    } else if (ancho >= 3840 && alto >= 2160) {
        resolucion = "4K";
    } else if (anchos >= 7680 && alto >= 4320) {
        resolucion = "8K";
    } else {
        resolucion = false;
    }
    return resolucion;
}

let resolucion = nombreResolucion(1366, 768);
console.log(resolucion);