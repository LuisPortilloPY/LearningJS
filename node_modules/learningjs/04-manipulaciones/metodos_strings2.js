
// para eliminar espacios al principio y al final del string se utiliza trim
let str = "               hola soy una variable      "
console.log(str)
let n = str.length
console.log(n)
let sinespacio = str.trim()
console.log(sinespacio)
console.log(sinespacio.length)


// se puede observar la disminucion de espacio en general
// pero tambien se puede utilizar trimstart par borrar los espacios del principio
//  y trimend con los espacios del final

console.log(str.trimStart().length)
console.log(str.trimEnd().length)

// para obtener el caracter en una posicion especifica se utiliza charArt
let geet = sinespacio.charAt(3)
console.log(geet)


// y si quiero objetern la posicion de una palabra dentro de una cadena se utilizar indexOF


console.log(sinespacio.indexOf("a"))
console.log(sinespacio.lastIndexOf("a"))
//  el indexof encuentra el primero y el last el ultimo
