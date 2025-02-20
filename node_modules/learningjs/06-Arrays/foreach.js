const a = ["hola",2,5,10,false,null,true,undefined,"adios"]
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}
// forma antigua
// forma mas eficiente forEach
let s=0
let suma = 0
const n = [3,5,67,9,7,1,1,4,6]

n.forEach(valor=>{
    s=s+valor;
    suma+=valor;
    console.log(valor)
})
console.log(s)
console.log(suma)
