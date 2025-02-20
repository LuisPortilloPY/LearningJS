// metodos tipo flechas
// para buscar un valor dentro de una lista .find()
const a = ["hola",2,5,10,false,null,true,undefined,"adios"]
const variable = a.find(v=>{
    if(v===5){
        return true;
    }else{
    return false
    }
})
console.log(variable)


const objeto = [
    {nombre:"luis", edad:27},
    {nombre:"carlos", edad:31},
    {nombre:"juan", edad:28}
    
]
// metodo 1 de escritura
// const busqueda = objeto.find(buscar=>{
//     if(buscar.nombre==="luis"){
//         return true
//     }
// }
// )

// metodo 2 de escritura

// const busqueda = objeto.find(buscar=>{
//    return buscar.nombre==="luis"
// }
// )

// metodo 3
console.log(busqueda.edad)

const {edad}=objeto.find(o=>o.nombre==="luis")
console.log(edad)


