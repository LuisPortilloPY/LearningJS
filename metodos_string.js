// METODOS MAS UTILIZADOS CON CADENAS DE CARACTERES
// como obtener la longitud de un string
let str = "hola soy luis portillo"
let longitud = str.length
console.log(longitud)
// funciona para contar la cantidad de caracteres que cuenta el string

// obtener partes del string

// existen 3 los cuales son slice() substring() substr()
let str_slice = str.slice(0,8)
console.log(str_slice)
// si se coloca dentro del parentesis un solo numero cuenta hasta ese punto y a partir de ahi salen todos los datos
// si se colocan dos datos es de donde hasta donde


let str_substring = str.substring(0,8)
console.log(str_substring)


// reemplazar partes del string
let cadena = "HOLA QUE TAL SOY UNA CADENA JEJE"
console.log(cadena.replace('CADENA', 'string'))
let cadenanueva = cadena.replace('CADENA','string')
console.log(cadenanueva)
// tiene que ser exactamente igual... y solo funciona sobre el primero que encuentre... 
// es decir si hay varias palabras repetidas.. 
// funciona solo sobre el primero... y en caso de que se escriban igual 
// pero tengan diferencias de mayusculas, no funciona

// si uso la funcion global reemplaza en todas partes
let nueva = "hola la la la la"
console.log(nueva.replace('la', 'le'))
console.log(nueva.replace(/la/g, 'le'))
// de esta forma puedes reemplazar en general 
//  toda palabra que sea igual en cualquier parte de la cadena
