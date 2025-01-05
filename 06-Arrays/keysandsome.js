// comparativa pero some() algunos

const x= [0,1,2,3,4,5]
const y= [1,2,3,4,5,6]
const existe =x.some(valor=>valor===90)
console.log(existe)

const mayor = x.some(mayor=>mayor>=90)
console.log(mayor)



const objeto = [
    {nombre:"luis", edad:27},
    {nombre:"carlos", edad:31},
    {nombre:"juan", edad:28}
    
]
const existeLuis = objeto.some(persona=>persona.nombre==="luis")
console.log(existeLuis)


const existepersona = objeto.find(persona=>persona.nombre==="luis")
console.log(existepersona)

const existefilter = objeto.filter(persona=>persona.nombre==="luis")
console.log(existefilter)

const filtro = objeto.filter(persona=>{
    if(persona.edad>=20){
        return true
    }
})
console.log(filtro)
const busqueda= objeto.filter(persona=>{
    if(persona.edad>=20){
        return true
    }
})
console.log(busqueda)



const set = new Set ([2,3,"hola",4])
const ar_set = Array.from(set)
console.log(ar_set)


// para obteenr un lista a partir de una lista iterable

const str = "hola mundo"
const iterable = Array.from(str)
console.log(iterable)

// se utiliza array.from


// keys  para obtener un iterable de todos los indices 
const keys = x.keys()
console.log(keys)



const ar_keys = Array.from(keys)
console.log(ar_keys)