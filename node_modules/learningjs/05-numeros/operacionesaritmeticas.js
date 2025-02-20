// principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

// suma (+)
console.log(a+b)

// resta (-)
console.log(a-b)

// multiplicacion (*)
console.log(a*b)

// division (/)
console.log(a/b)

// representacion de los numero en cadenas de texto
console.log(typeof a)
let a_str = a.toString()
console.log(typeof a_str)
// typeof sirve para saber el tipo de datos que es 
// tostring para convertir a string


// redondeo de numeros decimales
let c = 3.3
let d = c*3;
console.log(d)
console.log(d.toFixed(1))
console.log(d.toFixed(0))
console.log(d.toFixed(4))
// el valor que va dentro del parentesis es la cantidad de numeros decimales que se desea
let e = 2024.345345345345;
console.log(e.toFixed(1))
// devuelve el valor de 2024,3
let x = 2024
console.log(x.toFixed(4))
// devuelve 2024.0000 aunque no tengo decimal...devuelve de forma decimal

// to.precision(x) devuelve cifras significativas
console.log(e.toPrecision(5))

// 

