// metodo de reduce
const listado =  [
    {nombre:"luis", edad:27},
    {nombre:"carlos", edad:31},
    {nombre:"luna", edad:18},
    {nombre:"juan", edad:28},
    {nombre:"andrea", edad:29}

]
// reduce acepta 4parametros... valor inidicial ,...valora anterior...currecnt...indice...array original
const a= [1,2,3]
const suma = a.reduce((acumulado,siguientes,indice,vector)=>{
    console.log(acumulado)
    console.log(siguientes)
    console.log(indice)
    console.log(vector)
    return acumulado+=siguientes
    return 

})

console.log(suma)
const vector = [0,1,2,3,4,5]
const s = vector.reduce((a,b)=>{
return a+=b
})
console.log(s)

console.log(vector.length/2)





