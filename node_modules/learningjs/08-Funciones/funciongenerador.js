function* generaId(){
    let id = 0;
    while (true) {
        id++;
        if (id===10) {
            return
        }
        yield id //espera que se vuelva a llamar
    }
}

const numero= generaId()
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)


// Definición de la función generadora: function* generaId() { ... }
// Uso de yield: La palabra clave yield se utiliza para pausar la función 
// y devolver el valor actual de id.
// Iterador: const generador = generaId(); crea un iterador que se puede
//  usar para obtener los valores generados.
// Método next(): generador.next().value reanuda la ejecución de la función 
// generadora hasta el siguiente yield y devuelve el valor generado.