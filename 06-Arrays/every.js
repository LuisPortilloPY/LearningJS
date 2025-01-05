// comparar listas

// para comparar listas se utiliza .every()


const x = [1,2,3,4,5,6,7,8,9,10,""]
const r= x.every(valor=>{
    if (typeof valor ==="number") {
        return true
    } else{
        return false
    }
})

console.log(r)

// revisa todos los componentes y compara todos los componentes


const resultado = x.every(comparacion=>comparacion>0)
console.log(resultado)


// para corroborar que tambien se puede realizar de esta forma
const revisar = x.every(novo => typeof novo ==="number")
console.log(revisar)



const a1 = [1,2,3]
const a2 = [1,2,3]
console.log(a1===a2)
// las listas no se pueden comparar asi
const comparing = (a1, a2)=> {
    if (a1.length  !==a2.length) return false
    const res = a1.every((valor,i)=>valor===a2[i])
    return res

}
console.log(comparing(a1,a2))
let si=0
let no=0
if (a1.length===a2.length) {
    for (let i = 0; i < a1.length; i++) {
        if(a1[i]===a2[i]){
            si++
        }else{
            no++
        }
        
    }
}
if(no>0){
    console.log("No son iguales")
}else if(si===a1.length& si===a2.length){
    console.log("iguales")
}


const funcioncomparar = (a1,a2)=>{
    if (a1.length !== a2.length) return false
    const respuesta = a1.every((valor,i)=>valor===a2[i])
    return respuesta
}
const a3 =[0,1,2,3]
console.log(funcioncomparar(a1,a3))



