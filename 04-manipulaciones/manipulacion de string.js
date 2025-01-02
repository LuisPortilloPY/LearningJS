// manipulacion de cadenas de texto
let input = "EsCOrPIO"
let db = "escorpio"
// metodos mayus, minusculas... toLowerCase(minusculas) y ToUpperCase(Mayusculas)

console.log(input.toLowerCase())
console.log(input.toUpperCase())

// tambien existe tolocale(Upper/lower)Case() tambien existen.. hacen lo mismo pero son muy situacionales
// concatenar dos cadenas de caracteres en una variable
let str1 = "cadena"
let str2 = "cadenita"
let strtodo =str1.concat(" ",str2);
console.log(strtodo)
// y agregar algo mas ademas....
// tambien se puede hacer con suma pero la suma funciona como suma de numeros... osea que no se puede utilizar en numeros
let var1 = "4"
let var2 = "5"
let suma= var1.concat(var2)
console.log(suma);
let literal=var1+""+var2
console.log(literal)
// como se puede ver funciona igual pero porque ambos funcionan como string

let a = 2
let b = 3
let ab = a+""+b; 
console.log(ab)




