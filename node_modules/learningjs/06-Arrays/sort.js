// comparacion y ordenamiento sort() (sort en ingles es ordenar)


const array = [0,1,3,50,100,-20,80,40,12314]

array.sort((a,b)=>{
    if (a <b ) {
        return -1;
    } else if(a > b) {
        return +1;
    } else {
        return 0;
    }
})
// [para ordenar de menor a maayor]

console.log(array)


// para ordenar unicamente arrays numericos
const numeros = [0,10,-50,-30,-10-999,-10000,10000000,123123]
// otra forma de ordenar los numeros de menor a mayor
const menormayor=numeros.sort((a,b)=>a-b)
console.log(menormayor)

// y otra forma de ordenar de mayor a menor
const mayormenor= numeros.sort((a,b)=>b-a)
console.log(mayormenor)

// par ordenar lista de objetos

const listado =  [
    {nombre:"luis", edad:27},
    {nombre:"carlos", edad:31},
    {nombre:"luna", edad:18},
    {nombre:"juan", edad:28},
    {nombre:"andrea", edad:29}

]

const orderlistado = listado.sort((a,b)=>{
    if (a.edad<b.edad) {
        return -1
        
    } else if (b.edad<a.edad){
        return +1
        
    }else{
        return 0;

    }
})
console.log(orderlistado)
// de la formaa larga seria asi y de la forma corta seria
// esta es de menor a mayor
const listmema = listado.sort((a,b)=>a.edad-b.edad)
console.log(listmema)


// esto es de mayor a menor
const listmame = listado.sort((a,b)=>b.edad-a.edad)
console.log(listmame)