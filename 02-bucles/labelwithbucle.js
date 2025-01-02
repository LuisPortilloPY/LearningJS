// Etiquetas en los bucles
let unidades = 0;
let decenas= 0;
bucleDecenas: while (true) {
    bucleUnidades: while(true){
        console.log(`El numero actual es : ${decenas}${unidades}`)
        unidades++
        if(unidades===10){
            unidades=0;
            break bucleUnidades
        }
        if(decenas===10){
            break bucleDecenas
        }
    }
    decenas++

}
console.log("ya termino")