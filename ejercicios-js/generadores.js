function* generar () {
    for (let i = 1; i <= 5; i++) {
        yield i;
    }
}

let c = console.log,
    generador = generar();
// do {
//     c(generador.next().value);
    
// } while (generador.next().value != null)