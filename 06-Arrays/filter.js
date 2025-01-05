// metodo filt para filtrar
const listado =  [
    {nombre:"luis", edad:27},
    {nombre:"carlos", edad:31},
    {nombre:"luna", edad:18},
    {nombre:"juan", edad:28},
    {nombre:"andrea", edad:29}

]

const newlist = listado.filter(valor =>{
    if(valor.edad>27){
        return true;
    }
})
console.log(newlist)

// metodo 2 mismo recortado que antes

const viejos = listado.filter(v=>v.edad>27)
console.log(viejos)
// mas sencillo pero no completo....
// forma normal para sacar datos
const nlista = listado.filter(filtro=>{
    if(filtro.nombre!=="luis"){
        return true
    }
})
console.log(nlista)
// mismo pero de la forma corta
const cortalista = listado.filter(filtracion=>filtracion.nombre!=="luis")
console.log("lista corta")
console.log(cortalista)