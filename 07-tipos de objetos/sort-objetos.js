const objeto = {
    nombre: "Luis",
    apellido: "Portillo",
    edad: 27,
    ci : "5139786",
    "4nai": true,
    juegos:["cs","lol","valorant","4nai"]
}
console.log(objeto.juegos)
console.log(objeto["4nai"])

const propiedad = "ci"
console.log(objeto[propiedad])
// para acceder a propiedad puedo crear una variable que contenga el nombre de la propiedad


const obj = objeto
console.log(obj)
obj.nombre = "carlos"
console.log(obj.nombre)
console.log(objeto.nombre)

// al hacer un a=b dentro de objetos se iguales y cargan por igual.. es decir si cambio algo en uno.. cambia en el otro.


let a=4;
let b=a;
console.log(a)
console.log(b)
b=8;
console.log(b)
console.log(a)
// en caso de numero o strings no pasa eso

const x={...objeto}
console.log(x)
x.nombre="Luis"
console.log(x.nombre)
console.log(objeto.nombre)

// de esta forma no copia como la forma anterior... ya que el es igual no funciona en objetos como un metodo de asignacion.

// como ordenar listas de objetos en funcion de una variable
const lista = [
    {titulo:"titanic", anho:1997},
    {titulo: "moana", anho:2016},
    {titulo:"x",anho:1990},
    {titulo:"y",anho:2000},
    {titulo:"z",anho:2020},
]

// para ordenar por fecha de menor a mayor .....recordar que el sort muta el original.. es decir lo transforma 

console.log(lista.sort((a,b)=>a.anho - b.anho))

console.log(lista.sort((a,b)=>a.titulo - b.titulo))
