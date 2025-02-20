// listas , vectores(arrays)
const lista=[1, "hola", true, undefined, null]
console.log(lista)
const lista2= new Array(2, "hola", true, undefined, null)
console.log(lista2)
const lista3 = new Array(4);
// al poner el numero dentro del arrays estamos definiendo cuantos espacios tendra el array
lista3[0]= "soy el porimer elemento";
// lista de listas
var lista4=[lista,lista2,lista3]
console.log(lista4)
console.log(lista3)
// objetos 
const movil={
    altura: 10,
    anchura: 5,
    color: "rojo",
    marca: "xiaomi",
    bloqueado: true,
    contactos:["LUIS","CARLOS", "ANDRES"],
    contactomain:{
        nombre:"luis",
        apellido:"portillo",
        ci: "5139886"
    },
    "altura tarjeta":4
}
//puedo agregar atributos fuera del objeto 
movil.anho = 2024;
console.log(movil)
// puedo cambiar atributos fuera del objeto
movil.marca="samsung";
console.log(movil.contactos)
console.log(movil)
// fechas
//librerias de apoyo moment.js
const ahora = new Date();
console.log(ahora.toString());
const fecha_milis = new Date(10);
console.log(fecha_milis.toString())
const fecha_valores = new Date(2024,11,31)
console.log(fecha_valores.toString())
const dia = ahora.getDate()
const mes = ahora.getMonth()+1;
const anho= ahora.getFullYear();
console.log(dia);
console.log(mes);
console.log(anho);
console.log(anho,mes,dia)