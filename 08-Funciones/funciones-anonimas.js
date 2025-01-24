// FUNCIONES DE TIPO FLECHA Y FUNCIONES ANONIMAS
const a = [1,2,3,4,5,6,7,8,9]
// const a1 = a.map(function(valor){
//     return valor * 2;

// })
// console.log(a1)
// forma uno

// forma 2
const a1 = a.map((valor)=>valor*2)
console.log(a1)

// hacen lo mismo de diferente forma

const doble = valor=>valor*2
console.log(doble(6))

// es una forma de crear funciones anonimas 
variable = 7
console.log(variable)


// las funciones tipo flechas anonimas son funciones que no tienen nombre pero estan definidas


const duplicar = valor=>valor*2
console.log(a.map(duplicar))

// de esta forma
