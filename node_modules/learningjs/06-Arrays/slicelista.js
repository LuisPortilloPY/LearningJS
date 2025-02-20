// como obtener una lista a partir de otra .slice()
const array = ["hola",1,2,3,true,false,null, "adios"]
// el metodo slice no modifica el valor del array original
console.log(array.slice(1,4))
// es .slice(indiceinicio, indice final) trae desde es inicio al final el final no agarra es < no un <=

const array2 = array.slice(1,4)
console.log(array2)

// para capturar datos desde una lista
// tambien se puede utilizar a la inversa
