// funciones asincronas y promesas
function miAsinc() {
    // hace una llamada a una base de datos externa 
    // y a tener en cuenta puede darnos algunos errroes
}
const miPromesa = new Promise((resolve, reject)=>{
    // sii todoo esta correcto
    const i = Math.floor(Math.random()*2)
    if (i!==0) {
        resolve()
    }else{
        reject()
    }
})
// esta es la forma en la funciona.....
miPromesa
.then(()=>console.log("se ha ejecutado de forma correcta"))
.catch(()=>console.log("ERRORES"))
.finally(()=>console.log("yo siempre me ejecuto"))

// LA FORMA DE LLAMARLA


// Una promesa en programación, específicamente en JavaScript, es un objeto que representa la eventual 
// finalización (o falla) de una operación asincrónica y su valor resultante. 
// Las promesas permiten manejar operaciones asincrónicas de una manera más legible y 
// manejable que los callbacks anidados.

// Características principales de una promesa:
// Estados de una promesa:

// Pendiente (Pending): Estado inicial, ni cumplida ni rechazada.
// Cumplida (Fulfilled): La operación se completó con éxito.
// Rechazada (Rejected): La operación falló.
// Métodos principales:

// then(): Se ejecuta cuando la promesa se cumple.
// catch(): Se ejecuta cuando la promesa es rechazada.
// finally(): Se ejecuta independientemente de si la promesa se cumple o se rechaza.
