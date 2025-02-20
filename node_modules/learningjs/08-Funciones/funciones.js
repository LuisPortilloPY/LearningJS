// que son las funciones?  

// puedo tener los parametros que necesite

// como se declaran? 

// y como se utiliza

const n="carlos"
function saludar() {
    console.log("hola bb")
}

saludar(2,"hola",false)

function x(nombre) {
    console.log(`hola ${nombre}`)

}
x(n)
nombre="jose"
function despedir(nombre) {
    nombre="luis"
    console.log(`Adios${nombre}`)
    
}
console.log(nombre)
despedir("luis")
despedir(n)

// x("luis")

// forma de enviar datos


// las variables dentro de la funcion son internas... solo existen dentro de la funcion
let persona = {nombre: "luis", apellido:"portillo"}
function saludamos(objeto) {
    objeto.nombre="carlos"
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`)
}

saludamos(persona)
console.log(persona)
// pero si muta el objeto original utilizando objetos.

// para que siempre tenga un valor por defecto

function numeroimp(numero=8) {
    console.log(numero)

    
}
numeroimp(5)
// parametros por defecto.... se puede realizar y no deberian de afectar a la funcion.... en caso de que se ejecute la funcion con errores....

// 

// tambien se pueden definir objetos con numeros indeterminados...
function imp(...n) {
    console.log(n)
}

imp(1,2,3,4,5,6,7)
// se crea un array
// entonces.. se puede usar el metodo reduce para sumar todos los parametros que se le envien tal que asi:

// function suma(...nums) {
//     console.log(nums.reduce((a,b)=>a+b))
//     return 
// }


// de esta forma no se puede devolver valor porque no esta asignado a ninguna parte
// entonces se debe de asgianar la funcion para poder obtener el valor...
function suma(...nums) {
    return nums.reduce((a,b)=>a+b) 
}
const s= suma(1,2,3,4,5,6,7,8,9);
console.log(s)
// de esta forma se puede sumar todos los parametros que se agreguen dentro de la funcion...

// tal que asi... entonce podemos realizar funciones y utilizarlas en otro lado...

function resta(a,b) {
    if (a>b) {
        return a-b
    } else {
        return b-a
    }
    
}
let resultadoresta = resta(4,2)
console.log(resultadoresta)




function multiplicar(a=0,b=0) {
    return a*b
}
console.log(multiplicar(4,4))
const multiplicacion=multiplicar(2,2)
console.log(multiplicacion)

// todo variable declarada dentro de una funcion es una funcion interna... es decir no se puede llamar o utilizar fuera de esa funcion..
