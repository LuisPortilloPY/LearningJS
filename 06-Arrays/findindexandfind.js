const a = ["hola",2,5,10,false,null,true,undefined,"adios"]
const busqueda = a.findIndex(buscar =>{
    if(buscar===5){
        return true
    }
}
)
console.log(busqueda)



//para encontrar el indice del listado se utilizaria findIndex

// y en caso de objetos
const listado =  [
    {nombre:"luis", edad:27},
    {nombre:"carlos", edad:31},
    {nombre:"luna", edad:18},
    {nombre:"juan", edad:28},
    {nombre:"andrea", edad:29}
]

const global = listado.findIndex(index=>{
    if (index.nombre==="carlos") {
        return true
    }
}
)
console.log(global)
// tambien se puede utilizar en listados de objetos
console.log(listado)



const search =listado.findIndex(found=>{
    return found.nombre==="carlos"

})
console.log(search)

const{nombre}=listado.find(x=> x.edad===28)
console.log(nombre)
// me trae el const{nombre de quien deseo}=listado.find(variableparalabusqueda=>variabledebusqueda.condicion=condiciondeseada)