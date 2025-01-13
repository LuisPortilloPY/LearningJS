// UTILIZANDO CONJUNTOS O SETS

const array = [0,1,2,3,4,5,2,3,4,6,7,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,{id:5}, false,"hola","bai"]
const miset = new Set(array)
console.log(miset)
console.log(array)
// el set no permite contener valores repetidos
// mientras que el array permite contener todo tipo de valores
// para asegurar que no existan valores repetidos se puede utilizar sets


// se puede utilizar .add() para agregar al final valores

// ejemplo

miset.add(100)
miset.add(200)
miset.add(true)
console.log(miset)
// para eliminar seria .delete(el elemento a eliminar)
// ejemplo
miset.delete("hola")
console.log(miset)
miset.delete("bai")
console.log(miset)

// para verificar si contiene un valor se utiliza has
console.log(miset.has(2))
//similar al  include()
console.log(array.includes(2))
// para saber el tamaño se usa .size
console.log(miset)
console.log(miset.size)
 
miset.forEach(valor=>{
    console.log(valor)
})

const iterador_miset = miset.values()
console.log(iterador_miset)


const ar_miset = [...miset]
console.log(ar_miset)


