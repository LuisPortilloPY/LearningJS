let arrays = [1,2,3,4,5,6,7,8,9,10]
// una lista puede contener todo tipo de contenido es decir, puede ser numero, string,booleano, indefinido, null, objetos, etc.
let var1 = "chau"
let var2 = {id:false}

let n = [1,"hola", false, {id:5}, null,undefined,var1, var2]
console.log(n)
// para acceder al contenido se realiza por posiciones como un veector normal y se puede utilizar al igual que antes para leer dentro de un for

console.log(n[5])

for (let i = 0; i < n.length; i++) {
    console.log("position",i)
    console.log(n[i])
}
//

// metodos para introducir nuvos valores en nuestros arrays
// .push() para agregar datos al final
// 
n.push("final",45,0,2)
console.log(n)
// valores al principio seria Unshift()
n.unshift("probando unshift")
console.log(n)

// metodos para eliminar valores dentro de un arrays
// primer metodo .pop() y segundo .shift() --> mutan el valro del array al igual que al principio

// para borrar valores del final -->pop

const arraysito = [1,2,"3",false]
arraysito.pop()
console.log(arraysito)
// para borrar valores del principio shift

arraysito.shift()
console.log(arraysito)
// con decir mutar se hace referencia a que cambia para siempre el valor

// metodos para eliminar, modificar y añadir valores en nuestro array

// splice(x,y,z)
const ar = [1,2,3,4,5,6,7,8,9,10]
ar.splice(4,2)
console.log(ar)

// splice(x,y) x--> donde comienza(la posicion)  y--> cuantos desde ahi

// añadir valores .splice(x,y,z) z--> se agrega a la lista por ejemplo   usando--> splice(indice,0,valores)
ar.splice(0,0,"Hola")
console.log(ar)

// tambien podemos usar para modificar los valores splioce(indice,1,valores)

ar.splice(0,1,0)
console.log(ar)