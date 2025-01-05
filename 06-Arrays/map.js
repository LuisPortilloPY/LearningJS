// meotdos avanzados, obtencion de listas a partir de listas

const ciudades = ["oviedo","asuncion","carayao","cde","san lorenzo"]

ciudades.forEach(busqueda=>{
    console.log(busqueda)
})


const numeracion = ciudades.map(v=>{
    
    return v.concat("ciudad")
})
console.log(numeracion)

// con concat podemos concatener al final de cada palbra lo que deseamos


// funcion avanzada de callback como foreach y find y ahora map

// const nuevaciudades=ciudades.map((valor,indice) =>{
// console.log(indice)
// return `${indice+1}-${valor}`.toUpperCase()
// }
// )
// console.log(nuevaciudades)
// y tambien puedo retocarlos... en mayuscula minuscula y etc... para realizar numeraciones se puede utilizar la funcion de callback utilizando map
// tambien se pueden eliminar la {} ya que no esta calculando nada...simplemente concatenando... ni tampoco el return.. de este metodo...

const nuevaciudades=ciudades.map((valor,indice) => `${indice+1}-${valor}`.toUpperCase())
console.log(nuevaciudades)