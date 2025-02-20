const fecha = new Date()

console.log(fecha.toString())


// primera forma de inicializar fechas

// segunda forma
// los meses inician en 0 para Date
const fecha2 = new Date(1997,0,27)
console.log(fecha2.toDateString())
// para cambiar la  forma en que se muestran los datos.... puedo usar tostring() o .toDateString()
console.log(fecha.toDateString())


// metodo 3


const fecha3 = new Date(-1000000000000)
console.log(fecha3)
// creo que dificil de utilizar.... para expresar en milisegundos 

// otro...definir fechas de forma de string
// tiene que ser en ingles
const fechastring = new Date("January 27, 1997 12:15:15")
console.log(fechastring)

// comparar dos fechas

console.log(fecha>fechastring)
// no se pueden comparar fechas con ====
// para comparar se debe de convertir a miliseguntos
console.log(fecha.getTime()===fechastring.getTime())
console.log(fecha.getTime())
console.log(fechastring.getTime())

// para obtener el dia, el mes y el año de una fecha

console.log(fecha.getDay())
console.log(fecha.getFullYear())
// siempre +1 ya que meses comienza en 0
console.log(fecha.getMonth()+1)
// url para objtener el toLocaleDateString
console.log(fecha.toLocaleDateString("es-ES"))
