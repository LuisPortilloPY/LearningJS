// caasos especiales break y continue
let lista=[1,2,3,4,5,6,7,8,9,10];
for (let i=0; i<lista.length; i++){
    if (lista[i]===3){
        continue
    }
    console.log(i)
    
}
// en el caso del continue es como decir saltear este
for (let i=0; i<lista.length; i++){
    if (lista[i]===3){
        break
    }
    console.log(i)
    
}
// en el caso del break lo que hace es parar cuando encuentre ese dato... es una bandera.

